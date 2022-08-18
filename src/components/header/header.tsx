// Imports
import { useRef, useEffect } from "react";

// Css
import styles from "./header.module.css";

// Animation
import Typed from "typed.js";
import { motion } from "framer-motion";

const Header = () => {
	const el = useRef(null);
	const typed = useRef(null);

	useEffect(() => {
		const options = {
			strings: [
				"Quickly convert your digits from different digital formats.",
				"Get a detailed overview of the formulas used for conversion.",
				"Select from 4 different digital formats for conversion.",
				"Easily transition between different digital formats for conversion.",
			],
			typeSpeed: 50,
			startDelay: 1000,
			backSpeed: 50,
			backDelay: 5000,
			autoInsertCss: true,
			shuffle: true,
			loop: true,
		};

		// @ts-ignore
		typed.current = new Typed(el.current || "", options);

		return () => {
			// @ts-ignore
			typed.current.destroy();
		};
	}, []);

	return (
		<motion.header
			initial={{ y: 25, opacity: 0, scale: 0.9 }}
			animate={{ y: 0, opacity: 1, scale: 1 }}
			transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
			className={styles.header}
		>
			{/* Random header */}
			<span
				className={styles.title}
				ref={el}
				style={{ height: "150px" }}
			></span>
		</motion.header>
	);
};

export default Header;
