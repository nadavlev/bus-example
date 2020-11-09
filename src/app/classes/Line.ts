import {Entity} from "./Entity";
import {Stop} from "./Stop";
import {Bus} from "./Bus";

export class Line extends Entity {

  name: string;
  stops: Stop[] = [];
  busses: Bus[] = [];
  onSim: boolean;
  interval: number;

  constructor() {
    super();
  }

  toString() {
    super.toString();
    console.log('Line to string');
  }


  reset() {
   console.log('Line reset');
  }
}
