import ARComponent from "@ar/components/ARComponent";
import configuratorComponent from "@configurator/components/ConfiguratorComponent";
import setupXMLParser from "@xmlParser/index";

import createPerson from "./person/createPerson";
import addPerson, { persons } from "./person/addPerson";
import kevin from "./person/interface-demo";
// import { lukeSkywalker } from "./person/interface-demo";

function setup() {
  setupXMLParser();
  configuratorComponent();
  ARComponent();

  const person = createPerson("Kevin", 28);
  addPerson(person);
  console.log("persons: ", persons);
  console.log("kevin from interface-demo.ts: ", kevin);
}

setup();
