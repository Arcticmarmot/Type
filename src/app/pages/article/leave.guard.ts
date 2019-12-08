import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<any> {
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot): boolean{
    return window.confirm('Do you want to leave typing?');
  }
}
