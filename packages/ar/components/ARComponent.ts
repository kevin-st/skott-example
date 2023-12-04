// handlers.
import arHandler from "ar/handlers/ar.handler"; // throwing in a cyclic dependency on purpose.

function ARComponent() {
  arHandler().then(() => console.log("this is an AR component."));
}

export default ARComponent;
