// Imports
import { useRef, useState } from "react";

// State Management
import { useRecoilState } from "recoil";
import { fromTypeState, toTypeState } from "../../atoms/typesAtom";
import { getTypeBase, Types } from "../../lib/types";

// Components
import Option from "./type-selector-option";

// CSS
import style from "./type.module.css";

const TypeSelector = ({ from }: { from?: Boolean }) => {
	// States
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [fromType, setFromType] = useRecoilState(fromTypeState);
	const [toType, setToType] = useRecoilState(toTypeState);

	// Reducing the state logic
	const type = from ? fromType : toType;
	const setType = from ? setFromType : setToType;

	// Refs
	const dropdownRef = useRef(null);

	function handleDropdownClick() {
		if (dropdownRef) {
			if (isDropdownOpen) {
				setIsDropdownOpen(false);
				// @ts-ignore
				dropdownRef.current.style.display = "none";
			} else {
				setIsDropdownOpen(true);
				// @ts-ignore
				dropdownRef.current.style.display = "flex";
			}
		}
	}

	return (
		<>
			{/* Type Selector for Desktop & Tablets */}
			<div className={style.dropdown} onClick={handleDropdownClick}>
				{/* Selected of the dropdown */}
				<div className={style.dropdownSelected}>
					<img src={`${getTypeBase(type)}.svg`} alt="Base value" />
					<span>{type}</span>
					<img src="arrow-down.svg" alt="Downwards arrow" />
				</div>

				{/* Options of the dropdown */}
				<div className={style.dropdownContent} ref={dropdownRef}>
					<Option
						type={Types.Binary}
						selected={type === Types.Binary ? true : false}
					/>
					<Option
						type={Types.Decimal}
						selected={type === Types.Decimal ? true : false}
					/>
					<Option
						type={Types.Octal}
						selected={type === Types.Octal ? true : false}
					/>
					<Option
						type={Types.Hexadecimal}
						selected={type === Types.Hexadecimal ? true : false}
					/>
				</div>
			</div>

			{/* Type Selector for Mobile  */}
			{/* TODO: Need to add */}
		</>
	);
};

export default TypeSelector;
