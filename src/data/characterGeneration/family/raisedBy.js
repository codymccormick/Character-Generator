import { generateRandomItemFromObject } from "../../../helpers/random";
import { generateParents } from "./caretaker";

// Generate the character's upbringing based on their parents
export const generateRaisedBy = (parents) => {
	// If both parents are dead, set raisedBy to "Close Family"
	if (isParentDead(parents.father) && isParentDead(parents.mother)) {
		return {
			raisedBy: "Close Family",
			raisedByReason: "Both parents are dead",
		};
	}

	// Generate raisedBy normally
	const raisedByResult = generateRandomItemFromObject(raisedBy, "raisedBy", "raisedByReason");

	// If the character was not raised by their original parents, generate new caretakers
	if (raisedByResult.raisedBy !== "Original Parents") {
		raisedByResult.caretakers = generateParents();
	}

	// Return the result
	return raisedByResult;
};

// Function to check if a parent is dead
export const isParentDead = (parent) => {
	return parent.event && parent.event.status === "Death";
};

// Object that defines different ways a character can be raised
export const raisedBy = {
	"Original Parents": ["Raised by the ones that gave birth to you"],
	"Close Family": [
		"You were raised by your aunt and uncle",
		"You were raised by your grandparents",
	],
	Adopted: ["Never knew original parents. Raised by a couple not related to you."],
	Institution: ["Raised at an institution, be it an orphanage, monastery or other."],
	Master: ["Sold or given or kidnapped at an early age and raised as property."],
	"On Your Own": ["Have had to rely on yourself for as long as you can remember. "],
};
