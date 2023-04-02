import { BaseCharacter } from "../../BaseCharacter";
import { randomInRange } from "../../../helpers/random";
import { generateDeath } from "../events/death";
import { generateMisfortune } from "../events/misfortune";

export class Caretaker extends BaseCharacter {
  constructor(type) {
    super();
    this.type = type;
  }
}

export const generateCaretaker = (type) => {
  return new Caretaker(type);
};

export const generateParents = (maxChildAge) => {
	const createParent = (gender) => {
	  const parent = generateCaretaker("parent");
	  parent.age = maxChildAge + randomInRange(16, 30);
	  parent.gender = gender;
  
	  const caretakerStatus = rollCaretakerStatus();
	  parent.caretakerStatus = caretakerStatus.status;
  
	  const events = {};
  
	  if (caretakerStatus.status === "Death") {
		const deathEvent = generateDeath();
		if (deathEvent) {
		  events.death = deathEvent;
		}
	  } else if (caretakerStatus.status === "Misfortune") {
		const misfortuneEvent = generateMisfortune();
		if (misfortuneEvent) {
		  events.misfortune = misfortuneEvent;
		}
	  }
  
	  parent.events = events;
	  return parent;
	};
  
	const father = createParent("Male");
	const mother = createParent("Female");
  
	return { father, mother };
  };

export const rollCaretakerStatus = () => {
  const roll = randomInRange(1, 12);

  if (roll <= 6) {
    return {
      status: "Alive and well",
      description: "Your parents or guardians are both doing well",
    };
  } else if (roll <= 10) {
    return {
      status: "Misfortune",
      description: "Your parents or guardians have experienced misfortune",
    };
  } else {
    return { status: "Death", description: "Your parents or guardians have experienced death" };
  }
};

