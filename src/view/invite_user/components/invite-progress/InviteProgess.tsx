import { createSignal, useContext } from "solid-js";

import { InviteUserContext } from "../../context";
import { Progress } from "@/components";
import Style from "../../Style.module.css";
import bannerImage from "@/assets/images/Page1_01.jpg";
import cxb from "classnames/bind";
import { getInvitedSchedule } from "@/services/invite";
import inviteProgressImage from "@/assets/images/T.png";

const cx = cxb.bind(Style);

export const IniteProgress = () => {
  const contextValue = useContext(InviteUserContext);

  const [invitedCount, setInvitedCount] = createSignal<undefined | number>(
    undefined
  );
  const [invitedPercent, setInvitedPercent] = createSignal<undefined | number>(
    undefined
  );
  const [inviteThreshold, setInviteThreshold] = createSignal<
    undefined | number
  >(undefined);

  if (contextValue.userId) {
    getInvitedSchedule(contextValue.userId).then((res: any) => {
      setInvitedPercent(res?.per);
      setInvitedCount(res?.count);
      setInviteThreshold(res?.threshold);

      console.log("getInvitedSchedule", res);
    });
  }

  return (
    <div class={cx("invite-progress", "relative")}>
      <img src={bannerImage} alt="" />
      <div class={cx("progress-container", "absolute")}>
        <img src={inviteProgressImage} alt="" />
        <div class={cx("mt-5 flex items-center justify-center")}>
          <Progress className={""} current={invitedPercent} />
        </div>
        <div
          class={cx("progress-content", "flex items-center justify-between")}
        >
          <div>已邀请{invitedCount()}位新用户</div>
          <div class={cx("invite-threshold-text")}>
            邀请第{inviteThreshold()}位再得1个月会员
          </div>
        </div>
      </div>
    </div>
  );
};
