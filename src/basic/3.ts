type UnionType = string | number;

let unionType: UnionType;

unionType = "string";
unionType = 123;
//unionType = true; Error

type LiteralType = "enable" | "disable";

let literalType: LiteralType;

literalType = "enable";
literalType = "disable";
//literalType = "stop"; Error
