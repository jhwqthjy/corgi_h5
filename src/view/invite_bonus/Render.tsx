// import {} from "./components";

import { createMemo, createSignal, useContext } from "solid-js";

import { BonusHistory } from "./components";
import { InviteUserContext } from "@/context";
import Style from "./Style.module.css";
import cxb from "classnames/bind";
import { getInvitedBonus } from "@/services/invite";

const cx = cxb.bind(Style);

export const InviteBonusHistory = () => {
  document.title = `奖励记录`;

  const contextValue = useContext(InviteUserContext);

  const [listData, setListData] = createSignal<
    Array<{ title: string; desc: string; ctime: string }>
  >([]);
  const [firstFetched, setFirstFetched] = createSignal(false);

  if (contextValue.userId) {
    getInvitedBonus(contextValue.userId)
      .then((res: any) => {
        setListData(res);
      })
      .finally(() => {
        setFirstFetched(true);
      });
  } else {
    setFirstFetched(true);
  }

  const renderContent = createMemo(() => {
    if (!firstFetched()) {
      return null;
    }

    return <BonusHistory listData={listData} />;
  });

  return (
    <div class={cx("invite-bonus-history", "flex flex-col")}>
      <div
        class={cx(
          "nav-title",
          "flex items-end justify-center pb-4 box-border border-b"
        )}
      >
        奖励记录
      </div>
      <div class="flex-1 relative">
        <div class="absolute left-0 top-0 right-0 bottom-0">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
