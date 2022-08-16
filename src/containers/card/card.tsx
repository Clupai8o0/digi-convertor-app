// Imports
import { useEffect } from "react";
import { Types } from "../../lib/types";

// Components
import TypeText from "../../components/type/type-text";
import ThemeChanger from "../../components/theme-changer";
import TypeReverseButton from "../../components/type/type-reverse-btn";
import TypeSelector from "../../components/type/type-selector";

// State Management
import { useRecoilState, useRecoilValue } from "recoil";
import { fromInputState, toInputState } from "../../atoms/inputAtom";
import { fromTypeState, toTypeState } from "../../atoms/typesAtom";

// Css
import styles from "./card.module.css";
import Input from "../../components/input/from-input";
import ConvertedInput from "../../components/input/to-input";

function Card() {
	const [fromInput, setFromInput] = useRecoilState(fromInputState);
	const [toInput, setToInput] = useRecoilState(toInputState);
	const fromType = useRecoilValue(fromTypeState);
	const toType = useRecoilValue(toTypeState);

	// Clearing the input value, whenever from type state is changed
	useEffect(() => {
		setFromInput("");
		setToInput("");
	}, [fromType]);
	// Clearing converted input, whenever to type state is changed
	useEffect(() => {
		setToInput("");
	}, [toType]);

	function getArrowGradient(from?: Boolean) {
		let type = null;
		if (from) {
			type = fromType;
		} else type = toType;

		if (type === Types.Binary) {
			return styles.binaryPath;
		} else if (type === Types.Decimal) {
			return styles.decimalPath;
		} else if (type === Types.Octal) {
			return styles.octalPath;
		} else {
			return styles.hexadecimalPath;
		}
	}

	async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const resp = await fetch(`${import.meta.env.VITE_API}convert/${fromType}/${toType}/${fromInput}`);
		const data = await resp.json()
		setToInput(data.value);
	}

	return (
		<div className={styles.card}>
			{/* Card Header */}
			<header className={styles.header}>
				<h2>
					Convert <TypeText from /> to <TypeText />
				</h2>
				<ThemeChanger />
			</header>

			{/* Types Selector */}
			<section className={styles.typesSelector}>
				<TypeSelector from />
				<div className={styles.typesMargin} />
				<TypeReverseButton />
				<TypeSelector />
			</section>

			{/* Form for digit to be converted input */}
			<form className={styles.form} onSubmit={(e) => handleFormSubmit(e)}>
				<Input />

				<svg
					width="16"
					height="26"
					viewBox="0 0 16 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1L9 1ZM7.29289 25.7071C7.68342 26.0976 8.31658 26.0976 8.70711 25.7071L15.0711 19.3431C15.4616 18.9526 15.4616 18.3195 15.0711 17.9289C14.6805 17.5384 14.0474 17.5384 13.6569 17.9289L8 23.5858L2.34315 17.9289C1.95262 17.5384 1.31946 17.5384 0.928932 17.9289C0.538408 18.3195 0.538408 18.9526 0.928932 19.3431L7.29289 25.7071ZM7 1L7 25H9L9 1L7 1Z"
						fill="url(#paint0_linear_12_330)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_12_330"
							x1="8"
							y1="1"
							x2="8"
							y2="26"
							gradientUnits="userSpaceOnUse"
						>
							<stop className={getArrowGradient(true)} id="from-stop" />
							<stop offset="1" className={getArrowGradient()} id="to-stop" />
						</linearGradient>
					</defs>
				</svg>
			</form>

			<ConvertedInput />
		</div>
	);
}

export default Card;
