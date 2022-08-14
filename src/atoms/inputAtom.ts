import { atom } from 'recoil';

export const fromInputState = atom({
  key: "fromInputStateKey",
  default: ""
})
export const toInputState = atom({
	key: "toInputStateKey",
	default: "",
});