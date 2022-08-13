// State Management
import { useSetRecoilState } from "recoil";
import { fromTypeState, toTypeState } from "../../atoms/typesAtom";

// Types
import { getTypeBase, Types } from "../../lib/types";

// Css
import styles from "./type.module.css";

//TODO: Onclick funcitonality

interface Options {
	type: Types;
	selected?: Boolean;
	from?: Boolean;
}

const Option = ({ type, selected, from }: Options) => {
	const setType = useSetRecoilState(from ? fromTypeState : toTypeState);

	return (
		<a className={selected ? styles.selected : ""} onClick={() => {
			setType(type);
		}}>
			<img src={`${getTypeBase(type)}.svg`} alt="Type Base" />
			{type}
		</a>
	);
};

export default Option;
