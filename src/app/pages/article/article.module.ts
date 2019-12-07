import { NgModule } from '@angular/core';
import {ShareModule} from "../../share/share.module";
import {ArticleRoutingModule} from "./article-routing.module";
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CreateDatePipe } from './create-date.pipe';
import {EditorModule} from "../../share/editor/editor.module";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [ArticleDetailComponent, CreateDatePipe],
  imports: [
    ArticleRoutingModule,
    EditorModule,
    CommonModule
  ]
})
export class ArticleModule { }
