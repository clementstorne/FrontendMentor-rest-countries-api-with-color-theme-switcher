import countryCodesToNamesArray from "../data/countryCodesToNames";

const mapCountryCodesToNames = (countryCodes: string[]): string[] => {
  const countryNames: string[] = [];

  for (const code of countryCodes) {
    const correspondence = countryCodesToNamesArray.find((item) => item[code]);
    if (correspondence) {
      const name = correspondence[code];
      countryNames.push(name);
    }
  }
  return countryNames;
};

export default mapCountryCodesToNames;
