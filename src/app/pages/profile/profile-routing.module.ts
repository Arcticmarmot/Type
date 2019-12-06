import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from "./profile.component";
import {ProfileResolveService} from "./profile-resolve.service";
import {AuthorizeGuard} from "./authorize.guard";


const routes: Routes = [
  {path:'profile',component: ProfileComponent,canActivate:[AuthorizeGuard],resolve:{profileResolve: ProfileResolveService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
