import styles from "./input.module.css";

const Input = () => {
  return (
		<div className={styles.inputGroup}>
			<input
				required
				type="text"
				name="text"
				autoComplete="off"
				className={styles.input}
			/>
			<label className={styles.userLabel}>Binary</label>
		</div>
	);
}

export default Input