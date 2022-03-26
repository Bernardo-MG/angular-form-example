import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSelectComponent } from './data-select/data-select.component';
import { DataFormComponent } from './data-form/data-form.component';
import { FormViewComponent } from './form-view/form-view.component';



@NgModule({
  declarations: [
    DataSelectComponent,
    DataFormComponent,
    FormViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormModule { }
