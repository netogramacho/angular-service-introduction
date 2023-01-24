import { Service1Service } from './../service1.service';
import { Component, OnInit } from '@angular/core';
import { Service2Service } from 'src/app/service2.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  // providers: [Service1Service],
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {
  num = 0;
  text = "";

  constructor(
    private myService1: Service1Service,
    private myService2: Service2Service
  ) {}

  ngOnInit(): void {
    this.num = this.myService1.num;
    this.text = this.myService2.text;
  }
}
