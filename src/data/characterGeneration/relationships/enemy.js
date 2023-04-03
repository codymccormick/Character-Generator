import { BaseCharacter } from "../BaseCharacter";
import { generateHeft } from "../misc/heft";
import { getRandomItemFromArray } from "../../../helpers/random";

// Define the Enemy class that extends the BaseCharacter class
export class Enemy extends BaseCharacter {
	constructor() {
		super();

		// Initialize enemy properties
		this.heft = generateHeft();
		this.animosity = generateAnimosity();
		this.whoHatesWhom = whoHatesWhom();
		this.intensity = generateIntensity();
	}
}

// Function to generate a new Enemy instance with specific details
export const generateEnemy = () => {
	let enemy = new Enemy();
	let randomEnemy = getRandomItemFromArray(enemies);
	enemy.title = randomEnemy.title;
	enemy.description = randomEnemy.description;
	enemy.type = randomEnemy.type;

	return enemy;
};

// Array of potential enemies
export const enemies = [
	{
		title: "Ex-Friend",
		type: "Enemy",
		description: "You used to have lunch together and the like, but things went sour",
	},
	{
		title: "Ex-Lover",
		type: "Enemy",
		description: "All that love turned to hate",
	},
	{
		title: "Relative",
		type: "Enemy",
		description: "Family bonds cut by strife",
	},
	{
		title: "Childhood Enemy",
		type: "Enemy",
		description: "An old face you hoped you would never see again",
	},
	{
		title: "Person You Worked For",
		type: "Enemy",
		description: "One overtime too many",
	},
	{
		title: "Person That Worked for You",
		type: "Enemy",
		description: "You should have paid for that overtime",
	},
	{
		title: "Ex-Partner",
		type: "Enemy",
		description: "A working or adventuring relationship turns to arguments",
	},
	{
		title: "Gang or Tribe",
		type: "Enemy",
		description: "You managed to step on the really wrong foot",
	},
	{
		title: "Authorities",
		type: "Enemy",
		description: "There are those amongst the law that dislike you",
	},
	{
		title: "Dark Powers",
		type: "Enemy",
		description: "Somehow you've come to the attention of dark forces, and they know your name",
	},
	{
		title: "Creature with Animal Intelligence",
		type: "Enemy",
		description: "You kicked that mule one time too many, and now it hates you to the bone",
	},
	{
		title: "Intelligent Creature",
		type: "Enemy",
		description: "You have some creature like a beholder or dragon angry with you",
	},
];

// Function to generate animosity
export const generateAnimosity = () => {
	const animosityTable = [
		{
			title: "Humiliation",
			type: "Animosity",
			description: "Caused the loss of face or status publicly",
		},
		{
			title: "Rift",
			type: "Animosity",
			description: "Caused the loss of a friend or lover",
		},
		{
			title: "Busted",
			type: "Animosity",
			description: "Truly or falsely brought criminal charges against the person",
		},
		{
			title: "Betrayed",
			type: "Animosity",
			description: "Left the other out to dry or outright backstabbing",
		},
		{
			title: "Cold Shoulder",
			type: "Animosity",
			description: "Turned down for a job or turned down romantic advances",
		},
		{
			title: "Rival",
			type: "Animosity",
			description: "Had been competing for a job or romantically and won over the other",
		},
		{
			title: "Foiled",
			type: "Animosity",
			description: "Caused the failure of some plot, quest or undertaking",
		},
		{
			title: "Sore loser",
			type: "Animosity",
			description: "Defeated this person in combat or game/gamble",
		},
		{
			title: "Bigotry",
			type: "Animosity",
			description: "From race to religious beliefs, the hatred stems from stereotitle",
		},
		{
			title: "Murder",
			type: "Animosity",
			description: "Convinced this person kill a friend/relative/lover",
		},
		{
			title: "Jealousy",
			type: "Animosity",
			description: "This person's looks/life/luck/wealth bother you",
		},
		{
			title: "Took Advantage",
			type: "Animosity",
			description: "Took economic advantage by scam, or physical advantage through force",
		},
	];
	const animosityRoll = Math.floor(Math.random() * animosityTable.length);

	return animosityTable[animosityRoll];
};

// Function to determine who hates whom
export const whoHatesWhom = () => {
	const hatesTable = [
		{
			title: "You towards the other person",
			type: "Hates",
			description: "The animosity is from you for them",
		},
		{
			title: "The other person towards you",
			type: "Hates",
			description: "The other person has the strong feelings, not you",
		},
		{
			title: "Mutual",
			type: "Hates",
			description: "You both feel strongly about each other",
		},
	];
	const hatesRoll = Math.floor(Math.random() * hatesTable.length);

	return hatesTable[hatesRoll];
};

// Function to determine intensity of hate
export const generateIntensity = () => {
	const intensityTable = [
		{
			title: "Annoyed",
			type: "Intensity",
			description: "It rubs you wrong to be around this person, but you can control it",
		},
		{
			title: "Angry",
			type: "Intensity",
			description: "Proximity to this individual leads to arguments, shouting, yelling",
		},
		{
			title: "Violent",
			type: "Intensity",
			description:
				"A fight will erupt when you are around this person, if you have to start it yourself",
		},
		{
			title: "Hot Murder",
			type: "Intensity",
			description:
				"All bets are off and so are the gloves - if the two of you are in the same room, Thunderdome rules apply",
		},
		{
			title: "Cold Murder",
			type: "Intensity",
			description:
				"If you catch sight of this person, your head starts drawing up schemes for death",
		},
		{
			title: "Ruination",
			type: "Intensity",
			description:
				"Whatever you have to do to bring this person down, her personal life, her job, family, etc",
		},
	];
	const intensityRoll = Math.floor(Math.random() * intensityTable.length);

	return intensityTable[intensityRoll];
};
