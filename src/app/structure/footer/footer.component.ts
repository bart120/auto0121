import { Component, OnInit } from '@angular/core';
import { MarkModel } from 'src/app/models/mark.model';
import { MarkService } from 'src/app/services/mark.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    title: string = 'App en formation';

    marks: Array<MarkModel> = [];

    constructor(private servMark: MarkService) { }

    ngOnInit(): void {
        //this.marks = this.servMark.getMarks();
        /*[
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'BMW', image: 'bmw.jpg' },
            { name: 'Audi', image: 'audi.jpg' }
        ];*/
        this.servMark.getMarks().subscribe(data => {
            this.marks = data;
        });
    }
}
