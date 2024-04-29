/**
 * Person.ts contains both a runtime value (the Person class) as a type value (IPerson).
 *
 * Question: what happens in the bundle when we import only the interface in this script?
 * A. Will the import statement be removed, since we're only importing a type?
 * B. Will the import statement remain, since the module contains both a type and a runtime value?
 *
 * Answer: A
 *
 * Conclusion:
 * - If we want to import only a type, then we can just write "import ... from module".
 * - If we want to import both a type and a value, then we can also just write "import ... from module".
 * - As soon as we want to import a runtime value as a type, then we should write "import type ... from module" if we want the import statement to be removed after compilation.
 */

import { IPerson } from "./Person";

// import Person from "./Person";
// export const lukeSkywalker = new Person("Luke Skywalker", 22);

const kevin: IPerson = {
  name: "Kevin",
  age: 28,
};

export default kevin;
