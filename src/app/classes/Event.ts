import {Entity} from './Entity';
import {Bus} from './Bus';

export class Event extends Entity {
  time: string;
  action: string;
  bus: Bus;

  constructor() {
    super();
  }

  message(msg: string) {
    console.log(msg);
  }

  execute(action: string) {
    console.log(action);
  }

  toString() {
    super.toString();
    console.log('Event to string');
  }
}


