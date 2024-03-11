import { AppContext } from "./context/Context.jsx";
import {useContext } from "react"

const DataComponent = () => {
	const { data } = useContext(AppContext);

	const dinosaurs = data;

	const diet = {
		carnivorous: 0,
		herbivorous: 0,
		omnivorous: 0,
		unknown: 0,
	};

	dinosaurs.forEach((dinosaur) => {
		if (dinosaur.diet === "herbivorous") {
			diet.herbivorous += 1;
		}
		if (dinosaur.diet === "carnivorous") {
			diet.carnivorous += 1;
		}
		if (dinosaur.diet === "omnivorous") {
			diet.omnivorous += 1;
		}
		if (
			!dinosaur.diet === "omnivorous" ||
			!dinosaur.diet === "carnivorous" ||
			!dinosaur.diet === "herbivorous"
		) {
			diet.unknown += 1;
		}
	});

	const type = {
		prosauropod: 0,
		large_theropod: 0,
		ceratopsian: 0,
		sauropod: 0,
		small_theropod: 0,
		armoured_dinosaur: 0,
		large_ornithopod: 0,
		small_ornithopod: 0,
		early_dinosaur: 0,
	};

	dinosaurs.forEach((dinosaur) => {
		if (dinosaur.typeOfDinosaur === "prosauropod") {
			type.prosauropod += 1;
		}
		if (dinosaur.typeOfDinosaur === "large theropod") {
			type.large_theropod += 1;
		}
		if (dinosaur.typeOfDinosaur === "ceratopsian") {
			type.ceratopsian += 1;
		}
		if (dinosaur.typeOfDinosaur === "sauropod") {
			type.sauropod += 1;
		}
		if (dinosaur.typeOfDinosaur === "small theropod") {
			type.small_theropod += 1;
		}
		if (dinosaur.typeOfDinosaur === "armoured dinosaur") {
			type.armoured_dinosaur += 1;
		}
		if (dinosaur.typeOfDinosaur === "large ornithopod") {
			type.large_ornithopod += 1;
		}
		if (dinosaur.typeOfDinosaur === "small ornithopod") {
			type.small_ornithopod += 1;
		}
		if (dinosaur.typeOfDinosaur === "early dinosaur") {
			type.early_dinosaur += 1;
		}
	});

	let data2 = [
		{
			id: "prosauropod",
			label: "prosauropod",
			value: type.prosauropod,
			color: "hsl(87, 70%, 50%)",
		},
		{
			id: "large theropod",
			label: "large theropod",
			value: type.large_theropod,
			color: "hsl(148, 70%, 50%)",
		},
		{
			id: "ceratopsian",
			label: "ceratopsian",
			value: type.ceratopsian,
			color: "hsl(254, 70%, 50%)",
		},
		{ id: "sauropod", label: "sauropod", value: type.sauropod, color: "" },
		{
			id: "small theropod",
			label: "small theropod",
			value: type.small_theropod,
			color: "hsl(246, 70%, 50%)",
		},
		{
			id: "armoured dinosaur",
			label: "armoured dinosaur",
			value: type.armoured_dinosaur,
			color: "hsl(93, 70%, 50%)",
		},
		{
			id: "large ornithopod",
			label: "large ornithopod",
			value: type.large_ornithopod,
			color: "hsl(208, 70%, 50%)",
		},
		{
			id: "small ornithopod",
			label: "small ornithopod",
			value: type.small_ornithopod,
			color: "hsl(173, 70%, 50%)",
		},
		{
			id: "early dinosaur",
			label: "early dinosaur",
			value: type.early_dinosaur,
			color: "hsl(151, 70%, 50%)",
		},
	];

	const data1 = [
		{
			id: "carnivorous",
			label: "carnivorous",
			value: Math.floor((diet.carnivorous / dinosaurs.length) * 100),
			color: "hsl(218, 70%, 50%)",
		},
		{
			id: "herbivorous",
			label: "herbivorous",
			value: Math.floor((diet.herbivorous / dinosaurs.length) * 100),
			color: "hsl(189, 70%, 50%)",
		},
		{
			id: "omnivorous",
			label: "omnivorous",
			value: Math.floor((diet.omnivorous / dinosaurs.length) * 100),
			color: "hsl(52, 70%, 50%)",
		},
		{
			id: "unknown",
			label: "unknown",
			value: (diet.unknown / dinosaurs.length) * 100,
			color: "hsl(52, 70%, 50%)",
		},
	];

	return { data1, data2 };
};

export default DataComponent;
