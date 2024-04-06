import { ParentProps, createMemo, createSignal } from "solid-js";

import { InviteUserContext } from "./context/context";
import { getUserDetail } from "@/services";

export const Provider = (props: ParentProps) => {
  const searchParam = new URLSearchParams(window.location.search.slice(1));
  const userId = searchParam.get("userId");

  const [userInfo, setUserInfo] = createSignal<undefined | Record<any, any>>(
    undefined
  );

  if (userId) {
    getUserDetail(userId).then((data: any) => setUserInfo(data));
  }

  const contextValue = createMemo(() => {
    return {
      userId,
      userInfo,
    };
  });

  return (
    <InviteUserContext.Provider value={contextValue()}>
      {props.children}
    </InviteUserContext.Provider>
  );
};
