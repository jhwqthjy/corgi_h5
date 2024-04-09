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
        console.log("getInvitedBonus", res);

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

  const appendTestData = () => {
    setListData([
      ...listData(),
      ...[
        {
          title: "这两条是前端追加的测试数据，不是真实的",
          desc: "Corgi会员30天",
          ctime: "2024-03-30",
        },
        {
          title: "这两条是前端追加的测试数据",
          desc: "Corgi会员30天",
          ctime: "2024-03-30",
        },
      ],
    ]);
  };

  return (
    <div class={cx("invite-bonus-history", "flex flex-col")}>
      <div
        style={{ color: "#fff", "font-size": "24px" }}
        onClick={appendTestData}
      >
        添加两条测试数据
      </div>
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
