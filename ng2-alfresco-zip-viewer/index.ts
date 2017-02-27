
import { NgModule } from '@angular/core';
import { CoreModule } from 'ng2-alfresco-core';

import { Ng2AlfrescoZipViewerComponent } from './src/ng2-alfresco-zip-viewer.component';

export * from './src/ng2-alfresco-zip-viewer.component';

@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [
        Ng2AlfrescoZipViewerComponent
    ],
    providers: [
    ],
    exports: [
        Ng2AlfrescoZipViewerComponent
    ]
})
export class Ng2AlfrescoZipViewerModule {}
