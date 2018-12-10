import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../_services/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private securityService: SecurityService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let claimType: string = next.data["claimType"];

    if (this.securityService.securityObject.isAuthenticated
      && this.securityService.securityObject[claimType]) {
      return true;
    }
    else {
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    }
  }
}
