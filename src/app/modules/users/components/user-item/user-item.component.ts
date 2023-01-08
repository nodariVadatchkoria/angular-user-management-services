import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {IUser, UserRole, UserStatus} from "../../../../interfaces";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemComponent implements OnInit{
  @Input() user?: IUser;
  @Input() index!: number;

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.userService.init(this.user!)
  }

  changeStatus(status: UserStatus) {
    console.log(this.userService.users)
    this.userService.changeStatus(status, this.index)
  }

  changeRole(role: UserRole) {
    this.userService.changeRole(role, this.index)
  }
}
