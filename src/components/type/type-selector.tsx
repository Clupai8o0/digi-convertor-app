// Imports
import { useEffect, useRef, useState } from "react";

// State Management
import { useRecoilValue } from "recoil";
import { fromTypeState, toTypeState } from "../../atoms/typesAtom";
import { getTypeBase, Types } from "../../lib/types";

// Components
import Option from "./type-selector-option";

// Styles
import style from "./type.module.css";
import { gsap } from "gsap";

const TypeSelector = ({ from }: { from?: Boolean }) => {
	// States
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const type = useRecoilValue(from ? fromTypeState : toTypeState);
	const typeToDisable = useRecoilValue(!from ? fromTypeState : toTypeState);

	// Refs
	const dropdownRef = useRef(null);

	// Animation
	useEffect(() => {
		if (dropdownRef) {
			gsap.fromTo(
				dropdownRef.current,
				{ y: 30, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.2 }
			);
		}
	});

	function handleDropdownClick() {
		let timeout: number | undefined = undefined;
		if (dropdownRef) {
			if (isDropdownOpen) {
				setIsDropdownOpen(false);
				// @ts-ignore
				gsap.fromTo(
					dropdownRef.current,
					{ y: 0, opacity: 1, delay: 0 },
					{ y: 30, opacity: 0, duration: 0.2 }
				);
				timeout = setTimeout(() => {
					// @ts-ignore
					dropdownRef.current.style.display = "none";
				}, 2000)
			} else {
				setIsDropdownOpen(true);
				// @ts-ignore
				dropdownRef.current.style.display = "flex";
			}
		}

		return () => {
			clearTimeout(timeout);
		}
	}

	return (
		<>
			{/* Type Selector for Desktop & Tablets */}
			<div className={style.dropdown} onClick={handleDropdownClick}>
				{/* Selected of the dropdown */}
				<div className={style.dropdownSelected} data-type={type}>
					<img src={`${getTypeBase(type)}.svg`} alt="Base value" />
					<span>{type}</span>
					<img src="arrow-down.svg" alt="Downwards arrow" />
				</div>

				{/* Options of the dropdown */}
				<div
					className={style.dropdownContent}
					ref={dropdownRef}
					data-type={type}
				>
					<Option
						from={from ? true : false}
						type={Types.Binary}
						selected={type === Types.Binary ? true : false}
						disabled={typeToDisable === Types.Binary ? true : false}
					/>
					<Option
						from={from ? true : false}
						type={Types.Decimal}
						selected={type === Types.Decimal ? true : false}
						disabled={typeToDisable === Types.Decimal ? true : false}
					/>
					<Option
						from={from ? true : false}
						type={Types.Octal}
						selected={type === Types.Octal ? true : false}
						disabled={typeToDisable === Types.Octal ? true : false}
					/>
					<Option
						from={from ? true : false}
						type={Types.Hexadecimal}
						selected={type === Types.Hexadecimal ? true : false}
						disabled={typeToDisable === Types.Hexadecimal ? true : false}
					/>
				</div>
			</div>

			{/* Type Selector for Mobile  */}
			{/* TODO: Need to add */}
		</>
	);
};

export default TypeSelector;
