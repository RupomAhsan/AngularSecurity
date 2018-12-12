import { Injectable } from '@angular/core';
import { AppUserAuth } from '../security/app-user-auth';
import { AppUser } from '../security/app-user';
import { Observable, of } from 'rxjs';
import { LOGIN_MOCKS } from '../security/login-mocks';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators/tap';


const API_URL = "http://localhost:5000/api/security/";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();

  constructor(private http: HttpClient) {

  }

  resetSecurityObject(): void {
    this.securityObject.userName = "";
    this.securityObject.bearerToken = "";
    this.securityObject.isAuthenticated = false;

    this.securityObject.canAccessProduct = false;
    this.securityObject.canAddProduct = false;
    this.securityObject.canSaveProduct = false;
    this.securityObject.canAccessCategories = false;
    this.securityObject.canAddCategories = false;
  }

  login(entity: AppUser): Observable<AppUserAuth> {
    // Initialize security object
    this.resetSecurityObject();


    return this.http.post<AppUserAuth>(API_URL + "login", entity, httpOptions).pipe(
      tap(resp => {

        // Use object assign to update the current object
        // NOTE: Dont's create a new AppUserAuth object, because that destroys all references to object
        Object.assign(this.securityObject, resp);
        // Store into local storage
        localStorage.setItem("bearerToken", this.securityObject.bearerToken);
      })
    );

    return of<AppUserAuth>(this.securityObject);
  }

  logout(): void {
    this.resetSecurityObject();
  }
}
