import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styles: [
  ]
})
export class DetailCarComponent implements OnInit {

  car$?: Observable<CarModel>;

  constructor(private servCar: CarService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params.id;
    this.car$ = this.servCar.getCarByID(id);
  }

}
