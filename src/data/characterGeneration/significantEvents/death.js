import { getRandomItemFromArray, randomInRange } from "../../../helpers/random";

export const rollDeath = () => {
	return getRandomItemFromArray(deaths);
};

export const deaths = [
	"An event ranging from a raid to a siege caused death",
	"Anything from a simple cold to a Pox caused death",
	"Any number of random events, from a mule kicking at the wrong time to a fire",
	"Murdered and You know who did it",
	"Murdered and you do not know who did it",
	"Found dead under mysterious circumstances",
	"Murdered by You",
];
