import { BrowserUtil, jsCallInviteUserByWechat } from "@/utils";

import { InviteUserContext } from "@/context";
import Style from "../Style.module.css";
import cxb from "classnames/bind";
import { useContext } from "solid-js";

const cx = cxb.bind(Style);

export const InviteButton = () => {
  const contextValue = useContext(InviteUserContext);

  const handleClick = () => {
    const { avatar, userId } = contextValue.userInfo() ?? {};

    const shareUrl = `http://www.corgi.org.cn/share?type=user&userId=${userId}&source=userdetail&needWxAuth=1&inviteActive=1`;
    const shareInfo = {
      userId,
      shareUrl,
      title: "我发现了一个神仙颜值通讯录软件，快来一起撩小哥哥！",
      desc: "邀请好友，免月度会员费",
      imgUrl: avatar,
    };

    if (BrowserUtil.isIOS()) {
      // @ts-ignore
      window.webkit?.messageHandlers?.inviteUserByWechat.postMessage(shareInfo);
    } else {
      jsCallInviteUserByWechat(shareInfo);
    }
  };

  return (
    <div
      class={cx(
        "invite-button",
        "fixed left-3 right-3 flex items-center justify-center rounded-full"
      )}
      onClick={handleClick}
    >
      马上邀请
    </div>
  );
};
