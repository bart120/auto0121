import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, timer } from "rxjs";
import { environment } from "src/environments/environment";
import { MarkModel } from "../models/mark.model";
import { map, mergeMap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class MarkService {

    private marks: Array<MarkModel> = [];

    constructor(private http: HttpClient) { }

    getMarks(): Observable<Array<MarkModel>> {
        /*this.http.get<Array<MarkModel>>(environment.urlMark).subscribe(data => {
            this.marks = data;
            console.log(data);
            return data;
        });
        console.log('test');
        return this.marks;*/
        return this.http.get<Array<MarkModel>>(environment.urlMark);
    }

    getMarkByID(id: number): Observable<MarkModel> {
        return this.http.get<MarkModel>(`${environment.urlMark}/${id}`);
    }

    getMarksOrderByName(): Observable<Array<MarkModel>> {
        return this.http.get<Array<MarkModel>>(environment.urlMark).pipe(map(data => data.sort((a, b) => a.name < b.name ? -1 : 1)));
    }

    getMarksOrderByNameInterval(): Observable<Array<MarkModel>> {
        return timer(0, 10000).pipe(
            mergeMap(
                () => this.http.get<Array<MarkModel>>(environment.urlMark).pipe(map(data => data.sort((a, b) => a.name < b.name ? -1 : 1)))
            )
        );
        //return this.http.get<Array<MarkModel>>(environment.urlMark);
    }
}