import faker from "faker";
import { generateHeft } from "./heft";
import { BaseCharacter } from "../BaseCharacter";

export class Friend extends BaseCharacter {
	constructor() {
		super();

		this.heft = generateHeft();
	}
}

export const generateFriend = () => {
	const friendRoll = Math.floor(Math.random() * 12) + 1;
	let friend = new Friend();

	switch (friendRoll) {
		case 1:
			friend.name = faker.name.findName();
			friend.title = "Made a friend";
			friend.type = "Like a Big Brother or Sister to You";
			friend.description = "Someone that is older and looks after you, fussing over you at times";
			break;
		case 2:
			friend.name = faker.name.findName();
			friend.title = "Made a friend";
			friend.type = "Like a Kid Brother or Sister to You";
			friend.description = "Someone you look after as well as tease";
			break;
		case 3:
			friend.name = faker.name.findName();
			friend.title = "Made a friend";
			friend.typ = "Teacher or Mentor";
			friend.description = "A sage becomes a friend that instructs you in matters";
			break;
		case 4:
			friend.name = faker.name.findName();
			friend.title = "Made a friend";
			friend.type = "Partner or Co-worker";
			friend.description = "Someone you work with often becomes a close friend";
			break;
		case 5:
			friend.name = faker.name.findName();
			friend.title = "Made a friend";
			friend.type = "An Old Lover";
			friend.description = "You said - I just want to be friends - and meant it";
			break;
		case 6:
			friend.name = faker.name.findName();
			friend.title = "Made a friend";
			friend.type = "An Old Enemy";
			friend.description = "Bygones become bygones and old rivalries become funny stories";
			break;
		case 7:
			friend.name = faker.name.findName();
			friend.title = "Made a friend";
			friend.type = "Like a Foster Parent to You";
			friend.description = "This friend regails you with advice as well as cares for you";
			break;
		case 8:
			friend.name = faker.name.findName();
			friend.title = "Made a friend";
			friend.type = "Old Childhood Friend";
			friend.description = "You bump into someone you had not seen in years";
			break;
		case 9:
			friend.name = faker.name.findName();
			friend.title = "Made a friend";
			friend.type = "Relative";
			friend.description = "A relative becomes a friend as well as a relation";
			break;
		case 10:
			friend.name = faker.name.findName();
			friend.title = "Made a friend";
			friend.type = "Gang or Tribe";
			friend.description = "Somehow you earn the friendship of a gang or tribe of people";
			break;
		case 11:
			friend.name = faker.name.findName();
			friend.title = "Made a friend";
			friend.type = "Creature with Animal Intelligence";
			friend.description = "You befriend a badger or horse, or even a random Displacer Beast you can no longer find";
			break;
		case 12:
			friend.name = faker.name.findName();
			friend.title = "Made a friend";
			friend.type = "Intelligent Creature";
			friend.description = "Maybe you ran into a Sphinx or a Wemic and managed to take the proverbial thorn out of the proverbial paw";
			break;
	}

	return friend;
};
