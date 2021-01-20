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

    insert(car: CarModel): Observable<CarModel> {
        return this.http.post<CarModel>(environment.urlCar, car);
    }

    update(car: CarModel): Observable<CarModel> {
        return this.http.put<CarModel>(`${environment.urlCar}/${car.id}`, car);
    }

    delete(id: number): Observable<CarModel> {
        return this.http.delete<CarModel>(`${environment.urlCar}/${id}`);
    }

    getCarByID(id: number): Observable<CarModel> {
        return this.http.get<CarModel>(`${environment.urlCar}/${id}`);
    }
}