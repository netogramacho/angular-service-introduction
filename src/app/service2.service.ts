import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service2Service {
  text = 'Service 2';

  constructor() {
    console.log('service2 - constructor');
  }
}
