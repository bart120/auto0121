import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './master/home/home.component';
import { NotfoundComponent } from './master/notfound/notfound.component';

const routes: Routes = [


    { path: 'home', component: HomeComponent },

    /*{ path: 'car/add', component: AddCarComponent },
    { path: 'car/list', component: ListCarComponent },
    { path: 'car/detail', component: DetailCarComponent },*/

    /*{
        path: 'car', children: [
            { path: 'add', component: AddCarComponent },
            { path: 'list', component: ListCarComponent },
            { path: 'detail', component: DetailCarComponent }
        ]
    },*/

    { path: 'car', loadChildren: () => import('./car/car.module').then(x => x.CarModule) },

    //{ path: 'auth/login', component: LoginComponent },

    { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(x => x.AuthenticationModule) },

    { path: 'notfound', component: NotfoundComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: '**', redirectTo: 'notfound' }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }