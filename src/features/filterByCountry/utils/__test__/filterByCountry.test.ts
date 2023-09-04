import { describe, expect, it } from "vitest";
import filterByCountry from "../filterByCountry";

const countries: Country[] = [
  {
    cca3: "USA",
    name: "United States",
    nativeName: "United States",
    population: 329484123,
    region: "Americas",
    subRegion: "North America",
    capital: "Washington, D.C.",
    topLevelDomain: ".us",
    currencies: ["United States dollar"],
    languages: ["English"],
    borderCountriesCodes: ["CAN", "MEX"],
    borderCountriesNames: ["Canada", "Mexico"],
    flag: "https://flagcdn.com/us.svg",
    flagAlt:
      "The flag of the United States of America is composed of thirteen equal horizontal bands of red alternating with white. A blue rectangle, bearing fifty small five-pointed white stars arranged in nine rows where rows of six stars alternate with rows of five stars, is superimposed in the canton.",
  },
  {
    cca3: "CAN",
    name: "Canada",
    nativeName: "Canada",
    population: 38005238,
    region: "Americas",
    subRegion: "North America",
    capital: "Ottawa",
    topLevelDomain: ".ca",
    currencies: ["Canadian dollar"],
    languages: ["English", "French"],
    borderCountriesCodes: ["USA"],
    borderCountriesNames: ["United States"],
    flag: "https://flagcdn.com/ca.svg",
    flagAlt:
      "The flag of Canada is composed of a red vertical band on the hoist and fly sides and a central white square that is twice the width of the vertical bands. A large eleven-pointed red maple leaf is centered in the white square.",
  },
  {
    cca3: "GBR",
    name: "United Kingdom",
    nativeName: "United Kingdom",
    population: 67215293,
    region: "Europe",
    subRegion: "Northern Europe",
    capital: "London",
    topLevelDomain: ".uk",
    currencies: ["British pound"],
    languages: ["English"],
    borderCountriesCodes: ["IRL"],
    borderCountriesNames: ["Ireland"],
    flag: "https://flagcdn.com/gb.svg",
    flagAlt:
      "The flag of the United Kingdom — the Union Jack — has a blue field. It features the white-edged red cross of Saint George superimposed on the diagonal red cross of Saint Patrick which is superimposed on the diagonal white cross of Saint Andrew.",
  },
  {
    cca3: "DEU",
    name: "Germany",
    nativeName: "Deutschland",
    population: 83240525,
    region: "Europe",
    subRegion: "Western Europe",
    capital: "Berlin",
    topLevelDomain: ".de",
    currencies: ["Euro"],
    languages: ["German"],
    borderCountriesCodes: [
      "AUT",
      "BEL",
      "CZE",
      "DNK",
      "FRA",
      "LUX",
      "NLD",
      "POL",
      "CHE",
    ],
    borderCountriesNames: [
      "Austria",
      "Belgium",
      "Czechia",
      "Denmark",
      "France",
      "Luxembourg",
      "Netherlands",
      "Poland",
      "Switzerland",
    ],
    flag: "https://flagcdn.com/de.svg",
    flagAlt:
      "The flag of Germany is composed of three equal horizontal bands of black, red and gold.",
  },
];

const expectedResult: Country[] = [
  {
    cca3: "USA",
    name: "United States",
    nativeName: "United States",
    population: 329484123,
    region: "Americas",
    subRegion: "North America",
    capital: "Washington, D.C.",
    topLevelDomain: ".us",
    currencies: ["United States dollar"],
    languages: ["English"],
    borderCountriesCodes: ["CAN", "MEX"],
    borderCountriesNames: ["Canada", "Mexico"],
    flag: "https://flagcdn.com/us.svg",
    flagAlt:
      "The flag of the United States of America is composed of thirteen equal horizontal bands of red alternating with white. A blue rectangle, bearing fifty small five-pointed white stars arranged in nine rows where rows of six stars alternate with rows of five stars, is superimposed in the canton.",
  },
  {
    cca3: "GBR",
    name: "United Kingdom",
    nativeName: "United Kingdom",
    population: 67215293,
    region: "Europe",
    subRegion: "Northern Europe",
    capital: "London",
    topLevelDomain: ".uk",
    currencies: ["British pound"],
    languages: ["English"],
    borderCountriesCodes: ["IRL"],
    borderCountriesNames: ["Ireland"],
    flag: "https://flagcdn.com/gb.svg",
    flagAlt:
      "The flag of the United Kingdom — the Union Jack — has a blue field. It features the white-edged red cross of Saint George superimposed on the diagonal red cross of Saint Patrick which is superimposed on the diagonal white cross of Saint Andrew.",
  },
];

describe("filterByCountry", () => {
  it("should filter countries that match the filter string (case-insensitive)", () => {
    const filteredCountries = filterByCountry(countries, "united");
    expect(filteredCountries).toEqual(expectedResult);
  });

  it("should return an empty array if no countries match the filter", () => {
    const filteredCountries = filterByCountry(countries, "Australia");
    expect(filteredCountries).toEqual([]);
  });

  it("should handle an empty input array", () => {
    const filteredCountries = filterByCountry([], "United");
    expect(filteredCountries).toEqual([]);
  });

  it("should handle an empty filter string", () => {
    const filteredCountries = filterByCountry(countries, "");
    expect(filteredCountries).toEqual(countries);
  });
});
