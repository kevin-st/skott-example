// components.
import ARComponent from "ar/components/ARComponent"; // throwing in a cyclic dependency on purpose.
async function arHandler() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
    ARComponent();
  });
}

export default arHandler;
