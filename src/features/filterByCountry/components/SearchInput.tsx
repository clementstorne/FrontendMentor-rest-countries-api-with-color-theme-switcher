import { useState } from "react";
import useTheme from "../../../hooks/useTheme";

type SearchInputProps = {
  onChangeOfFilter: (str: string) => void;
};

const SearchInput = ({ onChangeOfFilter }: SearchInputProps): JSX.Element => {
  const [filter, setFilter] = useState("");
  const { isDarkMode } = useTheme();

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setFilter(value);
    onChangeOfFilter(value);
  };

  return (
    <div className="relative text-battleshipGray dark:text-white">
      <label htmlFor="filter" id="filter-label" className="visuallyhidden">
        Search for a country
      </label>
      <input
        type="text"
        id="filter"
        aria-describedby="filter-label"
        spellCheck="false"
        placeholder="Search for a country…"
        value={filter}
        onChange={handleChange}
      />
      {isDarkMode === "true" ? (
        <img
          src="./search.svg"
          alt="Search icon"
          className="absolute left-8 top-4 md:top-[18px] md:w-5 md:h-5"
        />
      ) : (
        <img
          src="./search2.svg"
          alt="Search icon"
          className="absolute left-8 top-4 md:top-[18px] md:w-5 md:h-5"
        />
      )}
    </div>
  );
};

export default SearchInput;
