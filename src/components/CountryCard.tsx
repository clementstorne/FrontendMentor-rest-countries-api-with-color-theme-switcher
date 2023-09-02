type CountryCardProps = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: Flags;
};

const formatNumber = (n: number): string => {
  return new Intl.NumberFormat("en-US").format(n);
};

const CountryCard = ({
  name,
  population,
  region,
  capital,
  flag,
}: CountryCardProps): JSX.Element => {
  const populationString: string = formatNumber(population);

  return (
    <div className="w-full max-w-[265px] md:mx-1 mb-10 md:mb-[75px] bg-lightElement dark:bg-darkElement rounded-md">
      <img
        src={flag.svg}
        alt={flag.alt ? flag.alt : `The flag of ${name}`}
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
  );
};

export default CountryCard;
