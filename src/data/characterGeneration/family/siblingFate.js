import { rollMisfortune } from "../significantEvents/misfortune";
import { rollDeath } from "../significantEvents/death";

// The rollFate function determines fate based on a random roll
export const rollFate = () => {
	const roll = Math.floor(Math.random() * 12) + 1;
	let result;

	switch (roll) {
		case 1:
		case 2:
			result = {
				fate: 'Lost Touch',
				description: 'It is unknown to you what became of this sibling.'
			};
			break;
		case 3:
		case 4:
			result = {
				fate: 'Lives with Parents',
				description: 'This sibling is home with your parents.'
			};
			break;
		case 5:
		case 6:
			result = { fate: 'Misfortune', description: 'This sibling has had bad luck in life.' };
			result.misfortune = rollMisfortune();
			break;
		case 7:
		case 8:
			result = {
				fate: 'Keeps in Touch',
				description: 'This sibling is enjoying his or her own life, apart, but keeps in touch.'
			};
			break;
		case 9:
		case 10:
			result = {
				fate: 'They Hate You',
				description: 'This sibling despises you for some past transgression.'
			};
			break;
		case 11:
		case 12:
			result = { fate: 'Dead', description: 'This sibling has died.' };
			result.death = rollDeath();
			break;
	}

	return result;
};