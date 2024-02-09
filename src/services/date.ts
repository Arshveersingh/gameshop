const getDateStr = () => {
  let dateToday = new Date();
  let lastThreeMonth = new Date();
  let nextThreeMonth = new Date();
  let searchDateStr = "";
  lastThreeMonth.setMonth(dateToday.getMonth() - 3);
  nextThreeMonth.setMonth(dateToday.getMonth() + 3);
  searchDateStr = `${lastThreeMonth.toISOString().split("T")[0]},${
    nextThreeMonth.toISOString().split("T")[0]
  }`;
  return searchDateStr;
};

export default getDateStr;
