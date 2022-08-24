import { motion } from "framer-motion";

function FormulaWrapper({ children }: { children?: JSX.Element }) {
	return (
		<motion.div
			initial={{ y: 30, opacity: 0, scale: 0.95 }}
			animate={{ y: 0, opacity: 1, scale: 1 }}
			transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
}

export default FormulaWrapper;
