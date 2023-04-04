import { getRandomItemFromArray } from "../../../helpers/random";

export const generateCrime = () => {
    getRandomItemFromArray(crimes)
}

export const generatePunishmentEvent = () => {
    return getRandomItemFromArray(punishmentEvents);
}

export const crimes = [
    {
        title: "Murder",
        type: "Crime",
        description: "The unlawful killing of another person without justification or valid excuse",
    },
    {
        title: "Theft",
        type: "Crime",
        description: "The act of stealing someone else's property without their consent",
    },
    {
        title: "Burglary",
        type: "Crime",
        description: "The illegal entry into a building with the intent to commit theft or another crime",
    },
    {
        title: "Assault",
        type: "Crime",
        description: "The intentional act of causing physical harm or threatening to cause harm to another person",
    },
    {
        title: "Smuggling",
        type: "Crime",
        description: "The illegal transportation of goods or persons across borders, avoiding taxes or other legal restrictions",
    },
    {
        title: "Kidnapping",
        type: "Crime",
        description: "The abduction and holding of a person against their will, often for ransom or other demands",
    },
    {
        title: "Extortion",
        type: "Crime",
        description: "The practice of obtaining money, property, or services through coercion, threats, or intimidation",
    },
    {
        title: "Counterfeiting",
        type: "Crime",
        description: "The production and distribution of fake currency, documents, or goods, often with the intent to defraud",
    },
];

export const punishmentEvents = [
    {
        title: "Exonerated",
        type: "Punishment Event",
        description: "You did not commit the crime and were exonerated after being accused.",
    },
    {
        title: "Found Not Guilty",
        type: "Punishment Event",
        description: "You committed the crime or helped do so, but nonetheless the authorities found you not guilty.",
    },
    {
        title: "Wanted",
        type: "Punishment Event",
        description: "You were nearly caught in the act. You had to flee and are wanted in the community where the crime occurred.",
    },
    {
        title: "Convicted",
        type: "Punishment Event",
        description: "You were caught and convicted. You spent time in jail, chained to an oar, or performing hard labor. You served a sentence of 1d4 years or succeeded in escaping after that much time.",
    },
];
