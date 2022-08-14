// State Management
import { useRecoilValue } from "recoil";
import { fromTypeState, toTypeState } from "../atoms/typesAtom";

// Formula Components
import DecimalToBinary from "../components/formulas/decimal-to-binary";

// Types
import { Types } from "../lib/types";

const Formula = () => {
  const fromType = useRecoilValue(fromTypeState);
  const toType = useRecoilValue(toTypeState);

  return (
		<article>
			<h1>Formula</h1>

			<section>
				{fromType === Types.Decimal && toType === Types.Binary ? <DecimalToBinary /> : ""}
			</section>
		</article>
	);
}

export default Formula