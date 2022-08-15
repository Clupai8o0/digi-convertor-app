// State Management
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { fromTypeState, toTypeState } from "../../atoms/typesAtom";
import { getPossibleProbablesMsg, getProbables } from "../../lib/types";
import { fromInputState, toInputState } from "../../atoms/inputAtom";

// Styles
import styles from "./input.module.css";

// Notification
import { Store } from "react-notifications-component";
import { useEffect } from "react";

const Input = () => {
	const [value, setValue] = useRecoilState(fromInputState);
	const fromType = useRecoilValue(fromTypeState);
	const toType = useRecoilValue(toTypeState);
	const setConvertedInput = useSetRecoilState(toInputState);

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

			fetch(`${import.meta.env.VITE_API}convert/${fromType}/${toType}/${event.target.value}`)
				.then((resp) => resp.json())
				.then((data) => setConvertedInput(data.value))
				.catch(console.error);
		} else {
			Store.addNotification({
				title: "Warning",
				message: `You can only add ${getPossibleProbablesMsg(
					fromType
				)} for conversion`,
				type: "danger",
				insert: "top",
				container: "top-right",
				animationIn: ["animate__animated", "animate__fadeIn"],
				animationOut: ["animate__animated", "animate__fadeOut"],
				dismiss: {
					duration: 4000,
					onScreen: true,
				},
			});
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
				data-type={fromType}
			/>
			<label className={styles.userLabel}>{fromType}</label>
		</div>
	);
};

export default Input;
