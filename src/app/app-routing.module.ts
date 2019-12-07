import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthUploadComponent} from "./pages/auth-upload/auth-upload.component";
import {AuthAdminGuard} from "./pages/auth-upload/auth-admin.guard";


const routes: Routes = [
  {path: 'article/:id/:articleAuth',
    loadChildren:()=>import('./pages/article/article.module').then(mod => mod.ArticleModule)},
  {path:'auth-upload/:password',
    loadChildren:()=>import('./pages/auth-upload/auth-upload.module').then(mod => mod.AuthUploadModule)},
  {path:'profile',
    loadChildren:()=>import('./pages/profile/profile.module').then(mod => mod.ProfileModule)},
  {path:'record',
    loadChildren:()=>import('./pages/record/record.module').then(mod => mod.RecordModule)},
  {path:'reset',
    loadChildren:()=>import('./pages/reset/reset.module').then(mod => mod.ResetModule)},
  {path:'result',
    loadChildren:()=>import('./pages/result/result.module').then(mod => mod.ResultModule)},
  {path:'upload',
    loadChildren:()=>import('./pages/upload/upload.module').then(mod => mod.UploadModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**',redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
