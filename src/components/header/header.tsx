// Imports
import { useRef, useEffect } from "react";
import Typed from "typed.js";

import styles from "./header.module.css";

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
			startDelay: 400,
			backSpeed: 50,
			backDelay: 5000,
			autoInsertCss: true,
			shuffle: true,
			loop: true
		};

		// @ts-ignore
		typed.current = new Typed(el.current || '', options);

		return () => {
			// @ts-ignore
			typed.current.destroy();
		}
	}, []);

	return (
		<header className={styles.header}>
			{/* Random header */}
			<span className={styles.title} ref={el} style={{ height: "150px"}}></span>
		</header>
	);
};

export default Header;
