import {Entity} from './Entity';
import {Person} from './Person';

export class Stop extends Entity {

  name: string;
  location: number;
  passengers: Person[] = [];

  constructor() {
    super();
  }

  toString() {
    super.toString();
    console.log('Stop to string');
  }

  showPeople() {
    this.passengers.forEach(person => {
      console.log(person.id);
    });
  }

}
