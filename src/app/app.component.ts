import { Component } from '@angular/core';
import { UserModel } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  user?: UserModel = undefined;
  title = 'auto0121';

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    /*if (sessionStorage.getItem('USER') != null) {
      this.user = JSON.parse(sessionStorage.getItem('USER') || '{}') as UserModel;
    }*/
    console.log('oninit app comp');
    this.auth.user$.subscribe(x => {
      this.user = x;
      console.log('maj subscribe');
    });
  }

}
