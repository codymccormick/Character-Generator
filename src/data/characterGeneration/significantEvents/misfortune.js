import { getRandomItemFromArray } from "../../../helpers/random";

export const rollMisfortune = () => {
	return getRandomItemFromArray(misfortunes);
};

export const misfortunes = [
	{
		title: "Cult Involvement",
		type: "Misfortune",
		description: "Entangled in the web of a manipulative religious cult",
	},
	{
		title: "Addiction",
		type: "Misfortune",
		description: "Struggling with a gripping addiction to drugs, alcohol, or gambling",
	},
	{
		title: "Incapacitation",
		type: "Misfortune",
		description: "Victim of a harrowing encounter or accident that resulted in partial or complete incapacitation",
	},
	{
		title: "Curse",
		type: "Misfortune",
		description: "Tormented by a dreadful curse, such as lycanthropy or vampirism",
	},
	{
		title: "Captured",
		type: "Misfortune",
		description: "Captured by ruthless barbarians, menacing crime syndicates, or merciless slavers",
	},
	{
		title: "Debt",
		type: "Misfortune",
		description: "Plagued by terrible decisions or misfortune, leaving a massive debt to be repaid through labor or slavery",
	},
	{
		title: "Loss of Wealth",
		type: "Misfortune",
		description: "Bears the heavy burden of responsibility for the loss of all personal wealth and property",
	},
	{
		title: "Mental Breakdown",
		type: "Misfortune",
		description: "A traumatic experience led to a devastating mental breakdown",
	},
	{
		title: "Imprisoned",
		type: "Misfortune",
		description: "Fell afoul of the law, resulting in lengthy imprisonment",
	},
	{
		title: "Disfiguring Injury",
		type: "Misfortune",
		description: "Suffered a disfiguring injury, leaving a lasting physical or emotional scar",
	},
	{
		title: "Persecution",
		type: "Misfortune",
		description: "Endured severe persecution or discrimination due to their beliefs or identity",
	},
	{
		title: "Haunted Past",
		type: "Misfortune",
		description: "Haunted by a traumatic past event that they can't seem to escape",
	},
	{
		title: "Stalker",
		type: "Misfortune",
		description: "Plagued by a relentless stalker or obsessed admirer",
	},
	{
		title: "Identity Theft",
		type: "Misfortune",
		description: "Victim of identity theft, resulting in severe personal and financial consequences",
	},
	{
		title: "Betrayal",
		type: "Misfortune",
		description: "Betrayed by a close friend or loved one, leaving deep emotional wounds",
	},
	{
		title: "Exile",
		type: "Misfortune",
		description: "Stripped of their social status or exiled from their community",
	},
	{
		title: "Calamity",
		type: "Misfortune",
		description: "Lost their home or possessions in a devastating fire, flood, or other calamity",
	},
	{
		title: "Life-altering Injury",
		type: "Misfortune",
		description: "Suffered a life-altering injury or illness that changed their path forever",
	},
];

