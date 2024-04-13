import { ResponsivePieCanvas } from "@nivo/pie";
import React, { useContext } from "react";
import { AppContext } from "../context/Context";

const DonutChart = () => {
	const { type, data, setData } = useContext(AppContext);

	const handleClick = (slice) => {
		console.log("Slice clicked", slice);
		const clickedId = slice.id;
		const filteredChart = data.filter(
			(dinosaur) => dinosaur.typeOfDinosaur === clickedId
		);
		console.log(filteredChart);
		setData(filteredChart);
	};

	return (
		<>
			<div className="headerText">
				<h6 className="display-12 text-uppercase w-50 mx-1 text-center py-1">
					dinosaur types
				</h6>
			</div>
			<ResponsivePieCanvas
				width={450}
				height={500}
				data={type}
				margin={{ top: 20, right: 250, bottom: 275, left: 50 }}
				innerRadius={0.5}
				padAngle={0.7}
				cornerRadius={3}
				onClick={handleClick}
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
				defs={[
					{
						id: "dots",
						type: "patternDots",
						background: "inherit",
						color: "rgba(255, 255, 255, 0.3)",
						size: 4,
						padding: 1,
						stagger: true,
					},
					{
						id: "lines",
						type: "patternLines",
						background: "inherit",
						color: "rgba(255, 255, 255, 0.3)",
						rotation: -45,
						lineWidth: 6,
						spacing: 10,
					},
				]}
				legends={[
					{
						anchor: "right",
						direction: "column",
						justify: false,
						translateX: 100,
						translateY: 0,
						itemsSpacing: 2,
						itemWidth: 60,
						itemHeight: 14,
						itemTextColor: "#999",
						itemDirection: "left-to-right",
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
