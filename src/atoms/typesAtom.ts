import { Types } from "./../lib/types";
import { atom } from "recoil";

export const fromTypeState = atom({
	key: "fromTypeStateKey",
	default: Types.Decimal,
});

export const toTypeState = atom({
	key: "toTypeStateKey",
	default: Types.Binary,
});
