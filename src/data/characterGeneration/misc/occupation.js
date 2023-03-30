import { getRandomItemFromArray } from "../../../helpers/random";

export const generateOccupation = () => {
  return getRandomItemFromArray(occupations);
};

// List of character occupations
export const occupations = [
  'Academic',
  'Adventurer',
  'Aristocrat',
  'Artisan',
  'Guild Member',
  'Criminal',
  'Entertainer',
  'Exile',
  'Hermit',
  'Refugee',
  'Explorer',
  'Wanderer',
  'Farmer',
  'Herder',
  'Hunter',
  'Trapper',
  'Laborer',
  'Merchant',
  'Politician',
  'Bureaucrat',
  'Priest',
  'Sailor',
  'Soldier'
];