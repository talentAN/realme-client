import { format } from "d3-format";

const FormatStr: any[] = [
  { key: "int", str: ",.0f" },
  { key: "float", str: ",.2f" },
  { key: "si", str: ",.2s" },
  { key: "percent", str: ",.2%" }
];

export const numFormatter = (num: number, type?: any) => {
  if (type) {
    const target =
      FormatStr.filter((item: any) => item.key === type)[0] || FormatStr[0];
    return format(FormatStr[target.str])(num);
  }
  if (num < 1000) {
    return format(FormatStr[0].str)(num);
  }
  if (num > 1000) {
    return format(FormatStr[2].str)(num);
  }
};