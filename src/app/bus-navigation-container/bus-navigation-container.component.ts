import { Component, OnInit } from '@angular/core';
import {Bus} from "../classes/Bus";

@Component({
  selector: 'app-bus-navigation-container',
  templateUrl: './bus-navigation-container.component.html',
  styleUrls: ['./bus-navigation-container.component.scss']
})
export class BusNavigationContainerComponent implements OnInit {

  busToInject: Bus = new Bus();

  constructor() { }

  ngOnInit() {

  }

}
