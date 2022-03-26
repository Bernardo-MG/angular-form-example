import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataFormComponent } from './data-form/data-form.component';
import { DataSelectComponent } from './data-select/data-select.component';
import { FormRoutingModule } from './form-routing.module';
import { CompanyViewComponent } from './company-view/company-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    DataSelectComponent,
    DataFormComponent,
    CompanyViewComponent
  ],
  imports: [
    FormRoutingModule,
    CommonModule,
    FontAwesomeModule
  ]
})
export class FormModule { }
