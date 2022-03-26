import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
const formModule = () => import('@app/form/form.module').then(m => m.FormModule);

const routes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' },
  { path: 'form', loadChildren: formModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
