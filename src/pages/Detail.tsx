import { useEffect, useState } from "react";

import Header from "../layouts/Header";
import LinkButton from "../layouts/LinkButton";

import Country from "../services/models/Country";
import CountryService from "../services/CountryService";

export default function Detail() {
  const countryNameInPath: string =
    window.location.pathname.split("detail/")[1];

  const [country, setCountry] = useState<Country | null>(null);

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

  console.log(country);

  return (
    <>
      <Header />

      <main className="px-7 py-10">
        <LinkButton text={"Back"} />
      </main>
    </>
  );
}
