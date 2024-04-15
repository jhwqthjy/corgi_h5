import { IniteProgress, InviteButton, InviteRecords } from "./components";

import Style from "./Style.module.css";
import cxb from "classnames/bind";
import inviteFooterImage from "@/assets/images/Corgi_Logo_v2.png";
import inviteStepsImage from "@/assets/images/Page1_03.jpg";

const cx = cxb.bind(Style);

export const InviteUser = () => {
  document.title = `邀用户得月度会员`;

  return (
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
        <div class={cx("foot-image")}>
          <img class="w-full" src={inviteFooterImage} alt="" />
        </div>
      </div>
    </div>
  );
};
