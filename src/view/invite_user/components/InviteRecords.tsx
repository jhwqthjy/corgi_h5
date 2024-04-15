import { For, createSignal, useContext } from "solid-js";

import { InviteUserContext } from "@/context";
import Style from "../Style.module.css";
import cxb from "classnames/bind";
import { getWechatInvite } from "@/services/invite";
import inviteRecordsImage from "@/assets/images/Page1_04.jpg";

const cx = cxb.bind(Style);

export interface IInviteRecordItem {
  corgiId: string;
  ctime: string;
  headimgurl: string;
  status: string;
  userId: string;
  wechatId: string;
  wechatName: string;
}

export const InviteRecords = () => {
  const contextValue = useContext(InviteUserContext);

  const [record, setRecord] = createSignal<IInviteRecordItem[]>([]);

  if (contextValue.userId) {
    getWechatInvite(contextValue.userId).then((res: any) => {
      setRecord(res);
    });
  }

  return (
    <div class={cx("invite-records")}>
      <img src={inviteRecordsImage} alt="" />
      <div class={cx("records-list p-4")}>
        <For
          each={record()}
          fallback={
            <div class="h-44">
              <div
                class={cx("empty-records", "flex items-center justify-center")}
              >
                马上邀请朋友加入吧
              </div>
            </div>
          }
        >
          {(item, index) => {
            const recordLen = record().length;

            let inviteStatusText = <></>;
            switch (item.status) {
              case "0":
                inviteStatusText = (
                  <span class={cx("invite-status-invited")}>邀请中...</span>
                );
                break;
              case "1":
                inviteStatusText = (
                  <span class={cx("invite-status-success")}>邀请成功</span>
                );
                break;
              case "2":
                inviteStatusText = (
                  <span class={cx("invite-status-failed")}>邀请失败</span>
                );
                break;

              default:
                break;
            }

            return (
              <div
                class={cx(
                  "record-item",
                  "flex items-center justify-between pt-3 pb-3 pr-5 pl-4"
                )}
              >
                <div class={"flex items-center justify-center"}>
                  <div class="mr-3">{recordLen - index()}</div>
                  <div class="rounded-full overflow-hidden w-10 h-10 mr-2.5">
                    <img src={item.headimgurl} />
                  </div>
                  <div>{item.wechatName}</div>
                </div>
                <div>
                  <div>{inviteStatusText}</div>
                  <div
                    class={cx(
                      "invited-time",
                      "flex items-center justify-end mb-1"
                    )}
                  >
                    {item.ctime}
                  </div>
                </div>
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};
