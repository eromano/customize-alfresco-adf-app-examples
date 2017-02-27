
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from 'ng2-alfresco-core';

import { Ng2AlfrescoZipViewerModule } from 'ng2-alfresco-zip-viewer';

@Component({
  selector: 'my-app',
  template: `<ng2-alfresco-zip-viewer></ng2-alfresco-zip-viewer>`
})
class DemoApp {
  constructor() {
    console.log('constructor');
  }
}

@NgModule({
    imports: [
        BrowserModule,
        CoreModule.forRoot(),
        Ng2AlfrescoZipViewerModule
    ],
    declarations: [ DemoApp ],
    bootstrap:    [ DemoApp ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
