import { useRecoilValue } from "recoil";
import { fromTypeState, toTypeState } from "../../atoms/typesAtom";

import { Types } from "../../lib/types";

import styles from "./type.module.css"

const TypeText = ({ from }: { from?: Boolean }) => {
	let type = useRecoilValue(fromTypeState);
	if (!from) type = useRecoilValue(toTypeState);

	let text = "Binary";
	if (type === Types.Decimal) {
		text = "Decimal";
	} else if (type === Types.Octal) {
		text = "Octal";
	} else if (type === Types.Hexadecimal) {
		text = "Hexadecimal";
	}  

	return <span className={styles.typeText}>{text}</span>;
};

export default TypeText;
