import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RolePermissionDirective} from "./directives";



@NgModule({
  declarations: [
    RolePermissionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RolePermissionDirective
  ]

})
export class SharedModule { }
