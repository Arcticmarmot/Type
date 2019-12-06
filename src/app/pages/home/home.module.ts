import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ShareModule} from "../../share/share.module";
import { ChooseArticleComponent } from './choose-article/choose-article.component';


@NgModule({
  declarations: [HomeComponent, ChooseArticleComponent],
  imports: [
    HomeRoutingModule,
    ShareModule,
  ],
  entryComponents: [ChooseArticleComponent]
})
export class HomeModule { }
