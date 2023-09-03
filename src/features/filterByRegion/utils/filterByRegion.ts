const filterByRegion = (arr: Country[], filter: string): Country[] => {
  return arr.filter((country) => {
    return country.region.toLowerCase().includes(filter.toLowerCase());
  });
};

export default filterByRegion;
