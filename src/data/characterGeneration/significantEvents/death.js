export const rollDeath = () => {
	const roll = Math.floor(Math.random() * 12) + 1;
	const outcomes = [
	  { death: 'Warfare', description: 'An event ranging from a raid to a siege caused death' },
	  { death: 'Disease', description: 'Anything from a simple cold to a Pox caused death' },
	  { death: 'Accident', description: 'Any number of random events, from a mule kicking at the wrong time to a fire' },
	  { death: 'Murdered', description: `${roll >= 10 ? 'You know who did it' : 'You do not know who did it'}` },
	  { death: 'Unknown', description: 'Found dead under mysterious circumstances' },
	  { death: 'Murdered by You', description: 'You did the killing' },
	];
  
	const outcomeIndex = roll <= 2 ? 0
	  : roll <= 5 ? 1
	  : roll <= 7 ? 2
	  : roll <= 9 ? 3
	  : roll === 10 ? 4
	  : 5;
  
	return outcomes[outcomeIndex];
  };