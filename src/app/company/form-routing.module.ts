import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFormComponent } from './data-form/data-form.component';
import { DataSelectComponent } from './data-select/data-select.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: DataSelectComponent },
            { path: ':id', component: DataFormComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }