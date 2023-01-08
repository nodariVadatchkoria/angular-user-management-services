import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from "./dropdown.component";
import {DropdownItemComponent} from "./dropdown-item/dropdown-item.component";
import {DropdownDirective} from "./dropdown.directive";
import {ButtonModule} from "../button/button.module";


@NgModule({
  declarations: [
    DropdownComponent,
    DropdownItemComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    DropdownComponent,
    DropdownItemComponent,
    DropdownDirective
  ]
})
export class DropdownModule {
}
