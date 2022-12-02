import { atom } from "recoil";

export const progressState = atom({
  key: "progressState",
  default: new Map<number, number>(),
});
