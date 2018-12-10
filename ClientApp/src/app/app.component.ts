import { Component } from '@angular/core';
import { AppUserAuth } from './security/app-user-auth';
import { SecurityService } from './_services/security.service';

@Component({
  selector: 'ptc-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = "Angular Security Demo";

  securityObject: AppUserAuth = null;

  constructor(private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }

  logout(): void {
    this.securityService.logout();
  }
}
