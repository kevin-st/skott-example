/**
 * Person interface.
 *
 * This is totally useless, but just needed to test out some stuff.
 */
export interface IPerson {
  name: string;
  age: number;
}

/**
 * Person class.
 */
class Person implements IPerson {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  public get name() {
    return this._name;
  }

  public get age() {
    return this._age;
  }
}

export default Person;
