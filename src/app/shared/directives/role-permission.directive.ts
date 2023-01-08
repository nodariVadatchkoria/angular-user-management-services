import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserRole} from "../../interfaces";

@Directive({
  selector: '[appRolePermission]'
})
export class RolePermissionDirective {
  @Input() set appRolePermission(role: UserRole) {
    this.viewContainer.clear();
    if(role === 'guest' || role === 'user') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
