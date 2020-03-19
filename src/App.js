import React, { useState, useEffect } from "react";
import WorldMap from "./map/WorldMap";
import "./App.css";
import { countryFormatter } from "./utils/helpers";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://corona.lmao.ninja/countries", {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => response.json())
      .then(res => {
        const formatedData = [];
        res.map(item => {
          formatedData.push(countryFormatter(item));
        });
        return formatedData;
      })
      .then(formatedData => {
        const data = formatedData.map(item => {
          return {
            key: item.country,
            value: {
              cases: item.cases,
              todayCases: item.todayCases,
              deaths: item.deaths,
              todayDeaths: item.todayDeaths,
              recovered: item.recovered,
              critical: item.critical
            }
          };
        });
        return data;
      })
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <WorldMap data={data} />
    </div>
  );
};

export default App;
