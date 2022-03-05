const groupByObjectValue = function <T>(xs: T[], key: string): { [key: string]: T[] } {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export default groupByObjectValue;
