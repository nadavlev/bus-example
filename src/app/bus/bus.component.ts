import {Component, Input, OnInit} from '@angular/core';
import {Bus} from "../classes/Bus";
import {DispatchService} from "../dispatch.service";
import {Person} from "../classes/Person";

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {

  public personName: string;

  @Input() bus: Bus;

  constructor(private dispatchService: DispatchService) { }

  ngOnInit() {
  }

  public addPassenger() {
    const person = new Person(this.personName);
    this.bus.addPeople([person]);
    this.dispatchService.dispatch(this.bus, 'goToNextStop');
  }

}
