import { getRandomItemFromArray } from "../../../helpers/random";

// Generates a random alignment from the alignments array
export const generateAlignment = () => {
	return getRandomItemFromArray(alignments);
};

// List of available alignments
export const alignments = [
	{
		title: "Chaotic Evil",
		type: "Alignment",
		description:
			"Characters who prioritize their own freedom and act on their own whims, often disregarding the well-being of others and causing harm.",
	},
	{
		title: "Lawful Evil",
		type: "Alignment",
		description:
			"Characters who follow a strict code or hierarchy, using their adherence to order as a means to further their own selfish and malevolent goals.",
	},
	{
		title: "Neutral Evil",
		type: "Alignment",
		description:
			"Characters who are primarily concerned with their own interests and are willing to harm others if it benefits them, without any regard for law or chaos.",
	},
	{
		title: "Neutral",
		type: "Alignment",
		description:
			"Characters who don't actively pursue either good or evil, and may not have strong feelings about law or chaos. They often act based on the situation at hand.",
	},
	{
		title: "Neutral Good",
		type: "Alignment",
		description:
			"Characters who prioritize the well-being of others and act with kindness, but without a strict adherence to a specific code or set of rules.",
	},
	{
		title: "Lawful Good",
		type: "Alignment",
		description:
			"Characters who believe in the importance of order and rules, using them as a means to protect and help others, often putting the needs of the many above their own.",
	},
	{
		title: "Chaotic Good",
		type: "Alignment",
		description:
			"Characters who value personal freedom and individuality, often acting on their own moral compass to do what they believe is right, even if it goes against established order.",
	},
];
