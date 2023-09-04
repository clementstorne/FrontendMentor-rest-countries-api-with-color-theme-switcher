const getBorderCountries = (
  codesArray: string[],
  namesArray: string[]
): Array<Record<"code" | "name", string>> => {
  const arr: Array<Record<"code" | "name", string>> = [];
  for (let i = 0; i < codesArray.length; i++) {
    arr.push({ code: codesArray[i], name: namesArray[i] });
  }
  return arr;
};

export default getBorderCountries;
