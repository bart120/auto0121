import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { AddCarComponent } from './add-car/add-car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { ListCarComponent } from './list-car/list-car.component';

const childRoutes: Routes = [
    { path: 'add', component: AddCarComponent, canActivate: [AuthenticationGuard] },
    { path: 'list', component: ListCarComponent },
    { path: 'detail/:id', component: DetailCarComponent }
]

@NgModule({

    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule],
})
export class CarRoutingModule { }