import { Component, OnInit } from '@angular/core';
import { MarkModel } from 'src/app/models/mark.model';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    title: string = 'App en formation';

    marks: Array<MarkModel> = [];

    constructor() { }

    ngOnInit(): void {
        this.marks = [
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'BMW', image: 'bmw.jpg' },
            { name: 'Audi', image: 'audi.jpg' }
        ];
    }
}
