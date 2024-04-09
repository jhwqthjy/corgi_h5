import { Route, Router } from "@solidjs/router";

import { InviteBonusHistory } from "./view/invite_bonus";
import { InviteUser } from "./view";
import { Layout } from "./Layout";
import { NotFound } from "./404";

export const RouteContainer = () => {
  return (
    <Router base={"/wechat"} root={Layout}>
      <Route path="/invite_user" component={InviteUser} />
      <Route path="/invite_bonus" component={InviteBonusHistory} />
      <Route path="*" component={NotFound} />
    </Router>
    // <Router base={"/"} root={Layout}>
    //   <Route path="/" component={InviteUser} />
    //   <Route path="/invite_bonus" component={InviteBonusHistory} />
    //   <Route path="*" component={NotFound} />
    // </Router>
  );
};
