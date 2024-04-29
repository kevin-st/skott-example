import type Person from "./Person";

export const persons: Array<Person> = [];

function addPerson(person: Person) {
  persons.push(person);
}

export default addPerson;
