

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private localStorageService:LocalStorageService,private router: Router) {
    
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let logged = !!this.localStorageService.get("access-token");

    if (logged) {
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
  
}