import { useEffect, useState } from "react";

import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import CountryCard from "../components/CountryCard";
import FilterSelect from "../components/FilterSelect";

import countries from "../__mocks__/data.json";

const countriesArray: Country[] = countries;
const regionsArray: string[] = [
  ...new Set(countries.map((country) => country.region).sort()),
];

export default function Home() {
  const [countriesToShow, setCountriesToShow] = useState(countriesArray);
  const [countryFilter, setCountryFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const handleChangeOfCountryFilter = (str: string): void => {
    setCountryFilter(str);
  };

  const handleChangeOfRegionFilter = (str: string): void => {
    setRegionFilter(str);
  };

  useEffect(() => {
    const filterByCountry = (arr: Country[], filter: string): Country[] => {
      return arr.filter((country) => {
        return country.name.toLowerCase().includes(filter.toLowerCase());
      });
    };

    const filterByRegion = (arr: Country[], filter: string): Country[] => {
      return arr.filter((country) => {
        return country.region.toLowerCase().includes(filter.toLowerCase());
      });
    };

    const arrFilteredByCountry = filterByCountry(countriesArray, countryFilter);
    const arrFilteredByRegion = filterByRegion(countriesArray, regionFilter);

    const intersection = (
      firstArr: Country[],
      secondArr: Country[]
    ): Country[] => {
      const first: Set<Country> = new Set(firstArr);
      const second: Set<Country> = new Set(secondArr);
      return [...first].filter((item) => second.has(item));
    };

    setCountriesToShow(intersection(arrFilteredByCountry, arrFilteredByRegion));
  }, [countryFilter, regionFilter]);

  return (
    <>
      <Header />

      <main className="px-4 md:px-20 py-6">
        <div className="md:flex md:flex-row md:flex-nowrap md:justify-between md:items-start">
          <SearchInput onChangeOfFilter={handleChangeOfCountryFilter} />

          <FilterSelect
            regionsArray={regionsArray}
            onChangeOfFilter={handleChangeOfRegionFilter}
          />
        </div>

        <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-between -m-1">
          {countriesToShow.map((country, index) => (
            <CountryCard
              key={index}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital ? country.capital : "none"}
              flag={country.flags.svg}
            />
          ))}
        </div>
      </main>
    </>
  );
}
