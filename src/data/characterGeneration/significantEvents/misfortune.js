import { getRandomItemFromArray } from "../../../helpers/random";

export const rollMisfortune = () => {
	return getRandomItemFromArray(misfortunes);
};

export const misfortunes = [
	"Entangled in the web of a manipulative religious cult",
	"Struggling with a gripping addiction to drugs, alcohol, or gambling",
	"Victim of a harrowing encounter or accident that resulted in partial or complete incapacitation",
	"Tormented by a dreadful curse, such as lycanthropy or vampirism",
	"Captured by ruthless barbarians, menacing crime syndicates, or merciless slavers",
	"Plagued by terrible decisions or misfortune, leaving a massive debt to be repaid through labor or slavery",
	"Bears the heavy burden of responsibility for the loss of all personal wealth and property",
	"A traumatic experience led to a devastating mental breakdown",
	"Fell afoul of the law, resulting in lengthy imprisonment",
	"Suffered a disfiguring injury, leaving a lasting physical or emotional scar",
	"Endured severe persecution or discrimination due to their beliefs or identity",
	"Haunted by a traumatic past event that they can't seem to escape",
	"Plagued by a relentless stalker or obsessed admirer",
	"Victim of identity theft, resulting in severe personal and financial consequences",
	"Betrayed by a close friend or loved one, leaving deep emotional wounds",
	"Stripped of their social status or exiled from their community",
	"Lost their home or possessions in a devastating fire, flood, or other calamity",
	"Suffered a life-altering injury or illness that changed their path forever",
  ];
