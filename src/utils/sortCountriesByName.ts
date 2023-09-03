const sortCountriesByName = (arr: Country[]): Country[] => {
  return arr.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
};

export default sortCountriesByName;
