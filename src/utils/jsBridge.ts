export function jsSendMessage() {
  window.WebViewJavascriptBridge?.doSend(
    { key: "JS数据 by jsSendMessage" },
    function (responseData: any) {
      printLog(
        "--- Java响应 ---\n" +
          responseData +
          "\n时间" +
          Date.now() +
          "\nby jsSendMessage"
      );
    }
  );
}

export function jsCallNativeMethod() {
  window.WebViewJavascriptBridge?.callHandler(
    "callNative",
    { key: "JS数据 by jsCallNativeMethod" },
    function (responseData: any) {
      printLog(
        "--- Java响应 ---\n" +
          responseData +
          "\n时间" +
          Date.now() +
          "\nby jsCallNativeMethod"
      );
    }
  );
}

export function jsCallInviteUserByWechat(data: {
  userId: string | number;
  shareUrl: string;
  title: string;
  desc: string;
  imgUrl: string;
}) {
  window.WebViewJavascriptBridge?.callHandler(
    "inviteUserByWechat",
    data,
    function (responseData: any) {
      printLog(
        "--- Java响应 ---\n" +
          responseData +
          "\n时间" +
          Date.now() +
          "\nby jsCallNativeMethod"
      );
    }
  );
}

export function printLog(log: any) {
  console.log("\n", log);
}

export function connectWebViewJavascriptBridge(
  callback: (...args: any) => any
) {
  if (window.WebViewJavascriptBridge && WebViewJavascriptBridge.initialized) {
    callback(WebViewJavascriptBridge);
  } else {
    document.addEventListener(
      "WebViewJavascriptBridgeReady",
      function () {
        callback(WebViewJavascriptBridge);
      },
      false
    );
  }
}

connectWebViewJavascriptBridge(function (bridge) {
  if (!bridge) {
    return;
  }

  bridge?.init(function (
    message: string,
    responseCallback: (...args: any) => any
  ) {
    printLog(
      "--- Java响应 ---\n" +
        message +
        "\n时间" +
        Date.now() +
        "\nby bridge.init"
    );
    if (responseCallback) {
      var responseData = { key: "JS响应 by bridge.init" };
      responseCallback();
    }
  });

  bridge?.registerHandler(
    "functionInJs",
    function (data: any, responseCallback: (...args: any) => any) {
      printLog(
        "--- Java响应 ---\n" +
          data +
          "\n时间" +
          Date.now() +
          "\nby functionInJs"
      );
      if (responseCallback) {
        var responseData = { key: "JS响应 by functionInJs" };
        responseCallback(responseData);
      }
    }
  );
});
