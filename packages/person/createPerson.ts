import Person from "./Person";

function createPerson(name: string, age: number) {
  const person = new Person(name, age);
  return person;
}

export default createPerson;
