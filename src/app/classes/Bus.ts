import {Entity} from './Entity';
import {Person} from './Person';
import {Line} from './Line';
import {Stop} from './Stop';


export class Bus extends Entity {

  maxCapacity: number;
  passengers: Person[] = [];
  currentLine: Line;
  currentStop: Stop;
  currentStopIndex: number;

  constructor() {
    super();
  }

  public toString() {
    super.toString();
    console.log('Bus to string');
  }

  public reset() {
    console.log('reset bus');
  }

  public changeColor() {
    console.log('bus change color');
  }

  public showPeople() {
    this.passengers.forEach(person => {
      console.log(person.id);
    });
  }

  public getPassengerGetOn(passenger: Person) {
    this.passengers.push(passenger);
  }

  public addPeople(people: Person[]) {
    this.passengers = [...this.passengers, ...people];
  }

  public removePeople(people: Person[]) {
    console.log('remove Passengers');
  }
}
