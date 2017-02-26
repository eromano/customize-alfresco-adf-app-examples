
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, AuthGuardEcm, AuthGuardBpm } from 'ng2-alfresco-core';

import {
  AboutComponent,
  HomeComponent,
 SearchComponent,
 FilesComponent,

  LoginDemoComponent,
  SettingComponent
} from './components/index';

export const appRoutes: Routes = [
  {path: 'login', component: LoginDemoComponent},
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  
  {
    path: 'files',
    component: FilesComponent,
    canActivate: [AuthGuardEcm]
  },
  {
    path: 'files/:id',
    component: FilesComponent,
    canActivate: [AuthGuardEcm]
  },
  
  
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuardEcm]
  },
  
  
  {path: 'about', component: AboutComponent},
  {path: 'settings', component: SettingComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
