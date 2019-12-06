import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecordComponent} from "./record.component";
import {AuthorizeGuard} from "./authorize.guard";


const routes: Routes = [
  {path: 'record',component:RecordComponent,canActivate:[AuthorizeGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordRoutingModule { }
