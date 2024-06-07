const binarySearch = <T>(list: T[], target: T): T | undefined => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.round(low + (high - low) / 2);

    if (list[mid] === target) {
      return list[mid];
    } else if (list[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return undefined;
};

export default binarySearch;
