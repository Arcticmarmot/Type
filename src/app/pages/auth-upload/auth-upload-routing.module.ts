import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthUploadComponent} from "./auth-upload.component";
import {AuthAdminGuard} from "./auth-admin.guard";


const routes: Routes = [
  {path:'auth-upload/:password',component:AuthUploadComponent,canActivate: [AuthAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthUploadRoutingModule { }
