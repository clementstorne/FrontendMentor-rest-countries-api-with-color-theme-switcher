import mapCountryCodesToNames from "../../utils/mapCountryCodesToNames";

class Country {
  cca3: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string[];
  languages: string[];
  borderCountriesCodes?: string[];
  borderCountriesNames?: string[];
  flag: string;
  flagAlt: string;

  constructor(data: CountryAPI) {
    this.cca3 = data.cca3;
    this.name = data.name.common;
    this.nativeName = data.name.nativeName
      ? Object.values(data.name.nativeName)[0].common
      : data.name.common;
    this.population = data.population;
    this.region = data.region;
    this.subRegion = data.subregion ? data.subregion : "none";
    this.capital = data.capital ? data.capital[0] : "none";
    this.topLevelDomain = data.tld ? data.tld[0] : "none";
    this.currencies = data.currencies
      ? Object.values(data.currencies).map((currency) => currency.name)
      : ["none"];
    this.languages = data.languages ? Object.values(data.languages) : ["none"];
    this.borderCountriesCodes = data.borders;
    this.borderCountriesNames = data.borders
      ? mapCountryCodesToNames(data.borders)
      : [];
    this.flag = data.flags ? data.flags.svg : "";
    this.flagAlt = data.flags ? data.flags.alt : `The flag of ${this.name}`;
  }
}

export default Country;
