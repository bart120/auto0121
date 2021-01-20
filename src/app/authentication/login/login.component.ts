import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user?: UserModel = undefined;

  @ViewChild('password')
  passwd?: ElementRef;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    /*if (sessionStorage.getItem('USER') != null) {
      this.user = JSON.parse(sessionStorage.getItem('USER') || '{}') as UserModel;
    }*/
    this.auth.user$.subscribe(x => {
      this.user = x;
    });
  }

  onLogin(mail: string): void {
    /*this.user = { login: mail, name: 'Bob' };
    sessionStorage.setItem('USER', JSON.stringify(this.user));*/
    this.auth.login(mail, this.passwd?.nativeElement.value);
  }

  onLogout(): void {
    /*this.user = undefined;
    sessionStorage.removeItem('USER');*/
    this.auth.logout();
  }

}
