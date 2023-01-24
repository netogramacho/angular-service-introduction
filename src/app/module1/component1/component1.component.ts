import { Service1Service } from './../service1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  // providers: [Service1Service],
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {
  num = 0;

  constructor(private myService1: Service1Service) {}

  ngOnInit(): void {
    this.num = this.myService1.num;
  }
}
