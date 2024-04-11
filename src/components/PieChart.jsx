import { Pie } from "@nivo/pie";
import React, { useContext } from "react";
import { AppContext } from "../context/Context";

const PieChart = () => {
  const { diet, data, setData, setMatchedItems } = useContext(AppContext);

  const handleClick = (slice) => {
    console.log("Slice clicked", slice);
    const clickedId = slice.id;
    const filteredChart = data.filter(
      (dinosaur) => dinosaur.diet === clickedId
    );
    console.log(filteredChart);
    setData(filteredChart);
    setMatchedItems(filteredChart);

  };

  return (
    <>
      <div className="headerText">
				<h6 className="display-12 text-uppercase w-50 mx-1 text-center py-1">
					dinosaur lists
				</h6>
			</div>
      <Pie
        data={diet}
        width={500}
        height={500}
        margin={{ top: 0, right: 200, bottom: 200, left: 100 }}
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
      />
    </>
  );
};

export default PieChart;
