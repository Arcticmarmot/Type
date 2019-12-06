import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UploadComponent} from "./upload.component";
import {AuthorizeGuard} from "./authorize.guard";


const routes: Routes = [
  {path: 'upload',component: UploadComponent,canActivate: [AuthorizeGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
