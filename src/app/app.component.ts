import {Component, OnInit} from '@angular/core';
import {IUser, UserRole, UserStatus} from "./interfaces";
import {LogService} from "./services/log.service";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {

}


// class Service {
//   constructor() {}
//
//   getPosts() {
//     return "From Service"
//   }
//
// }

// class Component {
//   constructor(
//     private service: Service
//   ) {}
//
//   init() {
//     console.log(this.service.getPosts())
//   }
// }
//
// class Component2 {
//   constructor(
//     private service: Service
//   ) {}
//
//   init() {
//     console.log(this.service.getPosts())
//   }
// }
//
// const service = new Service();
// const component = new Component(service);
//
// const service2 = new Service();
// const component2 = new Component2(service2);
