import { getRandomItemFromArray } from "../../../helpers/random";

export const generateCrime = () => {
	getRandomItemFromArray(crimes);
};

export const crimes = [
	{
		title: "Murder",
		type: "Crime",
		description: "The unlawful killing of another person without justification or valid excuse",
	},
	{
		title: "Theft",
		type: "Crime",
		description: "The act of stealing someone else's property without their consent",
	},
	{
		title: "Burglary",
		type: "Crime",
		description:
			"The illegal entry into a building with the intent to commit theft or another crime",
	},
	{
		title: "Assault",
		type: "Crime",
		description:
			"The intentional act of causing physical harm or threatening to cause harm to another person",
	},
	{
		title: "Smuggling",
		type: "Crime",
		description:
			"The illegal transportation of goods or persons across borders, avoiding taxes or other legal restrictions",
	},
	{
		title: "Kidnapping",
		type: "Crime",
		description:
			"The abduction and holding of a person against their will, often for ransom or other demands",
	},
	{
		title: "Extortion",
		type: "Crime",
		description:
			"The practice of obtaining money, property, or services through coercion, threats, or intimidation",
	},
	{
		title: "Counterfeiting",
		type: "Crime",
		description:
			"The production and distribution of fake currency, documents, or goods, often with the intent to defraud",
	},
];
