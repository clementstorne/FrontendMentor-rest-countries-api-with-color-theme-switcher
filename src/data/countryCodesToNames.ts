import CountryService from "../services/CountryService";

const dataArray: CountryAPI[] = await CountryService.getAll();
const countryCodesToNamesArray: CountryCodesToNamesArray = dataArray.map(
  (country) => {
    return { [country.cca3]: country.name.common };
  }
);

export default countryCodesToNamesArray;
