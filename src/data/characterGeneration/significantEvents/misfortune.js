export const rollMisfortune = () => {
	const roll = Math.floor(Math.random() * 12) + 1;
	const outcomes = [
	  { misfortune: 'Cult', description: 'Became involved with a religious cult' },
	  { misfortune: 'Addiction', description: 'Be it drugs, alcohol or gambling' },
	  { misfortune: 'Crippled', description: 'Accident, random encounter or worse causing a partial or complete incapacitation' },
	  { misfortune: 'Cursed', description: 'Lycanthropy, vampirism or other such' },
	  { misfortune: 'Taken', description: 'Be it by roaming barbarians, organized crime or slavers' },
	  { misfortune: 'Indentured Servant', description: 'Bad deals or bad luck left a large debt to be paid off by labor, or outright slavery' },
	  { misfortune: 'Bankruptcy', description: 'Responsible, directly or indirectly, for the loss of all gold and lands' },
	  { misfortune: 'Crazy', description: 'Some lamentable situation caused complete mental breakdown' },
	  { misfortune: 'Prison', description: 'Situations led to long term incarceration' },
	];
  
	const outcomeIndex = roll <= 2 ? 0
	  : roll <= 4 ? 1
	  : roll <= 6 ? 2
	  : roll === 7 ? 3
	  : roll === 8 ? 4
	  : roll === 9 ? 5
	  : roll === 10 ? 6
	  : roll === 11 ? 7
	  : 8;
  
	return outcomes[outcomeIndex];
}