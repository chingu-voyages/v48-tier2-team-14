import { ResponsivePieCanvas } from "@nivo/pie";
import React, { useContext } from "react";
import { AppContext } from "../context/Context";

const DonutChart = () => {
  const { type } = useContext(AppContext);
  return (
    <>
      <h1>Type of Dinasour</h1>
      <ResponsivePieCanvas
        data={type}
        width={500}
        height={500}
        margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "paired" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.6]],
        }}
        enableArcLinkLabels={false}
        arcLabelsSkipAngle={5}
        arcLabelsTextColor="#333333"
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 140,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 60,
            itemHeight: 14,
            itemTextColor: "#999",
            itemDirection: "right-to-left",
            itemOpacity: 1,
            symbolSize: 14,
            symbolShape: "circle",
          },
        ]}
      />
    </>
  );
};

export default DonutChart;
