import * as components from "./components";

export default {
  install(app) {
    for (const key in components) {
      app.component(key, components[key]);
    }
  },
};
