export const generateCupidStrikes = () => {
    const cupidRoll = Math.floor(Math.random() * 12) + 1;
    let cupidStrikes;
  
    switch (cupidRoll) {
      case 1:
      case 2:
      case 3:
      case 4:
        const relationshipRoll = Math.floor(Math.random() * 12) + 1;
        let relationshipResult;
  
        if (relationshipRoll >= 1 && relationshipRoll <= 5) {
          relationshipResult = 'ends';
        } else if (relationshipRoll >= 6 && relationshipRoll <= 11) {
          relationshipResult = 'continues through the year';
        } else {
          relationshipResult = 'you marry';
        }
  
        cupidStrikes = {
            title: "Cupid Strikes",
          type: 'A Good Thing',
          description: `A serious relationship ${relationshipResult}`,
        };
        break;
      case 5:
      case 6:
        const unrequitedRoll = Math.floor(Math.random() * 12) + 1;
        const unrequitedDirection = unrequitedRoll % 2 === 0 ? 'they fell for you' : 'you fell for them';
        const unrequitedIntensity = unrequitedRoll <= 2 ? 'accepted as just friends' : unrequitedRoll >= 11 ? 'creeped out by stalking' : '';
  
        cupidStrikes = {
            title: "Cupid Strikes",
          type: 'Unrequited',
          description: `One of you fell in love, the other... didn't. ${unrequitedDirection}. ${unrequitedIntensity}`,
        };
        break;
      case 7:
      case 8:
      case 9:
        const heartbreakRoll = Math.floor(Math.random() * 12) + 1;
        const heartbreakCheater = heartbreakRoll <= 6 ? 'you cheated on them' : 'they cheated on you';
        const heartbreakAwareness = heartbreakRoll % 2 === 0 ? 'the cheated party finds out' : 'the cheating party dumps the other without them ever knowing why';
  
        cupidStrikes = {
            title: "Cupid Strikes",
          type: 'Heartbreak',
          description: `While dating someone seriously, ${heartbreakCheater}. ${heartbreakAwareness}`,
        };
        break;
      case 10:
      case 11:
        cupidStrikes = {
            title: "Cupid Strikes",
          type: 'Tragic',
          description: "Someone whom you'd been dating for over a year dies",
        };
        break;
      case 12:
        const pregnancyRoll = Math.floor(Math.random() * 12) + 1;
        let pregnancyResult;
  
        if (pregnancyRoll >= 1 && pregnancyRoll <= 3) {
          pregnancyResult = 'You leave';
        } else if (pregnancyRoll >= 4 && pregnancyRoll <= 6) {
          pregnancyResult = 'He/she leaves you';
        } else if (pregnancyRoll >= 7 && pregnancyRoll <= 8) {
          pregnancyResult = 'You marry';
        } else {
          pregnancyResult = 'Crossbow Point Wedding';
        }
  
        cupidStrikes = {
            title: "Cupid Strikes",
            type: 'Even More Tragic',
            description: `Pregnancy. ${pregnancyResult}`,
          };
          break;
        default:
          cupidStrikes = {
            title: "Cupid Strikes",
            type: 'Unknown',
            description: 'An unknown outcome occurred',
          };
      }
  
      return cupidStrikes;
  };
  
  export default generateCupidStrikes;
  