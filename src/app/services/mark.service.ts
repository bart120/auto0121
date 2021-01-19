import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { MarkModel } from "../models/mark.model";


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
}