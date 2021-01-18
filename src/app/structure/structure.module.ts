import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared.module';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        FooterComponent
    ],
    providers: [],
})
export class StructureModule { }
