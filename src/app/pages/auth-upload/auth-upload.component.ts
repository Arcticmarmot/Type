import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {NzMessageService} from "ng-zorro-antd";
import {Router} from "@angular/router";
import {languages} from "../../utils/constants";
import {AuthUploadService} from "../../services/upload/auth-upload.service";


@Component({
  selector: 'app-auth-upload',
  templateUrl: './auth-upload.component.html',
  styleUrls: ['./auth-upload.component.less']
})
export class AuthUploadComponent implements OnInit {

  @ViewChild('file',{static:false}) file;
  languages = languages;
  formData = this.fb.group({
    title: ['',[Validators.required,Validators.minLength(2)]],
    language: ['default'],
    public: [true],
    file: ['',Validators.required]
  });
  filePath = '';
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private message: NzMessageService,
              private route: Router,
              private authUploadService:AuthUploadService,) {
    this.formData.get('file').valueChanges.subscribe(
      (data:string)=> {
        this.filePath = data.slice(12)
      }
    )
  }

  ngOnInit() { }

  onSubmit() {
    const fd = new FormData();
    fd.set('file',this.file.nativeElement.files[0]);
    fd.set('title',this.formData.value.title);
    fd.set('language',this.formData.value.language);
    fd.set('public',this.formData.value.public);
    this.authUploadService.authUpload(fd).subscribe(
      (res)=>{
        this.message.success(res.text);
        setTimeout(()=>{
          //this.route.navigate(['/home']);
        },1000)
      },
      (err)=>{
        this.message.error(err.statusText);
      }
    );
  }

  upload() {
    this.file.nativeElement.click();
  }

  cancelUpload() {
    this.formData.get('file').setValue('');
  }

}
