import { Observable } from "rxjs";
import { MarkModel } from "./mark.model";

export interface CarModel {
    id: number;
    model: string;
    price: number;
    dateOfCirculation: Date;
    markID: number;
    mark$: Observable<MarkModel>;
}