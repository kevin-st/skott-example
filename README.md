## Setup

1. Setup the project using `npm install` (repository was setup using Node 18.0.0 just in case);
2. Run `npm run dev`;

## Summary

- `person/Person.ts` contains a runtime value (`Person` class) and a type `IPerson`;
- `person/addPerson.ts` imports `Person` as a type;
- `person/createPerson.ts` imports `Person` as a value;

Inspecting `build/index.bundle.js`, we see that `addPerson` doesn't contain an import statement in the bundled code (same for `interface-demo`), while `createPerson` does.
