import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationDropdownComponent } from './navigation-dropdown/navigation-dropdown.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';


@NgModule({
  declarations: [
    NavigationMenuComponent,
    NavigationDropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationMenuComponent
  ]
})
export class NavigationModule { }
