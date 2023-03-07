import { genders, races, classes, alignments, occupations } from './data';
import { getRandomItemFromArray, rollStat, generateAge, generateBackground } from './helper';
import faker from 'faker';

export function generateCharacter() {
    const { background, backgroundReason } = generateBackground();
    let character = {
        name: faker.name.findName(),
        age: generateAge(),
        race: getRandomItemFromArray(races),
        gender: getRandomItemFromArray(genders),
        class: getRandomItemFromArray(classes),
        alignment: getRandomItemFromArray(alignments),
        occupation: getRandomItemFromArray(occupations),
        background,
        backgroundReason,
        strength: rollStat(),
        dexterity: rollStat(),
        constitution: rollStat(),
        intelligence: rollStat(),
        wisdom: rollStat(),
        charisma: rollStat()
    };
    console.log(character);
    return character;
}
