import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataFormComponent } from './data-form/data-form.component';
import { DataSelectComponent } from './data-select/data-select.component';
import { FormRoutingModule } from './form-routing.module';



@NgModule({
  declarations: [
    DataSelectComponent,
    DataFormComponent
  ],
  imports: [
    FormRoutingModule,
    CommonModule
  ]
})
export class FormModule { }
