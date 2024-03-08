import dinasours from "../assets/dinosaurs.json";

const diet = {
  carnivorous: 0,
  herbivorous: 0,
  omnivorous: 0,
  unknown: 0,
};

dinasours.forEach((dinasour) => {
  if (dinasour.diet === "herbivorous") {
    diet.herbivorous += 1;
  }
  if (dinasour.diet === "carnivorous") {
    diet.carnivorous += 1;
  }
  if (dinasour.diet === "omnivorous") {
    diet.omnivorous += 1;
  }
  if (
    !dinasour.diet === "omnivorous" ||
    !dinasour.diet === "carnivorous" ||
    !dinasour.diet === "herbivorous"
  ) {
    diet.unknown += 1;
  }
});

const data = [
  {
    id: "carnivorous",
    label: "carnivorous",
    value: Math.floor((diet.carnivorous / dinasours.length) * 100),
    color: "hsl(218, 70%, 50%)",
  },
  {
    id: "herbivorous",
    label: "herbivorous",
    value: Math.floor((diet.herbivorous / dinasours.length) * 100),
    color: "hsl(189, 70%, 50%)",
  },
  {
    id: "omnivorous",
    label: "omnivorous",
    value: Math.floor((diet.omnivorous / dinasours.length) * 100),
    color: "hsl(52, 70%, 50%)",
  },
  {
    id: "unknown",
    label: "unknown",
    value: (diet.unknown / dinasours.length) * 100,
    color: "hsl(52, 70%, 50%)",
  },
];

export default data;
