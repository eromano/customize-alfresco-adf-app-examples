import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { StorageService, LogService } from 'ng2-alfresco-core';
import { EcmUserService } from 'ng2-alfresco-userinfo';

@Component({
    selector: 'login-demo',
    templateUrl: './login-demo.component.html',
    styleUrls: ['./login-demo.component.css']
})
export class LoginDemoComponent implements OnInit {

    @ViewChild('alfrescologin')
    alfrescologin: any;

    providers: string = 'ECM';
    blackListUsername: string;
    customValidation: any;

    disableCsrf: boolean = false;
    isECM: boolean = true;
    isBPM: boolean = false;
    customMinLenght: number = 2;

    constructor(private router: Router,
                private storage: StorageService,
                private logService: LogService,
                private ecmUserService: EcmUserService) {

        this.customValidation = {
            username: ['', Validators.compose([Validators.required, Validators.minLength(this.customMinLenght)])],
            password: ['', Validators.required]
        };
    }

    ngOnInit() {
        this.alfrescologin.addCustomValidationError('username', 'required', 'LOGIN.MESSAGES.USERNAME-REQUIRED');
        this.alfrescologin.addCustomValidationError('username', 'minlength', 'LOGIN.MESSAGES.USERNAME-MIN', {customMinLenght: this.customMinLenght});
        this.alfrescologin.addCustomValidationError('password', 'required', 'LOGIN.MESSAGES.PASSWORD-REQUIRED');

        if (this.storage.hasItem('providers')) {
            this.providers = this.storage.getItem('providers');
        }

        this.initProviders();
    }

    initProviders() {
        if (this.providers === 'BPM') {
            this.isECM = false;
            this.isBPM = true;
        } else if (this.providers === 'ECM') {
            this.isECM = true;
            this.isBPM = false;
        } else if (this.providers === 'ALL') {
            this.isECM = true;
            this.isBPM = true;
        }
    }

    onLogin($event) {
    this.getEcmUserInfo();
    this.router.navigate(['/home']);
}

    onError($event) {
        this.logService.error($event);
    }

    toggleECM() {
        this.isECM = !this.isECM;
        this.storage.setItem('providers', this.updateProvider());
    }

    toggleBPM() {
        this.isBPM = !this.isBPM;
        this.storage.setItem('providers', this.updateProvider());
    }

    toggleCSRF() {
        this.disableCsrf = !this.disableCsrf;
    }

    updateProvider() {
        if (this.isBPM && this.isECM) {
            this.providers = 'ALL';
            return this.providers;
        }

        if (this.isECM) {
            this.providers = 'ECM';
            return this.providers;
        }

        if (this.isBPM) {
            this.providers = 'BPM';
            return this.providers;
        }

        this.providers = '';
        return this.providers;
    }

    getEcmUserInfo(): void {
        this.ecmUserService.getCurrentUserInfo()
            .subscribe((res) => {
                    let ecmUserImageUrl = this.ecmUserService.getUserProfileImage(res.avatarId);
                    this.saveBase64FromImageUrl(ecmUserImageUrl);
                }
            );
    }

    saveBase64FromImageUrl(url: string) {
        let img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = ()=> {
            let canvas: any = document.createElement('CANVAS');
            let ctx: any = canvas.getContext('2d');
            canvas.height = '64';
            canvas.width = '64';
            ctx.drawImage(img, 0, 0);
            let dataURL = canvas.toDataURL();
            this.storage.setItem('imageProfile', dataURL);
            canvas = null;
        };
        img.src = url;
    }

    getProfileImageFromStorage(): string {
        return this.storage.getItem('imageProfile');
    }

    validateForm(event: any) {
        let values = event.values;
        if (values.controls['username'].value === this.blackListUsername) {
            this.alfrescologin.addCustomFormError('username', 'This particular username has been blocked');
            event.preventDefault();
        }
    }

}
