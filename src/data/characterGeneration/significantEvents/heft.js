import { randomInRange } from "../../../helpers/random";

export const generateHeft = () => {
    const heftRoll = randomInRange(1,12);
    let heft;
  
    switch (heftRoll) {
      case 1:
        heft = {
          heft: 'Peon',
          description: 'This person has no real pull, only has himself',
        };
        break;
      case 2:
        heft = {
          heft: 'Clan',
          description:
            'Close family ties translates into an extended family all willing to lay their lives for this individual',
        };
        break;
      case 3:
        heft = {
          heft: 'Gang',
          description: `A group of ${randomInRange(1,12) * 5} like minded individuals`,
        };
        break;
      case 4:
        heft = {
          heft: 'Tribe',
          description: 'A large group of individuals tied by culture',
        };
        break;
      case 5:
        heft = {
          heft: 'Minor Figure',
          description:
            'A local hero or minor noble that can pull on the resources of a single town',
        };
        break;
      case 6:
        heft = {
          heft: 'Major Figure',
          description:
            'A famous hero or major noble that can pull resources over an entire province',
        };
        break;
      case 7:
        heft = {
          heft: 'Military Connections',
          description:
            'Someone that is part of a mercenary outfit or part of the guard',
        };
        break;
      case 8:
        heft = {
          heft: 'Black Market/Underground',
          description:
            'Powerful connections with the black market and the criminal world',
        };
        break;
      case 9:
        heft = {
          heft: 'Powerful Individual',
          description:
            'Someone who is a power unto himself, like a mage or a powerful priest',
        };
        break;
      case 10:
        heft = {
          heft: 'Connected to the Light',
          description:
            'Angelic forces or extra planar due gooders with wide ranging reach',
        };
        break;
      case 11:
        heft = {
          heft: 'Connected to the Dark',
          description:
            'Demonic forces, or connections with Abyssal entities or other such nasties',
        };
        break;
      case 12:
        heft = {
          heft: 'Royalty',
          description:
            'A member of the ruling family with pull anywhere within the kingdom, some beyond',
        };
        break;
    }
  
    return heft;
  };
  