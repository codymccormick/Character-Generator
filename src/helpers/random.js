export const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomItemFromArray = (array) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

export const generateRandomItemFromObject = (object, itemName, reasonName) => {
	const randomKey = getRandomItemFromArray(Object.keys(object));
	const randomReason = getRandomItemFromArray(object[randomKey]);
	return {
		[itemName]: randomKey,
		[reasonName]: randomReason
	};
}
