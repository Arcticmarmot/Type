import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUploadComponent } from './auth-upload.component';

describe('AuthUploadComponent', () => {
  let component: AuthUploadComponent;
  let fixture: ComponentFixture<AuthUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
