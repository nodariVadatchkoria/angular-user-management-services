import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserRole} from "../../../../interfaces";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {

  constructor(
    private userService: UserService
  ) {
  }

  addUserHandler(fullName: string, role: string){
    if(!fullName || !role) return;
    this.userService.addUser({
      fullName: fullName,
      role: role as UserRole,
      status: 'inactive'
    })
  }

}
