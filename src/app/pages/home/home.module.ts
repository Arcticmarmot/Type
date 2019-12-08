import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ChooseArticleComponent } from './choose-article/choose-article.component';
import {NzButtonModule, NzIconModule, NzSwitchModule} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [HomeComponent, ChooseArticleComponent],
  imports: [
    HomeRoutingModule,
    NzButtonModule,
    NzIconModule,
    NzSwitchModule,
    FormsModule,
    CommonModule,
  ],
  entryComponents: [ChooseArticleComponent]
})
export class HomeModule { }
