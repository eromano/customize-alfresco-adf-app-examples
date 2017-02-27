import { Component, Input } from '@angular/core';
import { Http, Response, RequestOptions, ResponseContentType }  from '@angular/http';
import * as JSZip from 'jszip';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'ng2-alfresco-zip-viewer',
    template: `<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                  <thead>
                    <tr>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr  *ngFor="let file of zipFiles;  let idx = index">
                      <td class="mdl-data-table__cell--non-numeric">{{file.name}}</td>
                    </tr>
                  </tbody>
                </table>`
})
export class Ng2AlfrescoZipViewerComponent {

    @Input()
    urlFile: string;

    zipFiles: any;

    constructor(private http: Http) {

    }

    ngOnChanges() {
        this.http.get(this.urlFile, new RequestOptions({
                responseType: ResponseContentType.ArrayBuffer
            }))
            .toPromise()
            .then((res: Response) => {
                this.extractZipData(res);
            });
    }

    private extractZipData(res: Response) {
        let newZip = new JSZip();

        newZip.loadAsync(res.arrayBuffer())
            .then((zip) => {
                this.zipFiles = Object.keys(zip.files).map((key) => {
                    return zip.files[key];
                });
            });
    }
}
