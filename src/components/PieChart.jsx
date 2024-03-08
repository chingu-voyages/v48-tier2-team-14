import { Pie } from "@nivo/pie";
import React from "react";

const PieChart = ({ data }) => {
  return (
    <>
      <h1>Pie Chart</h1>
      <Pie
        data={data}
        width={500}
        height={500}
        margin={{ top: 0, right: 200, bottom: 40, left: 80 }}
        valueFormat={(value) => `${value}%`}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "paired" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.6]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#333333"
      />
    </>
  );
};

export default PieChart;
