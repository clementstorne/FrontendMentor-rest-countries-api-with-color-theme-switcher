import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

type FilterSelectProps = {
  regionsArray: string[];
  onChangeOfFilter: (str: string) => void;
};

const FilterSelect = ({
  regionsArray,
  onChangeOfFilter,
}: FilterSelectProps): JSX.Element => {
  const [isDropdownCollapsed, setIsDropdownCollapsed] = useState(true);
  const [filter, setFilter] = useState("");

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault;
    setIsDropdownCollapsed(!isDropdownCollapsed);
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement>): void => {
    const value = e.currentTarget.innerText;
    setFilter(value);
    onChangeOfFilter(value);
    setIsDropdownCollapsed(!isDropdownCollapsed);
  };

  return (
    <div className="relative min-w-50 w-50 text-xs md:text-sm font-normal">
      <div id="filter-dropdown" onClick={toggleDropdown}>
        {filter.length === 0 ? "Filter by Region" : filter}
      </div>

      {isDropdownCollapsed ? (
        <IoChevronDown className="dropdown-icon" onClick={toggleDropdown} />
      ) : (
        <IoChevronUp className="dropdown-icon" onClick={toggleDropdown} />
      )}

      {!isDropdownCollapsed ? (
        <div id="filter-dropdown-list">
          <ul>
            {regionsArray.map((region) => (
              <li
                className="pb-2 cursor-pointer hover:font-extrabold"
                key={region}
                onClick={handleClick}
              >
                {region}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FilterSelect;
