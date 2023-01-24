import { Service1Service } from './../service1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  // providers: [Service1Service],
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  num = 0;

  constructor(private myService1: Service1Service) {}

  ngOnInit(): void {
    this.num = this.myService1.num;
  }

}
