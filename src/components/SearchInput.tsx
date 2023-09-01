import { useState } from "react";
import { IoSearch } from "react-icons/io5";

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
        className="w-full h-12 rounded mb-10 pl-[74px] bg-lightElement dark:bg-darkElement placeholder-lightInput dark:placeholder-darkText text-xs font-normal"
        placeholder="Search for a country…"
        value={filter}
        onChange={handleChange}
      />
      <IoSearch className="absolute left-8 top-4" />
    </div>
  );
};

export default SearchInput;
