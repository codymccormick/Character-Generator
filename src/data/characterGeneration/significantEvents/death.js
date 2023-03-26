// The rollDeath function determines death based on a random roll
export const rollDeath = () => {
	const roll = Math.floor(Math.random() * 12) + 1;
	let result;

	switch (roll) {
		case 1:
		case 2:
			result = {
				death: 'Warfare',
				description: 'An event ranging from a raid to a siege caused death'
			};
			break;
		case 3:
		case 4:
		case 5:
			result = {
				death: 'Disease ',
				description: 'Anything from a simple cold to a Pox caused death'
			};
			break;
		case 6:
		case 7:
			result = {
				death: 'Accident',
				description: 'Any number of random events, from a mule kicking at the wrong time to a fire'
			};
			break;
		case 8:
		case 9:
			result = {
				death: 'Murdered',
				description: `${roll >= 10 ? 'You know who did it' : 'You do not know who did it'}`
			};
			break;
		case 10:
		case 11:
			result = {
				death: 'Unknown',
				description: 'Found dead under mysterious circumstances'
			};
			break;
		case 12:
			result = {
				death: 'Murdered by You',
				description: 'You did the killing '
			};
			break;
	}

	return result;
};