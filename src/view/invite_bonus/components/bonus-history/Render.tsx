import { Accessor, For, ParentProps, createMemo } from "solid-js";

import Style from "../../Style.module.css";
import blankImage from "@/assets/images/blank_img.png";
import cxb from "classnames/bind";

const cx = cxb.bind(Style);
export interface IBonusHistoryProps extends ParentProps {
  listData: Accessor<Array<{ title: string; desc: string; ctime: string }>>;
}

export const BonusHistory = (props: IBonusHistoryProps) => {
  const { listData } = props;

  const renderContent = createMemo(() => {
    if (listData().length) {
      return (
        <div class={cx("bonus-history", "p-4")}>
          <For each={listData()}>
            {(item) => {
              return (
                <div
                  class={cx(
                    "bonus-history-item",
                    "flex items-center justify-between border-b"
                  )}
                >
                  <div class="mr-4">
                    <div class="mb-1">{item.title}</div>
                    <div class={cx("item-time")}>{item.ctime}</div>
                  </div>
                  <div class="min-w-28">{item.desc}</div>
                </div>
              );
            }}
          </For>
          <div class={cx("bonus-history-footer", "mt-4 flex justify-center")}>
            已加载全部记录
          </div>
        </div>
      );
    } else {
      return (
        <div class="flex items-center justify-center h-full">
          <div class={cx("empty-remind", "flex flex-col items-center")}>
            <img class={cx("empty-image", "mb-5")} src={blankImage} />
            <div>还没有获得的奖励哦</div>
          </div>
        </div>
      );
    }
  });

  return (
    <div class={cx("bonus-history-container", "h-full overflow-auto")}>
      {renderContent()}
    </div>
  );
};
