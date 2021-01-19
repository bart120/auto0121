import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: any = null;

  @ViewChild('password')
  passwd: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(mail: string): void {
    //console.log(mail);
    //console.log(this.passwd.nativeElement.value);
    this.user = { login: mail, name: 'Bob' };
  }

  onLogout(): void {
    this.user = null;
  }

}
