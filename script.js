const generateCharacterButton = document.getElementById(
  "generate-character-button"
);

generateCharacterButton.addEventListener("click", generateCharacter);

// Define names
const NAMES = [
    'Aldric', 'Briar', 'Cassius', 'Darian', 'Elden', 'Finnian', 'Galen', 'Hadrian',
    'Isen', 'Jareth', 'Kael', 'Lirien', 'Marius', 'Niamh', 'Orion', 'Pryderi',
    'Quinlan', 'Riven', 'Sebastian', 'Taliesin', 'Urien', 'Valerian', 'Wren',
    'Xander', 'Yorick', 'Zephyr'
    ];

//Define races
const RACES = {
  Dwarf: { str: 2, dex: 0, con: 2, int: -2, wis: 0, cha: -2 },
  Elf: { str: 0, dex: 2, con: -2, int: 2, wis: 0, cha: 0 },
  Halfling: { str: -2, dex: 2, con: 2, int: 0, wis: 0, cha: 0 },
  Human: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
  Dragonborn: { str: 2, dex: 0, con: 0, int: 0, wis: 0, cha: -2 },
  Gnome: { str: -2, dex: 0, con: 2, int: 2, wis: 0, cha: 0 },
  "Half-Elf": { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
  "Half-Orc": { str: 2, dex: 0, con: 0, int: -2, wis: 0, cha: -2 },
  Tiefling: { str: -2, dex: 0, con: 0, int: 2, wis: 0, cha: 2 },
};

//Define classes
const CLASSES = [
    { name: "Barbarian", hitDie: 12, str: 2, dex: 0, con: 2, int: -2, wis: 0, cha: -2 },
    { name: "Bard", hitDie: 8, str: 0, dex: 2, con: 0, int: 2, wis: 0, cha: 2 },
    { name: "Cleric", hitDie: 8, str: 0, dex: 0, con: 2, int: 0, wis: 2, cha: 0 },
    { name: "Druid", hitDie: 8, str: 0, dex: 0, con: 0, int: 0, wis: 2, cha: 0 },
    { name: "Fighter", hitDie: 10, str: 2, dex: 0, con: 2, int: 0, wis: 0, cha: 0 },
    { name: "Monk", hitDie: 8, str: 0, dex: 2, con: 0, int: 0, wis: 2, cha: 0 },
    { name: "Paladin", hitDie: 10, str: 2, dex: 0, con: 2, int: 0, wis: 0, cha: 2 },
    { name: "Ranger", hitDie: 10, str: 2, dex: 2, con: 0, int: 0, wis: 0, cha: 0 },
    { name: "Rogue", hitDie: 8, str: 0, dex: 2, con: 0, int: 0, wis: 0, cha: 2 },
    { name: "Sorcerer", hitDie: 6, str: -2, dex: 0, con: 0, int: 2, wis: 0, cha: 2 },
    { name: "Warlock", hitDie: 8, str: 0, dex: 0, con: 0, int: 2, wis: 0, cha: 2 },
    { name: "Wizard", hitDie: 6, str: -2, dex: 0, con: 0, int: 2, wis: 0, cha: 0 },
  ];

// Define a function to generate a random integer in a given range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Define a function to generate a character
function generateCharacter() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const race = Object.keys(RACES)[Math.floor(Math.random() * Object.keys(RACES).length)];
  const characterClass = CLASSES[Math.floor(Math.random() * CLASSES.length)];

  const attributes = ["str", "dex", "con", "int", "wis", "cha"]
    .map(attr => {
      const rolls = [...new Array(4)].map(() => Math.floor(Math.random() * 6) + 1);
      console.log(rolls)
      const base = rolls.sort((a, b) => a - b).slice(1).reduce((total, num) => total + num, 0);
      console.log(base)
      const raceModifier = RACES[race][attr] || 0;
      console.log(raceModifier)
      const classModifier = characterClass[attr] || 0;
      console.log(classModifier)
      const value = base + raceModifier + classModifier;
      return Math.min(20, Math.max(1, value)); // Ensure the value is between 1 and 20
    });

  const [nameCell, raceCell, classCell, ...statCells] = document.getElementById("character").getElementsByTagName("td");
  const temp = [name, race, characterClass.name, ...attributes];
  nameCell.textContent = temp[0];
  raceCell.textContent = temp[1];
  classCell.textContent = temp[2];
  for (let i = 0; i < statCells.length; i++) {
    statCells[i].textContent = temp[i + 3];
  }
}





  
