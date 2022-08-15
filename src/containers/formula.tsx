// State Management
import { useRecoilValue } from "recoil";
import { fromTypeState, toTypeState } from "../atoms/typesAtom";

// Formula Components
import DecimalToBinary from "../components/formulas/decimal-to-binary";
import BinaryToDecimal from "../components/formulas/binary-decimal";
import BinaryToOctal from "../components/formulas/binary-octal";

// Types
import { Types } from "../lib/types";

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
			</section>
		</article>
	);
}

export default Formula