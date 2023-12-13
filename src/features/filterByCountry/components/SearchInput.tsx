import { useState } from "react";

type SearchInputProps = {
  onChangeOfFilter: (str: string) => void;
};

const SearchInput = ({ onChangeOfFilter }: SearchInputProps): JSX.Element => {
  const [filter, setFilter] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setFilter(value);
    onChangeOfFilter(value);
  };

  return (
    <div className="relative">
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
      <img
        src="./search.svg"
        alt="Search icon"
        className="absolute left-8 top-4 md:top-[18px] md:w-5 md:h-5"
      />
    </div>
  );
};

export default SearchInput;
