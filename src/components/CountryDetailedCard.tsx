import LinkButton from "../layouts/LinkButton";

import formatNumber from "../utils/formatNumber";
import getBorderCountries from "../utils/getBorderCountries";

type CountryDetailedCardProps = {
  country: Country;
  updateCountry: (str: string) => void;
};

const CountryDetailedCard = ({
  country,
  updateCountry,
}: CountryDetailedCardProps): JSX.Element => {
  const populationString: string = formatNumber(country.population);
  const borderCountries: Array<Record<"code" | "name", string>> =
    country.borderCountriesCodes
      ? getBorderCountries(
          country.borderCountriesCodes,
          country.borderCountriesNames!
        )
      : [];

  const handleClick = (str: string): void => {
    updateCountry(str);
  };

  return (
    <div className="">
      <img
        src={country.flag}
        alt={country.flagAlt ? country.flagAlt : `The flag of ${country.name}`}
        className="object-fill w-full h-[229px]"
      />
      <h1 className="mt-11 mb-[23px] text-[22px] font-extrabold">
        {country.name}
      </h1>
      <div className="text-sm mb-11">
        <p className="mb-[13px]">
          <span className="font-semibold">Native Name: </span>
          {country.nativeName}
        </p>
        <p className="mb-[13px]">
          <span className="font-semibold">Population: </span> {populationString}
        </p>
        <p className="mb-[13px]">
          <span className="font-semibold">Region: </span> {country.region}
        </p>
        <p className="mb-[13px]">
          <span className="font-semibold">Sub Region: </span>
          {country.subRegion}
        </p>
        <p>
          <span className="font-semibold">Capital: </span> {country.capital}
        </p>
      </div>
      <div className="text-sm mb-10">
        <p className="mb-[13px]">
          <span className="font-semibold">Top Level Domain: </span>
          {country.topLevelDomain}
        </p>
        <p className="mb-[13px]">
          <span className="font-semibold">Currencies: </span>
          {country.currencies.length === 1
            ? country.currencies[0]
            : country.currencies.join(", ")}
        </p>
        <p>
          <span className="font-semibold">Languages: </span>
          {country.languages.length === 1
            ? country.languages[0]
            : country.languages.join(", ")}
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-base font-semibold mb-4">Border Countries:</h2>
        <div className="flex flex-row flex-wrap justify-start items-center">
          {country.borderCountriesCodes
            ? borderCountries.map((borderCountry, index) => (
                <LinkButton
                  key={index}
                  text={borderCountry.name}
                  target={borderCountry.code}
                  action={handleClick}
                />
              ))
            : "None"}
        </div>
      </div>
    </div>
  );
};

export default CountryDetailedCard;
