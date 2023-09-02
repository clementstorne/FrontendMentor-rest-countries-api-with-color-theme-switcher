export {};

declare global {
  type Country = {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital?: string;
    altSpellings?: string[];
    subregion: string;
    region: string;
    population: number;
    latlng?: number[];
    demonym: string;
    area?: number;
    timezones: string[];
    borders?: string[];
    nativeName: string;
    numericCode: string;
    flags: Flags;
    currencies?: Currency[];
    languages: Language[];
    translations: Translations;
    flag: string;
    regionalBlocs?: regionalBloc[];
    cioc?: string;
    independent: boolean;
  };

  type CountryName = {
    common: string;
    official: string;
    nativeName: object;
  };

  type Flags = {
    svg: string;
    png: string;
    alt: string;
  };

  type Currency = {
    code: string;
    name: string;
    symbol: string;
  };

  type Language = {
    iso639_1?: string;
    iso639_2: string;
    name: string;
    nativeName?: string;
  };

  type Translations = {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa?: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
  };

  type regionalBloc = {
    acronym: string;
    name: string;
  };
}
