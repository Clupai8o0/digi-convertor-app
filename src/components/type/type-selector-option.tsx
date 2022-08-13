// State Management
import { useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { fromTypeState, toTypeState } from "../../atoms/typesAtom";

// Types
import { getTypeBase, Types } from "../../lib/types";

// Css
import styles from "./type.module.css";

interface Options {
	type: Types;
	selected?: Boolean;
	from?: Boolean;
	disabled?: Boolean;
}

const Option = ({ type, selected, from, disabled }: Options) => {
	const setType = useSetRecoilState(from ? fromTypeState : toTypeState);

	return (
		<a
			className={selected || disabled ? styles.selected : ""}
			onClick={() => {
				setType(type);
			}}
		>
			<img src={`${getTypeBase(type)}.svg`} alt="Type Base" />
			{type}
		</a>
	);
};

export default Option;
