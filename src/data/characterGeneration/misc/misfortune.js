export const rollMisfortune = () => {
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
};