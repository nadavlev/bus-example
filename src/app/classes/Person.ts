import {Entity} from './Entity';

export class Person extends Entity {

  name: string;
  line: number;
  from: number;
  to: number;

  constructor(name: string) {
    super();
    this.name = name;
  }

  toString() {
    super.toString();
    console.log('Person to string');
  }

}
