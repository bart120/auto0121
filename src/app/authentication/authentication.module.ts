import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [
  { path: 'login', component: LoginComponent },
]


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class AuthenticationModule { }
