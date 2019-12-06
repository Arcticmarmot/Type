import { NgModule } from '@angular/core';
import {ShareModule} from "../../share/share.module";
import {ArticleRoutingModule} from "./article-routing.module";
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CreateDatePipe } from './create-date.pipe';



@NgModule({
  declarations: [ArticleDetailComponent, CreateDatePipe],
  imports: [
    ShareModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
