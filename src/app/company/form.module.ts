import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataFormComponent } from './data-form/data-form.component';
import { DataSelectComponent } from './data-select/data-select.component';
import { FormRoutingModule } from './form-routing.module';
import { CompanyViewComponent } from './company-view/company-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DataSelectComponent,
    DataFormComponent,
    CompanyViewComponent
  ],
  imports: [
    FormRoutingModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
