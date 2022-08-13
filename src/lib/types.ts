export enum Types {
	Binary = "Binary",
	Decimal = "Decimal",
	Octal = "Octal",
	Hexadecimal = "Hexadecimal",
}

export function getTypeBase(type: Types): String {
	if (type === Types.Binary) {
		return "base-2";
	} else if (type === Types.Decimal) {
		return "base-10";
	} else if (type === Types.Octal) {
		return "base-8";
	} else {
		return "base-16";
	}
}

export enum Theme {
	Light = "Light",
	Dark = "Dark",
}
