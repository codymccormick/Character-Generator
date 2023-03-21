// Generate a random integer within a specified range (inclusive)
export const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Get a random item from an array
export const getRandomItemFromArray = (array) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
};

// Generate a random item from an object using specified keys for the item and reason
export const generateRandomItemFromObject = (object, itemName, reasonName) => {
	const randomKey = getRandomItemFromArray(Object.keys(object));
	const randomReason = getRandomItemFromArray(object[randomKey]);
	return {
		[itemName]: randomKey,
		[reasonName]: randomReason
	};
};
