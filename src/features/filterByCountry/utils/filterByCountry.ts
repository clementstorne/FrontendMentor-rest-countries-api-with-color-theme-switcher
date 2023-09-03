const filterByCountry = (arr: Country[], filter: string): Country[] => {
  return arr.filter((country) => {
    return country.name.toLowerCase().includes(filter.toLowerCase());
  });
};

export default filterByCountry;
