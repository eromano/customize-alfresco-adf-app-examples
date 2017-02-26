
import { Component, Input } from '@angular/core';

@Component({
    selector: 'ng2-alfresco-version-badge',
    styles: [`.badge-style {
                 width: 46px;
                 text-align: center;
                 border-radius: 15px;
                 background: rgb(31, 188, 210);
                 color: white;
            }`],
    template: `  <div  *ngIf="version" class="badge-style">
                        V.{{version}}
                      </div>`
})
export class Ng2AlfrescoVersionBadgeComponent {

    @Input()
    version: string;

}
