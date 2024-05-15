import ARComponent from "@ar/components/ARComponent";
// import configuratorComponent from "@configurator/components/ConfiguratorComponent";
import setupXMLParser from "@xmlParser/index";

function setup() {
  setupXMLParser();
  // configuratorComponent();
  ARComponent();
}

setup();
