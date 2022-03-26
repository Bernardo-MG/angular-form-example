import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
const formModule = () => import('@app/company/form.module').then(m => m.FormModule);

const routes: Routes = [
  { path: '', redirectTo: '/company', pathMatch: 'full' },
  { path: 'company', loadChildren: formModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
