// returns str which can be passed to date argument in search params
// to sort games by date. Returns date str representing last 3 months to next 3 months

const getDateStr = () => {
  const dateToday = new Date();
  const lastThreeMonth = new Date();
  const nextThreeMonth = new Date();
  let searchDateStr = "";
  lastThreeMonth.setMonth(dateToday.getMonth() - 3);
  nextThreeMonth.setMonth(dateToday.getMonth() + 3);
  searchDateStr = `${lastThreeMonth.toISOString().split("T")[0]},${
    nextThreeMonth.toISOString().split("T")[0]
  }`;
  return searchDateStr;
};

export default getDateStr;
