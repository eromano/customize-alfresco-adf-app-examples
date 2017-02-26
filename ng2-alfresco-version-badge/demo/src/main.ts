
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from 'ng2-alfresco-core';

import { Ng2AlfrescoVersionBadgeModule } from 'ng2-alfresco-version-badge';

@Component({
  selector: 'my-app',
  template: `<ng2-alfresco-version-badge></ng2-alfresco-version-badge>`
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
        Ng2AlfrescoVersionBadgeModule
    ],
    declarations: [ DemoApp ],
    bootstrap:    [ DemoApp ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
