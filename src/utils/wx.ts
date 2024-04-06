import { request } from "./request";

let initWxTask: Promise<any> | undefined = undefined;

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

  console.log("wx config init ready");

  return res;
};

export const getWxTicket = () => {
  if (!initWxTask) {
    initWxTask = initWxConfig();
  }

  return initWxTask;
};
