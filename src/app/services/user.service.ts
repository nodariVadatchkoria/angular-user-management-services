// @ts-ignore
import { Injectable } from "@angular/core";
import {IUser, UserRole, UserStatus} from "../interfaces";
import {LogService} from "./log.service";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = []

  constructor(
    private logService: LogService
  ) {
  }

  init(user: IUser){
    console.log(user.fullName)
  }

  addUser(user: IUser) {
    this.users.push(user)
    this.logService.log(`New User Created: ${user}`);
    console.log(this.users)
  }

  changeStatus(status: UserStatus, index: number) {
    this.users[index] = {...this.users[index], status};
    console.log(this.users[index])
    this.logService.log(`User status changed:  ${status}, ${index}`);
  }

  changeRole(role: UserRole, index: number) {
    this.users[index] = {...this.users[index], role};
    console.log(this.users[index])
    this.logService.log(`User role changed:  ${role}, ${index}`);
  }
}
