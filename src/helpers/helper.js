import { randomInRange } from './random';

// Calculate ability score modifier
export const calculateModifier = (score) => {
	return Math.floor((score - 10) / 2);
};

// Calculate proficiency bonus
export const calculateProficiencyBonus = (level) => {
	return Math.ceil(level / 4) + 1;
};

// Roll a stat (ability score) by rolling 4d6 and taking the sum of the highest 3 rolls
export const rollStat = () => {
	const rolls = Array.from({ length: 4 }, () => randomInRange(1, 6));
	rolls.sort((a, b) => a - b);
	return rolls.slice(1).reduce((a, b) => a + b);
};


