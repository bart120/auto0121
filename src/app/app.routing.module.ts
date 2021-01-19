import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AddCarComponent } from './car/add-car/add-car.component';
import { ListCarComponent } from './car/list-car/list-car.component';
import { HomeComponent } from './master/home/home.component';
import { NotfoundComponent } from './master/notfound/notfound.component';

const routes: Routes = [


    { path: 'home', component: HomeComponent },
    { path: 'car/add', component: AddCarComponent },
    { path: 'car/list', component: ListCarComponent },
    { path: 'auth/login', component: LoginComponent },

    { path: 'notfound', component: NotfoundComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: '**', redirectTo: 'notfound' }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }