export const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export function getRandomItemFromArray(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

export function rollStat() {
	const rolls = [];
	for (let i = 0; i < 4; i++) {
		rolls.push(Math.floor(Math.random() * 6) + 1);
	}
	rolls.sort((a, b) => a - b);
	return rolls[1] + rolls[2] + rolls[3];
}

export function generateAge() {
	const ageRanges = [
		{ rollRange: [1, 20], ageRange: { min: 10, max: 20 } },
		{ rollRange: [21, 59], ageRange: { min: 21, max: 30 } },
		{ rollRange: [60, 69], ageRange: { min: 31, max: 40 } },
		{ rollRange: [70, 89], ageRange: { min: 41, max: 50 } },
		{ rollRange: [90, 99], ageRange: { min: 51, max: 60 } },
		{ rollRange: [100], ageRange: { min: 61, max: 100 } }
	];

	let age;
	while (!age) {
		const roll = Math.floor(Math.random() * 100) + 1;
		const ageRange = ageRanges.find(({ rollRange }) => rollRange.includes(roll));
		age = ageRange && randomInRange(ageRange.ageRange.min, ageRange.ageRange.max);
	}
	return age;
}

export function generateRandomItemFromObject(object, itemName, reasonName) {
	const keys = Object.keys(object);
	const randomKey = getRandomItemFromArray(keys);
	const reasons = object[randomKey];
	const randomReason = getRandomItemFromArray(reasons);
	return {
		[itemName]: randomKey,
		[reasonName]: randomReason
	};
}

export function generateSiblings() {
	const hasSiblings = Math.floor(Math.random() * 6) + 1 !== 6;
	const siblings = [];

	if (hasSiblings) {
		const numSiblings = Math.floor(Math.random() * 12) + 1;
		for (let i = 0; i < numSiblings; i++) {
			const age = Math.floor(Math.random() * 12) + 1;
			const gender = age % 2 ? 'brother' : 'sister';
			const birthOrder = age <= 6 ? 'younger' : 'older';
			const fate = rollSiblingFate();
			siblings.push({ birthOrder, gender, fate });
		}
	} else {
		siblings.push({ gender: null, birthOrder: null, fate: null });
	}

	return siblings;
}

function rollSiblingFate() {
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
			result.misfortune = rollMisfortuneTable();
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
			result.death = rollDeathTable();
			break;
	}

	return result;
}

function rollMisfortuneTable() {
	const roll = Math.floor(Math.random() * 12) + 1;
	let result;

	switch (roll) {
		case 1:
		case 2:
			result = { misfortune: 'Cult', description: 'Became involved with a religious cult' };
			break;
		case 3:
		case 4:
			result = { misfortune: 'Addiction', description: 'Be it drugs, alcohol or gambling' };
			break;
		case 5:
		case 6:
			result = {
				misfortune: 'Crippled',
				description:
					'Accident, random encounter or worse causing a partial or complete incapacitation'
			};
			break;
		case 7:
			result = { misfortune: 'Cursed', description: 'Lycanthropy, vampirism or other such' };
			break;
		case 8:
			result = {
				misfortune: 'Taken',
				description: 'Be it by roaming barbarians, organized crime or slavers'
			};
			break;
		case 9:
			result = {
				misfortune: 'Indentured Servant',
				description:
					'Bad deals or bad luck left a large debt to be paid off by labor, or outright slavery'
			};
			break;
		case 10:
			result = {
				misfortune: 'Bankruptcy',
				description: 'Responsible, directly or indirectly, for the loss of all gold and lands'
			};
			break;
		case 11:
			result = {
				misfortune: 'Crazy',
				description: 'Some lamentable situation caused complete mental breakdown'
			};
			break;
		case 12:
			result = { misfortune: 'Prison', description: 'Situations led to long term incarceration' };
			break;
	}

	return result;
}

function rollDeathTable() {
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
		case 6:
		case 7:
			result = {
				death: 'Accident',
				description: 'Any number of random events, from a mule kicking at the wrong time to a fire'
			};
		case 8:
		case 9:
			result = {
				death: 'Murdered',
				description: 'From the random pick pocket to a planned assasination. Roll 1d12 - on a 10+, you know who did it'
			};
		case 10:
		case 11:
			result = {
				death: 'Unknown',
				description: 'Found dead under mysterious circumstances'
			};
		case 12:
			result = {
				death: 'Murdered by You',
				description: 'You did the killing '
			};
	}

	return result;
}
