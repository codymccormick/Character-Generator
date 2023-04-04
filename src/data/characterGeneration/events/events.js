import { misfortunes } from "./misfortune";
import { crimes } from "./crime";
import { punishmentEvents } from "./crime";
import { deaths } from "./death";
// import any other event tables here...

export const events = {
  misfortune: misfortunes,
  death: deaths,
  crime: crimes,
  punishment: punishmentEvents,
};
