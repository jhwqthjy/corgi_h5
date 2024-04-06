import "./index.css";

import { RouteContainer } from "./routes";
import VConsole from "vconsole";
/* @refresh reload */
import { render } from "solid-js/web";

new VConsole();

// import { getWxTicket } from "./utils";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(() => <RouteContainer />, root!);
