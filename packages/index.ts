import ARComponent from "ar/components/ARComponent";
import configuratorComponent from "configurator/components/ConfiguratorComponent";
import setupXMLParser from "xml-parser/index";

function setup() {
  setupXMLParser();
  configuratorComponent();
  ARComponent();
}

setup();
