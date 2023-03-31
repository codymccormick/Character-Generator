import { randomInRange } from '../../../helpers/random';
import { generateSibling } from '../family/siblings';

export function generateWindfall() {
    const windfallRoll = randomInRange(1, 12);

  switch (true) {
    case windfallRoll >= 1 && windfallRoll <= 2:
      return {
        title: 'Financial Boon',
        type: "Windfall",
        description: 'You nearly double your worth in lands and possessions',
      };

    case windfallRoll >= 3 && windfallRoll <= 4:
      return {
        title: 'Someone Owes You',
        type: "Windfall",
        description: 'You managed to be at the right place and at the right time and someone owes you',
      };

    case windfallRoll >= 5 && windfallRoll <= 6:
      return {
        title: 'Fame',
        type: "Windfall",
        description: 'Through your deeds, you manage to make a name for yourself locally',
      };

    case windfallRoll >= 7 && windfallRoll <= 8:
        const sibling = generateSibling();
        return {
          title: 'Long Lost Someone',
          type: "Found a long lost sibling",
          description: `You find a sibling you never knew you had. ${sibling.birthOrder} ${sibling.gender}`,
          sibling,
        };

    case windfallRoll >= 9 && windfallRoll <= 10:
      return {
        title: 'Title',
        type: "Windfall",
        description: 'You gain a title and lands.',
      };

    case windfallRoll >= 11 && windfallRoll <= 12:
      const months = randomInRange(1, 12);;
      return {
        title: 'Travel',
        type: "Travel",
        description: `The opportunity arises to travel to far distant lands for ${months} months.`,
        months,
      };

    default:
      return null;
  }
}
