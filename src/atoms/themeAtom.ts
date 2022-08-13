import { atom } from "recoil";
import { Theme } from './../lib/types';

export const themeState = atom({
  key: "themeStateKey",
  default: Theme.Light
})