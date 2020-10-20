import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AccessTokenDto, AccessUserDto } from '../models/access-token-dto';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    AuthService
  ]
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  activeUsername: string = "";

  activeAccessTokenDto: AccessTokenDto = new AccessTokenDto();

  constructor(private authService: AuthService, private localStorageService:LocalStorageService,
    private route: ActivatedRoute,
    private router: Router) {

    this.authService.currentUser.subscribe(x => {
      this.activeAccessTokenDto = x;
      console.log(x);
    });
  }


  ngOnInit(): void {
    this.activeAccessTokenDto = JSON.parse(this.localStorageService.get("access-token"));

  }

  login() {
    this.loading = true;
    this.authService.login('alicancevik', '1234')
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/projects/add']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });

  }

  // isLogged(){
  //   this.activeAccessTokenDto = this.authService.isLoggedIn();
  //   console.log(this.activeAccessTokenDto);
  // }

  profile() {
    console.log("profile!");
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
