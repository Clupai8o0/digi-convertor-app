// Imports
import { useEffect, useRef, useState } from "react";

// State Management
import { useRecoilValue, useRecoilState } from "recoil";
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
	const [type, setType] = useRecoilState(from ? fromTypeState : toTypeState);
	const typeToDisable = useRecoilValue(!from ? fromTypeState : toTypeState);

	// Refs
	const dropdownRef = useRef(null);
	const dropdownArrowRef = useRef(null);

	// Animation
	useEffect(() => {
		let timeout: number | undefined = undefined;

		if (dropdownRef && dropdownArrowRef) {
			if (isDropdownOpen) {
				// @ts-ignore
				dropdownRef.current.style.display = "flex";
				gsap.fromTo(
					dropdownRef.current,
					{ y: -30, opacity: 0, scale: 0.9 },
					{ y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power1.out" }
				);
				gsap.fromTo(dropdownArrowRef.current, { rotate: 0 }, { rotate: -180 });
			} else {
				gsap.fromTo(
					dropdownRef.current,
					{ y: 0, opacity: 1, scale: 1 },
					{ y: -30, opacity: 0, scale: 0.9, duration: 0.4, ease: "power1.out" }
				);
				gsap.fromTo(dropdownArrowRef.current, { rotate: -180 }, { rotate: 0 });
				timeout = setTimeout(() => {
					// @ts-ignore
					dropdownRef.current.style.display = "none";
				}, 2000);
			}
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [isDropdownOpen]);

	function handleDropdownClick() {
		if (dropdownRef) {
			if (isDropdownOpen) {
				setIsDropdownOpen(false);
			} else {
				setIsDropdownOpen(true);
			}
		}
	}

	function handleDropdownChange(event: React.ChangeEvent<HTMLSelectElement>) {
		const selectedType = event.target.value;
		if (selectedType === Types.Binary) {
			setType(Types.Binary);
		} else if (selectedType === Types.Decimal) {
			setType(Types.Decimal);
		} else if (selectedType === Types.Octal) {
			setType(Types.Octal);
		} else {
			setType(Types.Hexadecimal)
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
					<img
						src="arrow-down.svg"
						alt="Downwards arrow"
						ref={dropdownArrowRef}
					/>
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
						setIsDropdownOpen={setIsDropdownOpen}
					/>
					<Option
						from={from ? true : false}
						type={Types.Decimal}
						selected={type === Types.Decimal ? true : false}
						disabled={typeToDisable === Types.Decimal ? true : false}
						setIsDropdownOpen={setIsDropdownOpen}
					/>
					<Option
						from={from ? true : false}
						type={Types.Octal}
						selected={type === Types.Octal ? true : false}
						disabled={typeToDisable === Types.Octal ? true : false}
						setIsDropdownOpen={setIsDropdownOpen}
					/>
					<Option
						from={from ? true : false}
						type={Types.Hexadecimal}
						selected={type === Types.Hexadecimal ? true : false}
						disabled={typeToDisable === Types.Hexadecimal ? true : false}
						setIsDropdownOpen={setIsDropdownOpen}
					/>
				</div>
			</div>

			{/* Type Selector for Mobile  */}
			<div>
				<select
					className={style.dropdownSelect}
					data-type={type}
					onChange={handleDropdownChange}
				>
					<option value="Binary" selected={type === Types.Binary}>
						Binary
					</option>
					<option value="Decimal" selected={type === Types.Decimal}>
						Decimal
					</option>
					<option value="Octal" selected={type === Types.Octal}>
						Octal
					</option>
					<option value="Hexadecimal" selected={type === Types.Hexadecimal}>
						Hexadecimal
					</option>
				</select>
			</div>
		</>
	);
};

export default TypeSelector;
