import { generateRandomItemFromObject } from '../../../helpers/random';
import { isParentDead } from './caretaker';

export const generateRaisedBy = (parents) => {
	// If both parents are dead, set raisedBy to "Close Family"
	if (isParentDead(parents.father) && isParentDead(parents.mother)) {
		return {
			raisedBy: "Close Family",
			raisedByReason: "Both parents are dead",
		};
	}

	// Otherwise, generate raisedBy normally
	return generateRandomItemFromObject(raisedBy, "raisedBy", "raisedByReason");
};

export const raisedBy = {
	'Original Parents': [
		'Raised by the ones that gave birth to you'
	],
	'Close Family': [
		'You were raised by your aunt and uncle',
		'You were raised by your grandparents'
	],
	Adopted: [
		'Never knew original parents. Raised by a couple not related to you.'
	],
	Institution: [
		'Raised at an institution, be it an orphanage, monastery or other.' //Skip to Significant Times in Your Life
	],
	Master: [
		'Sold or given or kidnapped at an early age and raised as property.' //Skip to Significant Times in Your Life
	],
	'On Your Own': [
		'Have had to rely on yourself for as long as you can remember. ' //Skip to Significant Times in Your Life
	]
};
