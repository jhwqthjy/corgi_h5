import { createSelector, useContext } from "solid-js";

import { InviteUserContext } from "../context";
import Style from "../Style.module.css";
import cxb from "classnames/bind";

const cx = cxb.bind(Style);

export const InviteButton = () => {
  const contextValue = useContext(InviteUserContext);

  const handleClick = () => {
    const shareUrl = `http://www.corgi.org.cn/share?type=user&userId=${contextValue.userId}&source=userdetail&needWxAuth=1&inviteActive=1`;

    // @ts-ignore
    // window.wx.ready(() => {
    // const { avatar } = contextValue.userInfo() ?? {};

    // @ts-ignore
    // window.wx.updateAppMessageShareData({
    //   title: "我发现了一个神仙颜值通讯录软件，快来一起撩小哥哥！",
    //   desc: "邀请好友，免月度会员费",
    //   link: window.location.href,
    //   imgUrl: avatar,
    //   success: () => console.log("设置分享给朋友成功"),
    //   fail: () => console.error("设置分享给朋友失败"),
    // });
    // });
    window.location.href = shareUrl;
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
