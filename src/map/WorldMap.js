import React, { useEffect } from "react";
import Highcharts from "highcharts/highmaps";
import customWorld from "./customWorldMap";
import theme from "./theme";

Highcharts.setOptions(theme);

const WorldMap = ({ data }) => {
  useEffect(() => {
    Highcharts.mapChart("world_map", {
      chart: {
        height: "48.8%",
        map: "custom/world"
      },
      title: {
        text: "COVID-19"
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: "bottom"
        }
      },
      tooltip: {
        formatter: function() {
          return (
            "Country: " +
            this.point.name +
            "<br>" +
            "Cases: " +
            this.point.value.cases +
            "<br>" +
            "Today cases: " +
            this.point.value.todayCases +
            "<br>" +
            "Deaths: " +
            this.point.value.deaths +
            "<br>" +
            "Today deaths: " +
            this.point.value.todayDeaths +
            "<br>" +
            "Recovered " +
            this.point.value.recovered +
            "<br>" +
            "Critical: " +
            this.point.value.critical
          );
        }
      },
      series: [
        {
          data: data,
          mapData: Highcharts.maps["custom/world"],
          joinBy: ["name", "key"],
          name: "Cases",
          states: {
            hover: {
              color: "#a4edba"
            }
          }
        }
      ]
    });
  }, [data]);
  return <div className="map_bg" id="world_map" />;
};

export default WorldMap;
