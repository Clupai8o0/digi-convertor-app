// State Management
import { useRecoilValue } from "recoil";
import { fromTypeState, toTypeState } from "../atoms/typesAtom";

// Formula Components
import BinaryToDecimal from "../components/formulas/binary-decimal";
import BinaryToOctal from "../components/formulas/binary-octal";
import BinaryToHex from "../components/formulas/binary-hex";

import DecimalToBinary from "../components/formulas/decimal-to-binary";
import DecimalToHex from "../components/formulas/decimal-hex";
import DecimalToOctal from "../components/formulas/decimal-octal";

import OctalToDecimal from "../components/formulas/octal-decimal";
import OctalToBinary from "../components/formulas/octal-binary";

import HexToDecimal from "../components/formulas/hex-decimal";
import HexToBinary from "../components/formulas/hex-binary";

// Types
import { Types } from "../lib/types";

const Formula = () => {
	const fromType = useRecoilValue(fromTypeState);
	const toType = useRecoilValue(toTypeState);

	function getFormula() {
		if (fromType === Types.Binary) {
			if (toType === Types.Decimal) return <BinaryToDecimal />;
			if (toType === Types.Octal) return <BinaryToOctal />;
			if (toType === Types.Hexadecimal) return <BinaryToHex />;
		}

		if (fromType === Types.Decimal) {
			if (toType === Types.Binary) return <DecimalToBinary />;
			if (toType === Types.Octal) return <DecimalToOctal />;
			if (toType === Types.Hexadecimal) return <DecimalToHex />;
		}

		if (fromType === Types.Octal) {
			if (toType === Types.Binary) return <OctalToBinary />;
			if (toType === Types.Decimal) return <OctalToDecimal />;
			if (toType === Types.Hexadecimal) return (
				<>
					<OctalToBinary />
					<BinaryToHex />
				</>
			)
		}

		if (fromType === Types.Hexadecimal) {
			if (toType === Types.Binary) return <HexToBinary />;
			if (toType === Types.Decimal) return <HexToDecimal />;
			if (toType === Types.Octal)
				return (
					<>
						<HexToBinary />
						<BinaryToOctal />
					</>
				);
		}
	}

	return (
		<article>
			<h1>Formula</h1>

			<section className="formula">
				{getFormula()}
			</section>
		</article>
	);
};

export default Formula;
