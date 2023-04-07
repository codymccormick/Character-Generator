import { getRandomItemFromArray } from "../../../helpers/random";

export const generateLoveEvents = () => {
	return getRandomItemFromArray(loveEvents);
};

const getRelationshipOutcome = () => {
	const relationshipRoll = Math.floor(Math.random() * 12) + 1;

	if (relationshipRoll >= 1 && relationshipRoll <= 5) {
		return "A serious relationship ends";
	} else if (relationshipRoll >= 6 && relationshipRoll <= 11) {
		return "A serious relationship continues through the year";
	} else {
		return "A serious relationship leads to marriage";
	}
};

const getUnrequitedOutcome = () => {
	const unrequitedRoll = Math.floor(Math.random() * 12) + 1;
	const unrequitedDirection = unrequitedRoll % 2 === 0 ? "they fell for you" : "you fell for them";
	const unrequitedIntensity =
		unrequitedRoll <= 2
			? "accepted as just friends"
			: unrequitedRoll >= 11
			? "creeped out by stalking"
			: "";

	return `One of you fell in love, the other... didn't. ${unrequitedDirection}. ${unrequitedIntensity}`;
};

const getHeartbreakOutcome = () => {
	const heartbreakRoll = Math.floor(Math.random() * 12) + 1;
	const heartbreakCheater = heartbreakRoll <= 6 ? "you cheated on them" : "they cheated on you";
	const heartbreakDiscovery =
		heartbreakRoll % 2 === 0
			? "the cheated party finds out"
			: "the cheating party dumps the other without them ever knowing why";

	return `While dating someone seriously, ${heartbreakCheater}. ${heartbreakDiscovery}`;
};

const getPregnancyOutcome = () => {
	const pregnancyRoll = Math.floor(Math.random() * 12) + 1;

	if (pregnancyRoll >= 1 && pregnancyRoll <= 3) {
		return "Pregnancy. You leave";
	} else if (pregnancyRoll >= 4 && pregnancyRoll <= 6) {
		return "Pregnancy. He/she leaves you";
	} else if (pregnancyRoll >= 7 && pregnancyRoll <= 8) {
		return "Pregnancy. You marry";
	} else {
		return "Pregnancy. Crossbow Point Wedding";
	}
};

const loveEvents = [
	{
		title: "A good thing",
		type: "Relationship",
		description: getRelationshipOutcome(),
	},
	{
		title: "Unrequited",
		type: "Relationship",
		description: getUnrequitedOutcome(),
	},
	{
		title: "Heartbreak",
		type: "Relationship",
		description: getHeartbreakOutcome(),
	},
	{
		title: "Tragic",
		type: "Relationship",
		description: "Someone whom you'd been dating for over a year dies",
	},
	{
		title: "Pregnancy",
		type: "Relationship",
		description: getPregnancyOutcome(),
	},
];
