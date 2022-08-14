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
				<div style={{ marginBottom: "24px" }} />
				<TypeReverseButton />
				<TypeSelector />
			</section>

			{/* Form for digit to be converted input */}
			<form className={styles.form} onSubmit={(e) => e.preventDefault()}>
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

			{/* <div className="converted" id="converted-text-container">
				<p id="converted">Decimal...</p>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5.503 4.627L5.5 6.75V17.254C5.5 18.116 5.84241 18.9426 6.4519 19.5521C7.0614 20.1616 7.88805 20.504 8.75 20.504H17.366C17.2107 20.9427 16.9233 21.3225 16.5433 21.5911C16.1633 21.8598 15.7094 22.004 15.244 22.004H8.75C7.49022 22.004 6.28204 21.5036 5.39124 20.6128C4.50045 19.722 4 18.5138 4 17.254V6.75C4 5.77 4.627 4.935 5.503 4.627ZM17.75 2C18.0455 2 18.3381 2.0582 18.611 2.17127C18.884 2.28434 19.1321 2.45008 19.341 2.65901C19.5499 2.86794 19.7157 3.11598 19.8287 3.38896C19.9418 3.66194 20 3.95453 20 4.25V17.25C20 17.5455 19.9418 17.8381 19.8287 18.111C19.7157 18.384 19.5499 18.6321 19.341 18.841C19.1321 19.0499 18.884 19.2157 18.611 19.3287C18.3381 19.4418 18.0455 19.5 17.75 19.5H8.75C8.15326 19.5 7.58097 19.2629 7.15901 18.841C6.73705 18.419 6.5 17.8467 6.5 17.25V4.25C6.5 3.65326 6.73705 3.08097 7.15901 2.65901C7.58097 2.23705 8.15326 2 8.75 2H17.75ZM17.75 3.5H8.75C8.55109 3.5 8.36032 3.57902 8.21967 3.71967C8.07902 3.86032 8 4.05109 8 4.25V17.25C8 17.664 8.336 18 8.75 18H17.75C17.9489 18 18.1397 17.921 18.2803 17.7803C18.421 17.6397 18.5 17.4489 18.5 17.25V4.25C18.5 4.05109 18.421 3.86032 18.2803 3.71967C18.1397 3.57902 17.9489 3.5 17.75 3.5Z"
						fill="#F8F8F8"
					/>
				</svg>
			</div> */}
		</div>
	);
}

export default Card;
