// State Management
import { useRecoilState } from "recoil";
import { fromTypeState, toTypeState } from "../../atoms/typesAtom";


const TypeReverseButton = () => {
	const [fromType, setFromType] = useRecoilState(fromTypeState);
	const [toType, setToType] = useRecoilState(toTypeState);

	function handleTypeReversal() {
		const tempTypeHolder = toType;
		setToType(fromType);
		setFromType(tempTypeHolder);
	}

  return (
		<button className="reverse" id="reverse" onClick={handleTypeReversal}>
			<svg
				width="20"
				height="26"
				viewBox="0 0 20 26"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9.64645 3.64645C9.45118 3.84171 9.45118 4.15829 9.64645 4.35355L12.8284 7.53553C13.0237 7.7308 13.3403 7.7308 13.5355 7.53553C13.7308 7.34027 13.7308 7.02369 13.5355 6.82843L10.7071 4L13.5355 1.17157C13.7308 0.976311 13.7308 0.659728 13.5355 0.464466C13.3403 0.269204 13.0237 0.269204 12.8284 0.464466L9.64645 3.64645ZM10 4.5C14.6944 4.5 18.5 8.30558 18.5 13H19.5C19.5 7.75329 15.2467 3.5 10 3.5V4.5ZM18.5 13C18.5 17.6944 14.6944 21.5 10 21.5V22.5C15.2467 22.5 19.5 18.2467 19.5 13H18.5Z"
					fill="#3D85F6"
					id="from-arrow"
				/>
				<path
					d="M10.3536 22.3536C10.5488 22.1583 10.5488 21.8417 10.3536 21.6464L7.17157 18.4645C6.97631 18.2692 6.65973 18.2692 6.46447 18.4645C6.2692 18.6597 6.2692 18.9763 6.46447 19.1716L9.29289 22L6.46447 24.8284C6.2692 25.0237 6.2692 25.3403 6.46447 25.5355C6.65973 25.7308 6.97631 25.7308 7.17157 25.5355L10.3536 22.3536ZM10 21.5C5.30558 21.5 1.5 17.6944 1.5 13H0.5C0.5 18.2467 4.75329 22.5 10 22.5V21.5ZM1.5 13C1.5 8.30558 5.30558 4.5 10 4.5V3.5C4.75329 3.5 0.5 7.75329 0.5 13H1.5Z"
					fill="#EE6366"
					id="to-arrow"
				/>
			</svg>
		</button>
	);
}

export default TypeReverseButton