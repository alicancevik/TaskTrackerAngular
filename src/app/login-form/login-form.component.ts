import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string = "";
  password: string = "";

  loading = false;
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    if (this.username == "" && this.password == "") {
      alert("Fill the required properties!");
      return;
    }

    this.loading = true;
    this.authService.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.error = error;
          this.loading = false;
          alert(error);
        });
  }

  resetPassword(){
    this.authService.resetPassword(this.username, this.password)
      .pipe(first())
      .subscribe(
        data => {
          window.location.reload();
        },
        error => {
          this.error = error;
          this.loading = false;
          alert(error);
        });
  }

}
