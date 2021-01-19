import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
import { MarkService } from 'src/app/services/mark.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styles: [
  ]
})
export class ListCarComponent implements OnInit {

  listCar: Array<CarModel> = [];

  constructor(private servCar: CarService, private servMark: MarkService) { }

  ngOnInit(): void {

    this.servCar.getCars().subscribe(data => {
      for (const car of data) {
        car.mark$ = this.servMark.getMarkByID(car.markID);
      }
      this.listCar = data;
    });
  }

}
