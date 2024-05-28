const linearSearch = <T>(
  list: T[],
  compare: (element: T) => boolean
): T | undefined => {
  for (const element of list) {
    if (compare(element)) {
      return element;
    }
  }

  return undefined;
};

export default linearSearch;
