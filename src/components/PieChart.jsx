import { Pie } from "@nivo/pie";
import React, { useContext } from "react";
import { AppContext } from "../context/Context";

const PieChart = () => {
	const { diet } = useContext(AppContext);
	return (
		<>
			<h4 className="display-12 text-center">
				Distribution of General Dinosaur Diets
			</h4>
			<Pie
				data={diet}
				width={500}
				height={500}
				margin={{ top: 0, right: 200, bottom: 200, left: 100 }}
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
