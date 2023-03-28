export const rollDeath = () => {
	const roll = Math.floor(Math.random() * 12) + 1;
	const outcomes = [
	  { range: [1, 2], death: 'Warfare', description: 'An event ranging from a raid to a siege caused death' },
	  { range: [3, 4, 5], death: 'Disease', description: 'Anything from a simple cold to a Pox caused death' },
	  { range: [6, 7], death: 'Accident', description: 'Any number of random events, from a mule kicking at the wrong time to a fire' },
	  { range: [8, 9], death: 'Murdered', description: `${roll >= 10 ? 'You know who did it' : 'You do not know who did it'}` },
	  { range: [10, 11], death: 'Unknown', description: 'Found dead under mysterious circumstances' },
	  { range: [12], death: 'Murdered by You', description: 'You did the killing' },
	];
  
	return outcomes.find(outcome => outcome.range.includes(roll));
  };
  