import { IniteProgress, InviteButton, InviteRecords } from "./components";

import { Provider } from "./provider";
import Style from "./Style.module.css";
import cxb from "classnames/bind";
import inviteFooterImage from "@/assets/images/Corgi_Logo_v2.png";
import inviteStepsImage from "@/assets/images/Page1_03.jpg";

const cx = cxb.bind(Style);

export const InviteUser = () => {
  document.title = `我发现了一个神仙颜值通讯录软件，快来一起撩小哥哥！`;

  return (
    <Provider>
      <div class={cx("invite-user")}>
        <IniteProgress />
        <div class={cx("invite-steps")}>
          <img src={inviteStepsImage} alt="" />
        </div>
        <InviteRecords />
        <InviteButton />
        <div
          class={cx(
            "invite-footer",
            "flex items-center justify-center pt-14 pb-14"
          )}
        >
          <div>
            <img class="h-8" src={inviteFooterImage} alt="" />
          </div>
        </div>
      </div>
    </Provider>
  );
};
