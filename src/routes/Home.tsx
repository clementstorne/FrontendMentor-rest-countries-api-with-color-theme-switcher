import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import CountryCard from "../components/CountryCard";

import countries from "../__mocks__/data.json";
import { useEffect, useState } from "react";

const countriesArray: Country[] = countries;

export default function Home() {
  const [countriesToShow, setCountriesToShow] = useState(countriesArray);
  const [filter, setFilter] = useState("");

  const handleChangeOfFilter = (str: string): void => {
    setFilter(str);
  };

  useEffect(() => {
    const filterCountries = (filter: string): Country[] => {
      return countriesArray.filter((country) => {
        return country.name.toLowerCase().includes(filter.toLowerCase());
      });
    };

    setCountriesToShow(filterCountries(filter));
  }, [filter]);

  return (
    <>
      <Header />

      <main className="px-4 py-6">
        <SearchInput onChangeOfFilter={handleChangeOfFilter} />
        <div className="px-10">
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
