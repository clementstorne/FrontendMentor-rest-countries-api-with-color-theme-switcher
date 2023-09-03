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
    <div className="relative min-w-[200px] w-[200px]">
      <div
        className="w-full h-12 md:h-14 mb-[31px] md:mb-[47px] pl-6 rounded-md bg-lightElement dark:bg-darkElement flex items-center text-xs md:text-sm font-normal cursor-pointer"
        onClick={toggleDropdown}
      >
        {filter.length === 0 ? "Filter by Region" : filter}
      </div>

      {isDropdownCollapsed ? (
        <IoChevronDown
          className="absolute right-[18px] top-[18px] md:top-[21px] cursor-pointer"
          onClick={toggleDropdown}
        />
      ) : (
        <IoChevronUp
          className="absolute right-[18px] top-[18px] md:top-[21px] cursor-pointer"
          onClick={toggleDropdown}
        />
      )}

      {!isDropdownCollapsed ? (
        <div className="w-full min-h-12 px-6 py-4 rounded-md bg-lightElement dark:bg-darkElement text-xs md:text-sm font-normal absolute top-[51px] md:top-[60px] left-0">
          <ul>
            {regionsArray.map((region) => (
              <li
                className="pb-2 md:pb-[9px] cursor-pointer hover:font-extrabold"
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
