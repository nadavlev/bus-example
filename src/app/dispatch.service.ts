import { Injectable } from '@angular/core';
import {Event} from './classes/Event';
import {Bus} from "./classes/Bus";

@Injectable({
  providedIn: 'root'
})
export class DispatchService {

  public events: Event[] = [];

  constructor() { }

  public dispatch(bus: Bus, action: string): Event {
    const newEvent = new Event();
    newEvent.action = action;
    newEvent.bus = bus;
    newEvent.time = '00:05';
    this.events.push(newEvent);
    this.events.forEach(event => {
      console.log(event);
    });
    return newEvent;
  }

}
