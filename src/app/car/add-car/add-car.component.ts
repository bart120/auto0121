import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/models/car.model';
import { MarkModel } from 'src/app/models/mark.model';
import { CarService } from 'src/app/services/car.service';
import { MarkService } from 'src/app/services/mark.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styles: [
  ]
})
export class AddCarComponent implements OnInit {

  formCar: FormGroup;
  marks$?: Observable<Array<MarkModel>>;

  constructor(private servMark: MarkService,
    private servCar: CarService,
    private snackBar: MatSnackBar,
    private router: Router) {

    this.formCar = new FormGroup({
      model: new FormControl('', [Validators.required]),
      price: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      dateOfCirculation: new FormControl('', [Validators.required]),
      markID: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.marks$ = this.servMark.getMarksOrderByName();
  }

  onSubmit(): void {
    console.log(this.formCar);
    if (this.formCar.valid) {
      const car: CarModel = this.formCar.value as CarModel;
      car.price = +car.price;
      this.servCar.insert(car).subscribe(data => {
        this.snackBar.open(`La voiture ${data.model} est enregistrée avec l'id ${data.id}`, 'OK');
        this.router.navigate(['/car/list']);
      }, err => {
        console.warn(err.message | err);
      });
    }
  }

}
