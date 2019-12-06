import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseArticleComponent } from './choose-article.component';

describe('ChooseArticleComponent', () => {
  let component: ChooseArticleComponent;
  let fixture: ComponentFixture<ChooseArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
