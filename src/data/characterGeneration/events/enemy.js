import { BaseCharacter } from "../../BaseCharacter";
import { generateHeft } from "./heft";

export class Enemy extends BaseCharacter {
	constructor() {
		super();

		this.heft = generateHeft();
		this.animosity = generateAnimosity();
		this.whoHatesWhom = whoHatesWhom();
		this.intensity = generateIntensity();
	}
}

export const generateEnemy = () => {
	const enemyRoll = Math.floor(Math.random() * 12) + 1;
	let enemy = new Enemy();

	switch (enemyRoll) {
		case 1:
			enemy.type = "Enemy";
			enemy.title = "Ex-Friend";
			enemy.description = "You used to have lunch together and the like, but things went sour";
			break;
		case 2:
			enemy.type = "Enemy";
			enemy.title = "Ex-Lover";
			enemy.description = "All that love turned to hate";
			break;
		case 3:
			enemy.type = "Enemy";
			enemy.title = "Relative";
			enemy.description = "Family bonds cut by strife";
			break;
		case 4:
			enemy.type = "Enemy";
			enemy.title = "Childhood Enemy";
			enemy.description = "An old face you hoped you would never see again";
			break;
		case 5:
			enemy.type = "Enemy";
			enemy.title = "Person You Worked For";
			enemy.description = "One overtime too many";
			break;
		case 6:
			enemy.type = "Enemy";
			enemy.title = "Person That Worked for You";
			enemy.description = "You should have paid for that overtime";
			break;
		case 7:
			enemy.type = "Enemy";
			enemy.title = "Ex-Partner";
			enemy.description = "A working or adventuring relationship turns to arguments";
			break;
		case 8:
			enemy.type = "Enemy";
			enemy.title = "Gang or Tribe";
			enemy.description = "You managed to step on the really wrong foot";
			break;
		case 9:
			enemy.type = "Enemy";
			enemy.title = "Authorities";
			enemy.description = "There are those amongst the law that dislike you";
			break;
		case 10:
			enemy.type = "Enemy";
			enemy.title = "Dark Powers";
			enemy.description =
				"Somehow you've come to the attention of dark forces, and they know your name";
			break;
		case 11:
			enemy.type = "Enemy";
			enemy.title = "Creature with Animal Intelligence";
			enemy.description =
				"You kicked that mule one time too many, and now it hates you to the bone";
			break;
		case 12:
			enemy.type = "Enemy";
			enemy.title = "Intelligent Creature";
			enemy.description = "You have some creature like a beholder or dragon angry with you";
			break;
	}
	return enemy;
};

// Function to generate animosity
export const generateAnimosity = () => {
	const animosityTable = [
		{ animosity: "Humiliation", description: "Caused the loss of face or status publicly" },
		{ animosity: "Rift", description: "Caused the loss of a friend or lover" },
		{
			animosity: "Busted",
			description: "Truly or falsely brought criminal charges against the person",
		},
		{ animosity: "Betrayed", description: "Left the other out to dry or outright backstabbing" },
		{
			animosity: "Cold Shoulder",
			description: "Turned down for a job or turned down romantic advances",
		},
		{
			animosity: "Rival",
			description: "Had been competing for a job or romantically and won over the other",
		},
		{ animosity: "Foiled", description: "Caused the failure of some plot, quest or undertaking" },
		{ animosity: "Sore loser", description: "Defeated this person in combat or game/gamble" },
		{
			animosity: "Bigotry",
			description: "From race to religious beliefs, the hatred stems from stereotitle",
		},
		{ animosity: "Murdered", description: "Convinced this person killed a friend/relative/lover" },
		{ animosity: "Jealousy", description: "This person's looks/life/luck/wealth bother you" },
		{
			animosity: "Took Advantage",
			description: "Took economic advantage by scam, or physical advantage through force",
		},
	];
	const animosityRoll = Math.floor(Math.random() * animosityTable.length);

	return animosityTable[animosityRoll];
};

// Function to determine who hates whom
export const whoHatesWhom = () => {
	const hatesTable = [
		{ hates: "You towards the other person", description: "The animosity is from you for them" },
		{
			hates: "The other person towards you",
			description: "The other person has the strong feelings, not you",
		},
		{ hates: "Mutual", description: "You both feel strongly about each other" },
	];
	const hatesRoll = Math.floor(Math.random() * hatesTable.length);

	return hatesTable[hatesRoll];
};

// Function to determine intensity of hate
export const generateIntensity = () => {
	const intensityTable = [
		{
			intensity: "Annoyed",
			description: "It rubs you wrong to be around this person, but you can control it",
		},
		{
			intensity: "Angry",
			description: "Proximity to this individual leads to arguments, shouting, yelling",
		},
		{
			intensity: "Violent",
			description:
				"A fight will erupt when you are around this person, if you have to start it yourself",
		},
		{
			intensity: "Hot Murder",
			description:
				"All bets are off and so are the gloves - if the two of you are in the same room, Thunderdome rules apply",
		},
		{
			intensity: "Cold Murder",
			description:
				"If you catch sight of this person, your head starts drawing up schemes for death",
		},
		{
			intensity: "Ruination",
			description:
				"Whatever you have to do to bring this person down, her personal life, her job, family, etc",
		},
	];
	const intensityRoll = Math.floor(Math.random() * intensityTable.length);

	return intensityTable[intensityRoll];
};
