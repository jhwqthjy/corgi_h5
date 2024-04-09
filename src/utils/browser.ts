// 99%的ipad都能区分出来，但是不排除有人用的竖屏显示器
export const isIphoneOrIpad = () => {
  return (
    (!!window.navigator.userAgent.match(/macintosh|mac os x/i) &&
      window.screen.height > window.screen.width &&
      !window.navigator.userAgent.match(/(iPhone\sOS)\s([\d_]+)/)) ||
    !!window.navigator.userAgent.match(/(iPad).*OS\s([\d_]+)/)
  );
};

export const isH5UA = () => {
  return (
    !!window.navigator.userAgent.match(
      /(iPhone|iPod|Android|webOS|BlackBerry|Windows Phone)/i
    ) ||
    !!window.navigator.userAgent
      .toLowerCase()
      .match(/(xiaomi|miui|huawei|oppo|heytap|vivo|lenovo|nokia)/i) ||
    isIphoneOrIpad()
  );
};

export const BrowserUtil = {
  browserType() {
    const userAgent = window.navigator.userAgent;
    const isMsie = userAgent.indexOf("MSIE ") > 0;
    const isTrident = userAgent.indexOf("Trident/") > 0;
    const isEdge = userAgent.indexOf("Edge/") > 0;
    const isOpera = userAgent.indexOf("Opera") > 0;
    const isFF = userAgent.indexOf("Firefox") > 0;
    const isSafari =
      userAgent.indexOf("Safari") > 0 && userAgent.indexOf("Chrome") === -1;
    const isChrome =
      userAgent.indexOf("Chrome") > 0 &&
      userAgent.indexOf("Safari") > 0 &&
      !isEdge;

    if (isMsie || isTrident) {
      return "IE";
    }
    if (isFF) {
      return "FF";
    }
    if (isOpera) {
      return "Opera";
    }
    if (isSafari) {
      return "Safari";
    }
    if (isChrome) {
      return "Chrome";
    }
    if (isEdge) {
      return "Edge";
    }
  },
  isExternal() {
    return /^\/cs\/\w+\/?/i.test(window?.location?.pathname);
  },
  getCsId() {
    const matches = window?.location?.pathname.match(/\/cs\/(\w+)\/?/);
    if (!matches) {
      return "";
    }
    return matches[1];
  },
  getExternalTicketName() {
    return `huoban_ticket_${this.getCsId()}`;
  },
  getExternalIdName() {
    return `huoban_external_id_${this.getCsId()}`;
  },
  isHuobanIMAgent() {
    return /huobanim/i.test(navigator.userAgent);
  },

  isWechat() {
    return /micromessenger/i.test(navigator.userAgent);
  },
  isWechatWork() {
    return this.isWechat() && /wxwork/i.test(navigator.userAgent);
  },
  isExactlyWechat: function () {
    return this.isWechat() && !this.isWechatWork();
  },
  isFeishu: function () {
    return /lark/i.test(navigator.userAgent);
  },
  isDingTalk: function () {
    return /DingTalk/i.test(navigator.userAgent);
  },
  isMacOS() {
    const userAgent =
      // @ts-ignore
      window.navigator.userAgent || window.navigator.vendor || window.opera;
    return userAgent.match(/Mac OS/i);
  },
  isSafari() {
    const userAgent = window.navigator.userAgent;
    return (
      userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1
    );
  },
  isMobile() {
    return (
      window.innerWidth <= 480 ||
      (Math.abs(window.orientation) === 90 && window.innerWidth < 1024)
    );
  },

  isInRNAppWeb() {
    // @ts-ignore
    return window && !!window.ReactNativeWebView;
  },
  isThirdPlatform() {
    return (
      this.isWechatWork() ||
      this.isFeishu() ||
      this.isDingTalk() ||
      this.isExactlyWechat()
    );
  },

  isH5() {
    return isH5UA();
  },

  isIOS() {
    const isIOS = /iP(ad|hone|od)(?:.*OS\s([\d_]+))/.test(navigator.userAgent);
    return !!isIOS;
  },
  isAndroid() {
    const userAgent = navigator.userAgent;
    return !!userAgent.match(/android/i);
  },
  isWindows() {
    return (
      window.navigator.platform === "Win32" ||
      window.navigator.platform === "Windows"
    );
  },

  isPC() {
    const platformString = window.navigator.platform.toLowerCase();
    return /win32|windows|mac/i.test(platformString);
  },
  getPlatformType() {
    if (this.isWechat()) {
      return "微信";
    }
    if (this.isWechatWork()) {
      return "企微";
    }
    if (this.isDingTalk()) {
      return "钉钉";
    }
    if (this.isFeishu()) {
      return "飞书";
    }
    if (this.isMobile()) {
      return "手机浏览器";
    }
    return "Web浏览器";
  },
};
