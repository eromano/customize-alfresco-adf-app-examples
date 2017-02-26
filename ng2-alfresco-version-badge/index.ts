
import { NgModule } from '@angular/core';
import { CoreModule } from 'ng2-alfresco-core';

import { Ng2AlfrescoVersionBadgeComponent } from './src/ng2-alfresco-version-badge.component';

export * from './src/ng2-alfresco-version-badge.component';

@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [
        Ng2AlfrescoVersionBadgeComponent
    ],
    providers: [
    ],
    exports: [
        Ng2AlfrescoVersionBadgeComponent
    ]
})
export class Ng2AlfrescoVersionBadgeModule {}
