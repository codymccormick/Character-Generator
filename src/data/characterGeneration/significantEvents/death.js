import { getRandomItemFromArray } from "../../../helpers/random";

export const rollDeath = () => {
	return getRandomItemFromArray(deaths);
};

export const deaths = [
	{
		title: "Raid or Siege",
		type: "Death",
		description: "An event ranging from a raid to a siege caused death",
	},
	{
		title: "Illness",
		type: "Death",
		description: "Anything from a simple cold to a Pox caused death",
	},
	{
		title: "Random Event",
		type: "Death",
		description: "Any number of random events, from a mule kicking at the wrong time to a fire",
	},
	{
		title: "Known Murderer",
		type: "Death",
		description: "Murdered and You know who did it",
	},
	{
		title: "Unknown Murderer",
		type: "Death",
		description: "Murdered and you do not know who did it",
	},
	{
		title: "Mysterious Circumstances",
		type: "Death",
		description: "Found dead under mysterious circumstances",
	},
	{
		title: "Self-committed Murder",
		type: "Death",
		description: "Murdered by You",
	},
];
