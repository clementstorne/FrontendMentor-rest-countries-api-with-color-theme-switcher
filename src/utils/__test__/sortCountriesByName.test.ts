import { describe, expect, it } from "vitest";
import sortCountriesByName from "../sortCountriesByName";

describe("sortCountriesByName", () => {
  const unsortedArray: Country[] = [
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
      cca3: "FRA",
      name: "France",
      nativeName: "France",
      population: 67391582,
      region: "Europe",
      subRegion: "Western Europe",
      capital: "Paris",
      topLevelDomain: ".fr",
      currencies: ["Euro"],
      languages: ["French"],
      borderCountriesCodes: [
        "AND",
        "BEL",
        "DEU",
        "ITA",
        "LUX",
        "MCO",
        "ESP",
        "CHE",
      ],
      borderCountriesNames: [
        "Andorra",
        "Belgium",
        "Germany",
        "Italy",
        "Luxembourg",
        "Monaco",
        "Spain",
        "Switzerland",
      ],
      flag: "https://flagcdn.com/fr.svg",
      flagAlt:
        "The flag of France is composed of three equal vertical bands of blue, white and red.",
    },
    {
      cca3: "AUS",
      name: "Australia",
      nativeName: "Australia",
      population: 25687041,
      region: "Oceania",
      subRegion: "Australia and New Zealand",
      capital: "Canberra",
      topLevelDomain: ".au",
      currencies: ["Australian dollar"],
      languages: ["English"],
      borderCountriesNames: [],
      flag: "https://flagcdn.com/au.svg",
      flagAlt:
        "The flag of Australia has a dark blue field. It features the flag of the United Kingdom — the Union Jack — in the canton, beneath which is a large white seven-pointed star. A representation of the Southern Cross constellation, made up of one small five-pointed and four larger seven-pointed white stars, is situated on the fly side of the field.",
    },
    {
      cca3: "BRA",
      name: "Brazil",
      nativeName: "Brasil",
      population: 212559409,
      region: "Americas",
      subRegion: "South America",
      capital: "Brasília",
      topLevelDomain: ".br",
      currencies: ["Brazilian real"],
      languages: ["Portuguese"],
      borderCountriesCodes: [
        "ARG",
        "BOL",
        "COL",
        "GUF",
        "GUY",
        "PRY",
        "PER",
        "SUR",
        "URY",
        "VEN",
      ],
      borderCountriesNames: [
        "Argentina",
        "Bolivia",
        "Colombia",
        "French Guiana",
        "Guyana",
        "Paraguay",
        "Peru",
        "Suriname",
        "Uruguay",
        "Venezuela",
      ],
      flag: "https://flagcdn.com/br.svg",
      flagAlt:
        "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center.",
    },
  ];

  const expectedResult: Country[] = [
    {
      cca3: "AUS",
      name: "Australia",
      nativeName: "Australia",
      population: 25687041,
      region: "Oceania",
      subRegion: "Australia and New Zealand",
      capital: "Canberra",
      topLevelDomain: ".au",
      currencies: ["Australian dollar"],
      languages: ["English"],
      borderCountriesNames: [],
      flag: "https://flagcdn.com/au.svg",
      flagAlt:
        "The flag of Australia has a dark blue field. It features the flag of the United Kingdom — the Union Jack — in the canton, beneath which is a large white seven-pointed star. A representation of the Southern Cross constellation, made up of one small five-pointed and four larger seven-pointed white stars, is situated on the fly side of the field.",
    },
    {
      cca3: "BRA",
      name: "Brazil",
      nativeName: "Brasil",
      population: 212559409,
      region: "Americas",
      subRegion: "South America",
      capital: "Brasília",
      topLevelDomain: ".br",
      currencies: ["Brazilian real"],
      languages: ["Portuguese"],
      borderCountriesCodes: [
        "ARG",
        "BOL",
        "COL",
        "GUF",
        "GUY",
        "PRY",
        "PER",
        "SUR",
        "URY",
        "VEN",
      ],
      borderCountriesNames: [
        "Argentina",
        "Bolivia",
        "Colombia",
        "French Guiana",
        "Guyana",
        "Paraguay",
        "Peru",
        "Suriname",
        "Uruguay",
        "Venezuela",
      ],
      flag: "https://flagcdn.com/br.svg",
      flagAlt:
        "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center.",
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
      cca3: "FRA",
      name: "France",
      nativeName: "France",
      population: 67391582,
      region: "Europe",
      subRegion: "Western Europe",
      capital: "Paris",
      topLevelDomain: ".fr",
      currencies: ["Euro"],
      languages: ["French"],
      borderCountriesCodes: [
        "AND",
        "BEL",
        "DEU",
        "ITA",
        "LUX",

        "MCO",
        "ESP",
        "CHE",
      ],
      borderCountriesNames: [
        "Andorra",
        "Belgium",
        "Germany",
        "Italy",
        "Luxembourg",
        "Monaco",
        "Spain",
        "Switzerland",
      ],
      flag: "https://flagcdn.com/fr.svg",
      flagAlt:
        "The flag of France is composed of three equal vertical bands of blue, white and red.",
    },
  ];

  const singleCountryArray: Country[] = [
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

  const identicalCountryArray: Country[] = [
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

  it("should sort an array of countries by name in ascending order", () => {
    const sortedArray = sortCountriesByName(unsortedArray);

    expect(sortedArray).toEqual(expectedResult);
  });

  it("should handle an empty array", () => {
    const emptyArray: Country[] = [];

    const sortedArray = sortCountriesByName(emptyArray);

    expect(sortedArray).toEqual([]);
  });

  it("should handle an already sorted array by name", () => {
    const sortedAgain = sortCountriesByName(expectedResult);

    expect(sortedAgain).toEqual(expectedResult);
  });

  it("should handle an array with only one country", () => {
    const sortedArray = sortCountriesByName(singleCountryArray);

    expect(sortedArray).toEqual(singleCountryArray);
  });

  it("should handle an array with two identical countries", () => {
    const sortedArray = sortCountriesByName(identicalCountryArray);

    expect(sortedArray).toEqual(identicalCountryArray);
  });
});
