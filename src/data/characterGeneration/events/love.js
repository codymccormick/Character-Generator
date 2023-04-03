export const generateLoveEvents = () => {
	// Generate a random main roll value between 1 and 12
	const mainRoll = Math.floor(Math.random() * 12) + 1;
	let loveEvents;

	// Determine the love event based on the main roll value using a switch statement
	switch (mainRoll) {
		case 1:
		case 2:
		case 3:
		case 4:
			const relationshipRoll = Math.floor(Math.random() * 12) + 1;
			let relationshipOutcome;

			// Determine the relationship outcome based on the relationship roll value
			if (relationshipRoll >= 1 && relationshipRoll <= 5) {
				relationshipOutcome = "ends";
			} else if (relationshipRoll >= 6 && relationshipRoll <= 11) {
				relationshipOutcome = "continues through the year";
			} else {
				relationshipOutcome = "leads to marriage";
			}

			// Create a relationship love event object
			loveEvents = {
				title: "Relationship",
				type: "A Good Thing",
				description: `A serious relationship ${relationshipOutcome}`,
			};
			break;
		case 5:
		case 6:
			const unrequitedRoll = Math.floor(Math.random() * 12) + 1;
			const unrequitedDirection =
				unrequitedRoll % 2 === 0 ? "they fell for you" : "you fell for them";
			const unrequitedIntensity =
				unrequitedRoll <= 2
					? "accepted as just friends"
					: unrequitedRoll >= 11
					? "creeped out by stalking"
					: "";

			// Create an unrequited love event object
			loveEvents = {
				title: "Relationship",
				type: "Unrequited",
				description: `One of you fell in love, the other... didn't. ${unrequitedDirection}. ${unrequitedIntensity}`,
			};
			break;
		case 7:
		case 8:
		case 9:
			const heartbreakRoll = Math.floor(Math.random() * 12) + 1;
			const heartbreakCheater = heartbreakRoll <= 6 ? "you cheated on them" : "they cheated on you";
			const heartbreakDiscovery =
				heartbreakRoll % 2 === 0
					? "the cheated party finds out"
					: "the cheating party dumps the other without them ever knowing why";

			// Create a heartbreak love event object
			loveEvents = {
				title: "Relationship",
				type: "Heartbreak",
				description: `While dating someone seriously, ${heartbreakCheater}. ${heartbreakDiscovery}`,
			};
			break;
		case 10:
		case 11:
			// Create a tragic love event object
			loveEvents = {
				title: "Relationship",
				type: "Tragic",
				description: "Someone whom you'd been dating for over a year dies",
			};
			break;
		case 12:
			const pregnancyRoll = Math.floor(Math.random() * 12) + 1;
			let pregnancyOutcome;

			// Determine the pregnancy outcome based on the pregnancy roll value
			if (pregnancyRoll >= 1 && pregnancyRoll <= 3) {
				pregnancyOutcome = "You leave";
			} else if (pregnancyRoll >= 4 && pregnancyRoll <= 6) {
				pregnancyOutcome = "He/she leaves you";
			} else if (pregnancyRoll >= 7 && pregnancyRoll <= 8) {
				pregnancyOutcome = "You marry";
			} else {
				pregnancyOutcome = "Crossbow Point Wedding";
			}

			// Create an even more tragic love event object related to pregnancy
			loveEvents = {
				title: "Relationship",
				type: "Even More Tragic",
				description: `Pregnancy. ${pregnancyOutcome}`,
			};
			break;
		default:
			// Create an unknown love event object for cases not covered by the switch statement
			loveEvents = {
				title: "Relationship",
				type: "Unknown",
				description: "An unknown outcome occurred",
			};
	}

	// Return the generated love event object
	return loveEvents;
};
