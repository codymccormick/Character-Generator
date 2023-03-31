import { getRandomItemFromArray } from "../../../helpers/random";
import { randomInRange } from "../../../helpers/random";

export const generateHeft = () => {
	return getRandomItemFromArray(heft);
};

export const heft = [
	{
		title: "Peon",
		type: "heft",
		description: "This person has no real pull, only has himself",
	},
	{
		title: "Clan",
		type: "heft",
		description:
			"Close family ties translates into an extended family all willing to lay their lives for this individual",
	},
	{
		title: "Gang",
		type: "heft",
		description: `A group of ${randomInRange(1, 12) * 5} like minded individuals`,
	},
	{
		title: "Tribe",
		type: "heft",
		description: "A large group of individuals tied by culture",
	},
	{
		title: "Minor Figure",
		type: "heft",
		description: "A local hero or minor noble that can pull on the resources of a single town",
	},
	{
		title: "Major Figure",
		type: "heft",
		description: "A famous hero or major noble that can pull resources over an entire province",
	},
	{
		title: "Military Connections",
		type: "heft",
		description: "Someone that is part of a mercenary outfit or part of the guard",
	},
	{
		title: "Black Market/Underground",
		type: "heft",
		description: "Powerful connections with the black market and the criminal world",
	},
	{
		title: "Powerful Individual",
		type: "heft",
		description: "Someone who is a power unto himself, like a mage or a powerful priest",
	},
	{
		title: "Connected to the Light",
		type: "heft",
		description: "Angelic forces or extra planar due gooders with wide ranging reach",
	},
	{
		title: "Connected to the Dark",
		type: "heft",
		description: "Demonic forces, or connections with Abyssal entities or other such nasties",
	},
	{
		title: "Royalty",
		type: "heft",
		description: "A member of the ruling family with pull anywhere within the kingdom, some beyond",
	},
];
