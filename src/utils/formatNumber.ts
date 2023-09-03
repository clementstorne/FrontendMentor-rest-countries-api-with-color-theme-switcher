const formatNumber = (n: number): string => {
  return new Intl.NumberFormat("en-US").format(n);
};

export default formatNumber;
