import type { Component, ParentProps } from "solid-js";

import { Provider } from "./Provider";

export const Layout: Component = (props: ParentProps) => {
  return <Provider>{props.children}</Provider>;
};
