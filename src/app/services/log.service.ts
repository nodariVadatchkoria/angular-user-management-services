import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  info(message: string) {
    console.info(message);
  }
  log(message: string) {
    console.log(message);
  }

  error(message: string) {
    console.error(message);
  }
}
