// State Management
import { useRecoilValue } from "recoil";
import { fromTypeState, toTypeState } from "../atoms/typesAtom";

// Formula Components
import DecimalToBinary from "../components/formulas/decimal-to-binary";
import BinaryToDecimal from "../components/formulas/binary-decimal";
import BinaryToOctal from "../components/formulas/binary-octal";

// Types
import { Types } from "../lib/types";
import OctalToDecimal from "../components/formulas/octal-decimal";
import DecimalToHex from "../components/formulas/decimal-hex";
import DecimalToOctal from "../components/formulas/decimal-octal";

const Formula = () => {
  const fromType = useRecoilValue(fromTypeState);
  const toType = useRecoilValue(toTypeState);

  return (
		<article>
			<h1 style={{ marginTop: "var(--margin-spacing-1)" }}>Formula</h1>

			<section className="formula">
				{fromType === Types.Decimal && toType === Types.Binary ? (
					<DecimalToBinary />
				) : (
					""
				)}
				{fromType === Types.Binary && toType === Types.Decimal ? (
					<BinaryToDecimal />
				) : (
					""
				)}
				{fromType === Types.Binary && toType === Types.Octal ? (
					<BinaryToOctal />
				) : (
					""
				)}
				{fromType === Types.Octal && toType === Types.Decimal ? (
					<OctalToDecimal />
				) : (
					""
				)}
				{fromType === Types.Decimal && toType === Types.Hexadecimal ? (
					<DecimalToHex />
				) : (
					""
				)}
				{fromType === Types.Decimal && toType === Types.Octal ? (
					<DecimalToOctal />
				) : (
					""
				)}
			</section>
		</article>
	);
}

export default Formula