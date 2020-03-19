export const countryFormatter = obj => {
  switch (obj.country) {
    case "USA":
      return {
        country: "United States of America",
        cases: obj.cases,
        todayCases: obj.todayCases,
        deaths: obj.deaths,
        todayDeaths: obj.todayDeaths,
        recovered: obj.recovered,
        critical: obj.critical
      };
    default:
      return obj;
  }
};
