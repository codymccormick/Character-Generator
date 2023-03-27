import faker from "faker";
import { generateHeft } from "./heft";

export const generateFriend = () => {
  const friendRoll = Math.floor(Math.random() * 12) + 1;
  let friend;

  switch (friendRoll) {
    case 1:
      friend = {
        name: faker.name.findName(),
        title: "Made a friend",
        type: 'Like a Big Brother or Sister to You',
        heft: generateHeft(),
        description: 'Someone that is older and looks after you, fussing over you at times',
      };
      break;
    case 2:
      friend = {
        name: faker.name.findName(),
        title: "Made a friend",
        type: 'Like a Kid Brother or Sister to You',
        heft: generateHeft(),
        description: 'Someone you look after as well as tease',
      };
      break;
    case 3:
      friend = {
        name: faker.name.findName(),
        title: "Made a friend",
        type: 'Teacher or Mentor',
        heft: generateHeft(),
        description: 'A sage becomes a friend that instructs you in matters',
      };
      break;
    case 4:
      friend = {
        name: faker.name.findName(),
        title: "Made a friend",
        type: 'Partner or Co-worker',
        heft: generateHeft(),
        description: 'Someone you work with often becomes a close friend',
      };
      break;
    case 5:
      friend = {
        name: faker.name.findName(),
        title: "Made a friend",
        type: 'An Old Lover',
        heft: generateHeft(),
        description: 'You said - I just want to be friends - and meant it',
      };
      break;
    case 6:
      friend = {
        name: faker.name.findName(),
        title: "Made a friend",
        type: 'An Old Enemy',
        heft: generateHeft(),
        description: 'Bygones become bygones and old rivalries become funny stories',
      };
      break;
    case 7:
      friend = {
        name: faker.name.findName(),
        title: "Made a friend",
        type: 'Like a Foster Parent to You',
        heft: generateHeft(),
        description: 'This friend regails you with advice as well as cares for you',
      };
      break;
    case 8:
      friend = {
        name: faker.name.findName(),
        title: "Made a friend",
        type: 'Old Childhood Friend',
        heft: generateHeft(),
        description: 'You bump into someone you had not seen in years',
      };
      break;
    case 9:
      friend = {
        name: faker.name.findName(),
        title: "Made a friend",
        type: 'Relative',
        heft: generateHeft(),
        description: 'A relative becomes a friend as well as a relation',
      };
      break;
    case 10:
      friend = {
        name: faker.name.findName(),
        title: "Made a friend",
        type: 'Gang or Tribe',
        heft: generateHeft(),
        description: 'Somehow you earn the friendship of a gang or tribe of people',
      };
      break;
    case 11:
      friend = {
        name: faker.name.findName(),
        title: "Made a friend",
        type: 'Creature with Animal Intelligence',
        heft: generateHeft(),
        description: 'You befriend a badger or horse, or even a random Displacer Beast you can no longer find',
      };
      break;
    case 12:
      friend = {
        name: faker.name.findName(),
        title: "Made a friend",
        type: 'Intelligent Creature',
        heft: generateHeft(),
        description: 'Maybe you ran into a Sphinx or a Wemic and managed to take the proverbial thorn out of the proverbial paw',
      };
      break;
  }

  return friend;
};