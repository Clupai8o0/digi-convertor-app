import { getTypeBase, Types } from "../../lib/types";
import styles from "./type.module.css";

const Option = ({ type, selected }: { type: Types, selected?: Boolean }) => {
	return (
		<a className={selected ? styles.selected : ""}>
			<img src={`${getTypeBase(type)}.svg`} alt="Type Base" />
			{type}
		</a>
	);
};

export default Option;
