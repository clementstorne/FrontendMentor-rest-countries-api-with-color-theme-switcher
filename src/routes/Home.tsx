import Header from "../components/Header";
import CountryCard from "../components/CountryCard";

import countries from "../__mocks__/data.json";

export default function Home() {
  return (
    <>
      <Header />

      <main className="px-14 py-6">
        {countries.map((country, index) => (
          <CountryCard
            key={index}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital ? country.capital : "none"}
            flag={country.flags.svg}
          />
        ))}
      </main>
    </>
  );
}
