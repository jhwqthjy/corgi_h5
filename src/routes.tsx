import { Router, Route, A } from "@solidjs/router";
import App from "./App";
import { InviteUser } from "./view";

export const RouteContainer = () => {
  return (
    <Router base={"/wechat"}>
      <Route path="/invite_user" component={InviteUser} />
      <Route path="/" component={App} />
    </Router>
  );
};
