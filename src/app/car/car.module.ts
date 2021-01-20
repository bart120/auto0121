import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarComponent } from './add-car/add-car.component';
import { ListCarComponent } from './list-car/list-car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { CarRoutingModule } from './car.routing.module';
import { SharedModule } from '../shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddCarComponent, ListCarComponent, DetailCarComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CarModule { }
