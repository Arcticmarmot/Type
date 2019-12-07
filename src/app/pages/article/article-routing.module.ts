import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleDetailComponent} from "./article-detail/article-detail.component";
import {ArticleResolveService} from "./article-resolve.service";

const routes: Routes = [
  {path: '',
    component: ArticleDetailComponent,
    resolve:{articleDetailResolve: ArticleResolveService},
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
