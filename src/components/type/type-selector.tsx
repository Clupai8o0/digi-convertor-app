// Imports
import { useRef, useState } from "react";

// State Management
import { useRecoilValue } from "recoil";
import { fromTypeState, toTypeState } from "../../atoms/typesAtom";
import { getTypeBase, Types } from "../../lib/types";

// Components
import Option from "./type-selector-option";

// CSS
import style from "./type.module.css";

const TypeSelector = ({ from }: { from?: Boolean }) => {
	// States
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const type = useRecoilValue(from ? fromTypeState : toTypeState);

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
					<Option from
						type={Types.Binary}
						selected={type === Types.Binary ? true : false}
					/>
					<Option from
						type={Types.Decimal}
						selected={type === Types.Decimal ? true : false}
					/>
					<Option from
						type={Types.Octal}
						selected={type === Types.Octal ? true : false}
					/>
					<Option from
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
