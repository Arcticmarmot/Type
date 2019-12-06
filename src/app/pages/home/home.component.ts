import {Component, EventEmitter, OnInit} from '@angular/core';
import {Overlay, OverlayPositionBuilder, OverlayRef} from "@angular/cdk/overlay";
import {ChooseArticleComponent} from "./choose-article/choose-article.component";
import {ComponentPortal} from "@angular/cdk/portal";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  choosePortal: ComponentPortal<ChooseArticleComponent>;
  closeOverlay = new EventEmitter();
  constructor(private overlay: Overlay, private overlayPositionBuilder: OverlayPositionBuilder) { }

  ngOnInit() {
  }
  start(): void{
    const positionStrategy = this.overlayPositionBuilder
      .global()
      .centerVertically()
      .centerHorizontally()
    const ol = this.overlay.create(
      {
        positionStrategy: positionStrategy,
        hasBackdrop: true,
      },
    )
    this.choosePortal = new ComponentPortal(ChooseArticleComponent);
    const componentRef = ol.attach(this.choosePortal);

    componentRef.instance.closeOverlay = this.closeOverlay;
    this.closeOverlay.subscribe(
      _ => {
        this.choosePortal.setAttachedHost(ol);
        this.closeOl()
      }
    )
  }
  closeOl(){
    this.choosePortal.detach();
  }
}
