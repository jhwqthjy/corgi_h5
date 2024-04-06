import { Accessor, ParentProps, createMemo, createSignal } from "solid-js";

import Style from "./Style.module.css";
import cxb from "classnames/bind";
import rocketImage from "@/assets/images/L1.png";
import trophyImage from "@/assets/images/L2.png";

const cx = cxb.bind(Style);

export interface IProgressProps extends ParentProps {
  current?: Accessor<number | undefined>;
  max?: Accessor<number | undefined>;
  className?: Accessor<string> | string;
}

export const Progress = (props: IProgressProps) => {
  const {
    current = createSignal(0)[0],
    max = createSignal(100)[0],
    className,
  } = props;

  const percentRatio = createMemo(() => {
    const currentValue = current();
    const maxValue = max();

    return ((currentValue ?? 0) / (maxValue ?? 100)) * 100;
  });

  return (
    <div
      class={cx(
        "container",
        "relative",
        typeof className === "function" ? className() : className
      )}
    >
      <div class={cx("progress-line-wrap", "h-5 rounded-full p-0.5")}>
        <div
          class={cx("progress-line", "h-full rounded-full")}
          style={{ width: percentRatio() + "%" }}
        />
      </div>
      <div
        class={cx("rocket-icon", " h-9 w-9")}
        style={{ left: percentRatio() + "%" }}
      >
        <img src={rocketImage} />
      </div>
      <div class={cx("trophy-icon", "right-0 w-10 h-10")}>
        <img src={trophyImage} />
      </div>
    </div>
  );
};
