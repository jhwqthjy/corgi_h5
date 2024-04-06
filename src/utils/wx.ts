import { request } from "./request";

async function getTicket() {
  const { origin, pathname, search } = window.location;
  const url = origin + pathname + search;

  return request({
    url: "https://www.corgi.org.cn/wechat/getTicket",
    method: "get",
    params: { url },
  });
}

const initWxConfig = async () => {
  const res = await getTicket();

  const { appId, timestamp, nonceStr, signature } = res;
  const jsApiList = [
    "updateAppMessageShareData",
    "updateTimelineShareData",
    "openLocation",
    "onMenuShareAppMessage",
  ];

  // @ts-ignore
  window.wx.config({
    debug: false,
    appId,
    timestamp,
    nonceStr,
    signature,
    jsApiList,
    openTagList: ["wx-open-launch-app"],
  });

  return res;
};

export const getWxTicket = initWxConfig();
