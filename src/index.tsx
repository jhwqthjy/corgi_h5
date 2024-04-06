/* @refresh reload */
import { render } from "solid-js/web";
import VConsole from "vconsole";
new VConsole();

import "./index.css";
import { RouteContainer } from "./routes";
import { getWxTicket } from "./utils";

getWxTicket.then(() => {
  console.log("wx config init ready");
});

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(() => <RouteContainer />, root!);
