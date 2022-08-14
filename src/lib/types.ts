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

export function getProbables(type: Types): String[] {
	if (type === Types.Binary) {
		return ["0", "1"]
	} else if (type === Types.Decimal) {
		return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	} else if (type === Types.Octal) {
		return ["0", "1", "2", "3", "4", "5", "6", "7"];
	} else {
		return [
			"0",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
		];
	}
}

export enum Theme {
	Light = "Light",
	Dark = "Dark",
}
