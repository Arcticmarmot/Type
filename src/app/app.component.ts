import {Component, EventEmitter, OnInit} from '@angular/core';
import {ComponentPortal} from "@angular/cdk/portal";
import {Overlay, OverlayPositionBuilder} from "@angular/cdk/overlay";
import {LoginComponent} from "./share/login/login.component";
import {Router} from "@angular/router";
import {LogoutService} from "./services/login/logout.service";
import {AuthorizeService} from "./services/login/authorize.service";
import {ReAuthorizeService} from "./services/login/re-authorize.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'Type2';
  loginPortal: ComponentPortal<LoginComponent>;
  closeOverlay = new EventEmitter();
  auth: boolean = false;
  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private route: Router,
              private logoutService:LogoutService,
              private authorizeService: AuthorizeService,
              private reAuthorizeService: ReAuthorizeService){
  }
  ngOnInit(): void {
    this.updateAuth();
    this.reAuthorizeService.reAuthorizeInformation$.subscribe(
      _ => {
        this.logout();
        this.login();
      }
    );
    this.reAuthorizeService.authUpdate$.subscribe(
      _=>{
        this.updateAuth();
      }
    )
  }
  updateAuth(){
    this.authorizeService.authorize().subscribe(
      (auth: boolean)=>{
        this.auth = auth;
      }
    )
  }
  login() {
    if(this.route.url.startsWith('/article')) {
      this.route.navigate(['/home']);
    }
    const positionStrategy = this.overlayPositionBuilder
      .global()
      .centerVertically()
      .centerHorizontally();
    const ol = this.overlay.create(
      {
        positionStrategy: positionStrategy,
        hasBackdrop: true,
      },
    );
    //LoginComponent
    this.loginPortal = new ComponentPortal(LoginComponent);
    const componentRef = ol.attach(this.loginPortal);

    componentRef.instance.closeOverlay = this.closeOverlay;
    this.closeOverlay.subscribe(
      _ => {
        this.loginPortal.setAttachedHost(ol);
        this.closeOl()
      }
    );
  }
  logout() {
    this.auth = false;
    this.logoutService.logout().subscribe();
  }
  closeOl(){
    this.loginPortal.detach();
  }




}
