import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarModel } from '../models/car.model';

@Injectable({
    providedIn: 'root'
})
export class CarService {
    constructor(private http: HttpClient) { }

    getCars(): Observable<Array<CarModel>> {
        return this.http.get<Array<CarModel>>(environment.urlCar);
    }
}