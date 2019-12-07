import { NgModule } from '@angular/core';
import {HomeModule} from "./home/home.module";
import {ArticleModule} from "./article/article.module";
import {ResultModule} from "./result/result.module";
import {UploadModule} from "./upload/upload.module";
import {ProfileModule} from "./profile/profile.module";
import {ResetModule} from "./reset/reset.module";
import {AuthUploadModule} from "./auth-upload/auth-upload.module";
import {RecordModule} from "./record/record.module";



@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    ArticleModule,
    ResultModule,
    UploadModule,
    ProfileModule,
    ResetModule,
    AuthUploadModule,
    RecordModule,
  ],
  exports: [
    HomeModule,
    ArticleModule,
    ResultModule,
    UploadModule,
    ProfileModule,
    ResetModule,
    AuthUploadModule,
    RecordModule,
  ]
})
export class PagesModule { }
