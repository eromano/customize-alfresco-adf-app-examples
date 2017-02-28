
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Editor3DModule } from 'ng2-3d-editor';

import { CoreModule } from 'ng2-alfresco-core';
import { DataTableModule } from 'ng2-alfresco-datatable';

import { DocumentListModule } from 'ng2-alfresco-documentlist';
import { UploadModule } from 'ng2-alfresco-upload';
import { TagModule } from 'ng2-alfresco-tag';
import { LoginModule } from 'ng2-alfresco-login';
import { UserInfoComponentModule } from 'ng2-alfresco-userinfo';
import { ViewerModule } from 'ng2-alfresco-viewer';
import { AppComponent } from './app.component';
import { routing } from './app.routes';

import {
  HomeComponent,
  
  
  FilesComponent,
  AboutComponent,
  LoginDemoComponent,
  SettingComponent
} from './components/index';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        CoreModule.forRoot(),
        DataTableModule.forRoot(),
        
        
        DocumentListModule.forRoot(),
        UploadModule.forRoot(),
        ViewerModule.forRoot(),
        
        LoginModule.forRoot(),
        UserInfoComponentModule.forRoot(),
        Editor3DModule.forRoot(),
        TagModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        
        
        FilesComponent,
        AboutComponent,
        LoginDemoComponent,
        SettingComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
