import { Pie } from "@nivo/pie";
import React, { useContext } from "react";
import { AppContext } from "../context/Context";

const PieChart = () => {
  const { diet, data, setData, setMatchedItems } = useContext(AppContext);

  //click method
  const handleClick = (slice) => {
    const clickedId = slice.id;
    const filteredChart = data.filter(
      (dinosaur) => dinosaur.diet === clickedId
    );
    setData(filteredChart);
    setMatchedItems(filteredChart);
  };

  return (
    <>
      <div className="headerText">
        <h6 className="display-12 text-uppercase w-50 mx-1 text-center py-1">
          dinosaur diets
        </h6>
      </div>
      <Pie
        data={diet}
        width={450}
        height={350}
        margin={{ top: 25, right: 250, bottom: 150, left: 55 }}
        valueFormat={(value) => `${value}%`}
        padAngle={0.7}
        onClick={handleClick}
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
        enableArcLinkLabels={false}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemWidth: 100,
            itemHeight: 20,
            itemsSpacing: 0,
            symbolSize: 10,
            itemDirection: "left-to-right",
          },
        ]}
      />
    </>
  );
};

export default PieChart;
