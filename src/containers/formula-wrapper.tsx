import { motion } from "framer-motion";

import { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { fromTypeState, toTypeState } from "../atoms/typesAtom";

enum Change {
	Enter = "enter",
	Exit = "exit",
}

const formulaWrapperAnimations = {
	fadeOut: { y: 30, opacity: 0, scale: 0.95 },
	fadeIn: { y: 0, opacity: 1, scale: 1 },
};

function FormulaWrapper({ children }: { children: JSX.Element }) {
	const [change, setChange] = useState(Change.Enter);
	const fromType = useRecoilValue(fromTypeState);
	const toType = useRecoilValue(toTypeState);

	useEffect(() => {
		let timeout: NodeJS.Timeout | undefined = undefined;
		if (change === Change.Enter) {
			setChange(Change.Exit);
		}
		timeout = setTimeout(() => {
			setChange(Change.Enter);
		}, 400);

		return () => {
			clearTimeout(timeout);
		};
	}, [fromType, toType]);

	return (
		<motion.div
		initial={formulaWrapperAnimations.fadeOut}
		animate={formulaWrapperAnimations.fadeIn}
		transition={{ delay: 3, duration: 0.8, ease: "easeOut"}}
		>
			<motion.div
				variants={formulaWrapperAnimations}
				initial={change === Change.Enter ? "fadeOut" : "fadeIn"}
				animate={change === Change.Enter ? "fadeIn" : "fadeOut"}
				transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
			>
				{children}
			</motion.div>
		</div>
	);
}

export default FormulaWrapper;
