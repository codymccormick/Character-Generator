export const generateEnemy = () => {
	const enemyRoll = Math.floor(Math.random() * 12) + 1;
	let enemy;

	switch (enemyRoll) {
		case 1:
			enemy = {
				title: "Made an enemy",
				type: "Ex-Friend",
				description: "You used to have lunch together and the like, but things went sour",
			};
			break;
		case 2:
			enemy = {
				title: "Made an enemy",
				type: "Ex-Lover",
				description: "All that love turned to hate",
			};
			break;
		case 3:
			enemy = {
				title: "Made an enemy",
				type: "Relative",
				description: "Family bonds cut by strife",
			};
			break;
		case 4:
			enemy = {
				title: "Made an enemy",
				type: "Childhood Enemy",
				description: "An old face you hoped you would never see again",
			};
			break;
		case 5:
			enemy = {
				title: "Made an enemy",
				type: "Person You Worked For",
				description: "One overtime too many",
			};
			break;
		case 6:
			enemy = {
				title: "Made an enemy",
				type: "Person That Worked for You",
				description: "You should have paid for that overtime",
			};
			break;
		case 7:
			enemy = {
				title: "Made an enemy",
				type: "Ex-Partner",
				description: "A working or adventuring relationship turns to arguments",
			};
			break;
		case 8:
			enemy = {
				title: "Made an enemy",
				type: "Gang or Tribe",
				description: "You managed to step on the really wrong foot",
			};
			break;
		case 9:
			enemy = {
				title: "Made an enemy",
				type: "Authorities",
				description: "There are those amongst the law that dislike you",
			};
			break;
		case 10:
			enemy = {
				title: "Made an enemy",
				type: "Dark Powers",
				description: "Somehow you've come to the attention of dark forces, and they know your name",
			};
			break;
		case 11:
			enemy = {
				title: "Made an enemy",
				type: "Creature with Animal Intelligence",
				description: "You kicked that mule one time too many, and now it hates you to the bone",
			};
			break;
		case 12:
			enemy = {
				title: "Made an enemy",
				type: "Intelligent Creature",
				description: "You have some creature like a beholder or dragon angry with you",
			};
			break;
	}

	return enemy;
};
