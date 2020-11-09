export class Entity {
  static classId = 0;
  id: number;

  constructor() {
    this.id = Entity.classId++;
  }

  public toString() {
    console.log(`Entity id ${this.id}`);
  }

}
