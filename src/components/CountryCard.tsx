import { Link } from "react-router-dom";
import formatNumber from "../utils/formatNumber";

type CountryCardProps = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  flagAlt: string;
  code: string;
};

const CountryCard = ({
  name,
  population,
  region,
  capital,
  flag,
  flagAlt,
  code,
}: CountryCardProps): JSX.Element => {
  const populationString: string = formatNumber(population);

  return (
    <Link to={"/detail/" + code}>
      <div className="w-[265px] md:mx-1 mb-10 md:mb-[75px] bg-white dark:bg-gunmetalLight rounded-md">
        <img
          src={flag}
          alt={flagAlt ? flagAlt : `The flag of ${name}`}
          className="object-cover w-full h-[161px] rounded-t-md"
        />
        <div className="p-6">
          <h2 className="text-lg font-extrabold mb-4">{name}</h2>
          <div className="text-sm">
            <p className="mb-1">
              <span className="font-semibold">Population:</span>{" "}
              {populationString}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Region:</span> {region}
            </p>
            <p>
              <span className="font-semibold">Capital:</span> {capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
