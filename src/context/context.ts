import { Accessor, createContext, createSignal } from "solid-js";

const [defaultAccessor] = createSignal(undefined);

export interface IInviteUserContextValue {
  userId: string | null;
  userInfo: Accessor<Record<any, any> | undefined>;
}

const defaultValue: IInviteUserContextValue = {
  userId: "",
  userInfo: defaultAccessor,
};

export const InviteUserContext = createContext(defaultValue);
