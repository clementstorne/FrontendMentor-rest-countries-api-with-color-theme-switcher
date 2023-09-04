import { useEffect, useState } from "react";

import Header from "../layouts/Header";
import BackButton from "../layouts/BackButton";

import Country from "../services/models/Country";
import CountryService from "../services/CountryService";
import CountryDetailedCard from "../components/CountryDetailedCard";

export default function Detail() {
  const [countryNameInPath, setCountryNameInPath] = useState(
    window.location.pathname.split("detail/")[1]
  );
  const [country, setCountry] = useState<Country | null>(null);

  const updateData = (str: string): void => {
    setCountryNameInPath(str);
  };

  useEffect(() => {
    const fetchData = async (countryName: string): Promise<Country> => {
      try {
        const data: CountryAPI = await CountryService.getOneCountry(
          countryName
        );
        const country: Country = new Country(data);
        setCountry(country);
        return country;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    fetchData(countryNameInPath);
  }, [countryNameInPath]);

  return (
    <>
      <Header />

      <BackButton />

      <main className="px-7 md:px-20">
        {country !== null ? (
          <CountryDetailedCard country={country} updateCountry={updateData} />
        ) : (
          <p>Data can't be fetched.</p>
        )}
      </main>
    </>
  );
}
