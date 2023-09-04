export {};

declare global {
  type CountryAPI = {
    name: Required<CountryName> & { nativeName: Record<string, CountryName> };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independant: boolean;
    status: string;
    unMember: boolean;
    currencies: Record<string, Record<"name" | "symbol", string>>;
    idd: {
      root: string;
      suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Record<string, string>;
    translations: Record<string, Record<["official" | "common"], string>>;
    latlng: number[];
    landlocked: boolean;
    borders?: string[];
    area: number;
    demonyms: Record<string, Record<["f" | "m"], string>>;
    flag: string;
    maps: Record<"googleMaps" | "openStreetMap", string>;
    population: number;
    gini: Record<[number], number>;
    fifa: string;
    car: {
      signs: string[];
      side: "right" | "left";
    };
    timezones: string[];
    continents: string[];
    flags: Record<"svg" | "png" | "alt", string>;
    coatOfArms: Record<"svg" | "png", string>;
    startOfWeek: "monday" | "saturday";
    capitalInfo: { latlng: number[] };
  };

  type CountryName = Record<"common" | "official", string>;

  type Country = {
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
  };

  type CountryCodesToNamesArray = Array<Record<string, string>>;
}
