const intersectionOfArrays = <T>(firstArr: T[], secondArr: T[]): T[] => {
  const first: Set<T> = new Set(firstArr);
  const second: Set<T> = new Set(secondArr);
  return [...first].filter((item) => second.has(item));
};

export default intersectionOfArrays;
