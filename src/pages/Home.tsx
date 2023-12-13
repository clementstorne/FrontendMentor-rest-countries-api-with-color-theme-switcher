import { useEffect, useState } from "react";

import Header from "../layouts/Header";
import CountryCard from "../components/CountryCard";
import {
  SearchInput,
  filterByCountry,
} from "../features/filterByCountry/index";
import { FilterSelect, filterByRegion } from "../features/filterByRegion/index";

import Country from "../services/models/Country";
import CountryService from "../services/CountryService";
import sortCountriesByName from "../utils/sortCountriesByName";
import intersectionOfArrays from "../utils/intersectionOfArrays";

const fetchData = async (): Promise<Country[]> => {
  try {
    const dataArray: CountryAPI[] = await CountryService.getAll();
    const countriesArray: Country[] = dataArray.map((country) => {
      return new Country(country);
    });
    return sortCountriesByName(countriesArray);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const countriesArray: Country[] = await fetchData();
const regionsArray: string[] = [
  ...new Set(countriesArray.map((country) => country.region).sort()),
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
    const arrFilteredByCountry = filterByCountry(countriesArray, countryFilter);
    const arrFilteredByRegion = filterByRegion(countriesArray, regionFilter);

    setCountriesToShow(
      intersectionOfArrays<Country>(arrFilteredByCountry, arrFilteredByRegion)
    );
  }, [countryFilter, regionFilter]);

  return (
    <>
      <Header />

      <main className="px-4 py-6 md:px-20 md:py-12">
        <div className="md:flex md:flex-row md:flex-wrap md:justify-between md:items-start">
          <SearchInput onChangeOfFilter={handleChangeOfCountryFilter} />

          <FilterSelect
            regionsArray={regionsArray}
            onChangeOfFilter={handleChangeOfRegionFilter}
          />
        </div>

        <div className="flex flex-col md:flex-row flex-wrap items-center md:items-stretch md:justify-between -m-1">
          {countriesToShow.map((country, index) => (
            <CountryCard
              key={index}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
              flagAlt={country.flagAlt}
              code={country.cca3}
            />
          ))}
        </div>
      </main>
    </>
  );
}
