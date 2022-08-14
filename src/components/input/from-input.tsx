// Imports
import { useState } from "react";

// State Management
import { useRecoilState } from "recoil";
import { fromTypeState } from "../../atoms/typesAtom";
import { getProbables } from "../../lib/types";

// Styles
import styles from "./input.module.css";

const Input = () => {
	const [value, setValue] = useState("");
	const [fromType, setFromType] = useRecoilState(fromTypeState);

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const inputArr = event.target.value.split("");
		const newArr = [];

		getProbables(fromType).forEach((probable) => {
			for (let i = 0; i < inputArr.length; i++) {
				if (inputArr[i] === probable) {
					newArr.push(probable);
					inputArr.splice(i, 1);
					i = -1;
				}
			}
		});

		if (inputArr.length === 0) {
			setValue(event.target.value);
		}
	}

	return (
		<div className={styles.inputGroup}>
			<input
				required
				type="text"
				name="text"
				autoComplete="off"
				className={styles.input}
				value={value}
				onChange={(e) => handleInputChange(e)}
			/>
			<label className={styles.userLabel}>Binary</label>
		</div>
	);
};

export default Input;
