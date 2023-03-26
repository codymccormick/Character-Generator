import { generateRandomItemFromObject } from "../../../helpers/random";

// Generates a random childhood environment with a reason
export const generateChildhoodEnvironment = () => {
    return generateRandomItemFromObject(
      childhoodEnvironments,
      'childhoodEnvironment',
      'childhoodEnvironmentReason'
    );
  }

export const childhoodEnvironments = {
	'No Adult Supervision': [
		'No one was around a majority of the time, or at all, to supervise. No real structure.',
	],
	'Abusive': [
		'Caretakers provided significant physical and/or mental abuse'
	],
	'Sheltered': [
		'Constant supervision by adults or others, kept you confined to "safe" areas.'
	],
	'Supportive': [
		'You were provided guidance and care and allowed room to grow and explore'
	],
	'Gang' : [
		'You were raised by a gang, band or other group'
	],
	'Strict': [
		'Most of your care was left up to monks, military schools or other strict institutions'
	],
	'Owned': [	
		'Put to work from early or outright owned, very little care given'
	],
	'Apprenticed': [	
		'Given over to a Master to be apprenticed from an early age'
	],		
};