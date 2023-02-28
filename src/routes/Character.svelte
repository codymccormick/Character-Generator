<!DOCTYPE html>
<html lang="en">
	<head>
	</head>
	<body>
		<button id="generate-character-button">Generate Character</button>

		<table class="character" id="character">
			<tr>
				<th>Name</th>
				<td />
			</tr>
			<tr>
				<th>Alignment</th>
				<td />
			</tr>
			<tr>
				<th>Race</th>
				<td />
			</tr>
			<tr>
				<th>Class</th>
				<td />
			</tr>
			<tr>
				<th>Strength</th>
				<td />
			</tr>
			<tr>
				<th>Dexterity</th>
				<td />
			</tr>
			<tr>
				<th>Constitution</th>
				<td />
			</tr>
			<tr>
				<th>Intelligence</th>
				<td />
			</tr>
			<tr>
				<th>Wisdom</th>
				<td />
			</tr>
			<tr>
				<th>Charisma</th>
				<td />
			</tr>
		</table>

		<script>
			const generateCharacterButton = document.getElementById('generate-character-button');

			generateCharacterButton.addEventListener('click', generateCharacter);

			// Define names
			const NAMES = [
				'Aldric',
				'Briar',
				'Cassius',
				'Darian',
				'Elden',
				'Finnian',
				'Galen',
				'Hadrian',
				'Isen',
				'Jareth',
				'Kael',
				'Lirien',
				'Marius',
				'Niamh',
				'Orion',
				'Pryderi',
				'Quinlan',
				'Riven',
				'Sebastian',
				'Taliesin',
				'Urien',
				'Valerian',
				'Wren',
				'Xander',
				'Yorick',
				'Zephyr'
			];

			//Define races
			const RACES = [
				{ name: 'Dwarf', str: 2, dex: 0, con: 2, int: -2, wis: 0, cha: -2 },
				{ name: 'Elf', str: 0, dex: 2, con: -2, int: 2, wis: 0, cha: 0 },
				{ name: 'Halfling', str: -2, dex: 2, con: 2, int: 0, wis: 0, cha: 0 },
				{ name: 'Human', str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
				{ name: 'Dragonborn', str: 2, dex: 0, con: 0, int: 0, wis: 0, cha: -2 },
				{ name: 'Gnome', str: -2, dex: 0, con: 2, int: 2, wis: 0, cha: 0 },
				{ name: 'Half-Elf', str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
				{ name: 'Half-Orc', str: 2, dex: 0, con: 0, int: -2, wis: 0, cha: -2 },
				{ name: 'Tiefling', str: -2, dex: 0, con: 0, int: 2, wis: 0, cha: 2 }
			];

			//Define classes
			const CLASSES = [
				{ name: 'Barbarian', hitDie: 12, str: 2, dex: 0, con: 2, int: -2, wis: 0, cha: -2 },
				{ name: 'Bard', hitDie: 8, str: 0, dex: 2, con: 0, int: 2, wis: 0, cha: 2 },
				{ name: 'Cleric', hitDie: 8, str: 0, dex: 0, con: 2, int: 0, wis: 2, cha: 0 },
				{ name: 'Druid', hitDie: 8, str: 0, dex: 0, con: 0, int: 0, wis: 2, cha: 0 },
				{ name: 'Fighter', hitDie: 10, str: 2, dex: 0, con: 2, int: 0, wis: 0, cha: 0 },
				{ name: 'Monk', hitDie: 8, str: 0, dex: 2, con: 0, int: 0, wis: 2, cha: 0 },
				{ name: 'Paladin', hitDie: 10, str: 2, dex: 0, con: 2, int: 0, wis: 0, cha: 2 },
				{ name: 'Ranger', hitDie: 10, str: 2, dex: 2, con: 0, int: 0, wis: 0, cha: 0 },
				{ name: 'Rogue', hitDie: 8, str: 0, dex: 2, con: 0, int: 0, wis: 0, cha: 2 },
				{ name: 'Sorcerer', hitDie: 6, str: -2, dex: 0, con: 0, int: 2, wis: 0, cha: 2 },
				{ name: 'Warlock', hitDie: 8, str: 0, dex: 0, con: 0, int: 2, wis: 0, cha: 2 },
				{ name: 'Wizard', hitDie: 6, str: -2, dex: 0, con: 0, int: 2, wis: 0, cha: 0 }
			];

			function generateAlignment() {
  				const alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
  				const randomIndex = getRandomInt(0, alignments.length - 1);
				return alignments[randomIndex];
			}

			// Define a function to generate a random integer in a given range
			function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			// Define a function to generate a character
			function generateCharacter() {
				const name = NAMES[Math.floor(Math.random() * NAMES.length)];
				const race = RACES[Math.floor(Math.random() * Object.keys(RACES).length)];
				const characterClass = CLASSES[Math.floor(Math.random() * CLASSES.length)];
				const alignment = generateAlignment();
				console.log(alignment)

				const attributes = ['str', 'dex', 'con', 'int', 'wis', 'cha'].map((attr) => {
					const rolls = [...new Array(4)].map(() => Math.floor(Math.random() * 6) + 1);
					const base = rolls
						.sort((a, b) => a - b)
						.slice(1)
						.reduce((total, num) => total + num, 0);
					const raceModifier = RACES[attr] || 0;
					const classModifier = characterClass[attr] || 0;
					const value = base + raceModifier + classModifier;
					return Math.min(20, Math.max(1, value)); // Ensure the value is between 1 and 20
				});

				const [nameCell, alignmentCell, raceCell, classCell, ...statCells] = document
					.getElementById('character')
					.getElementsByTagName('td');
				const temp = [name, alignment, race.name, characterClass.name, ...attributes];
				nameCell.textContent = temp[0];
				alignmentCell.textContent = temp[1]
				raceCell.textContent = temp[2];
				classCell.textContent = temp[3];
				for (let i = 0; i < statCells.length; i++) {
					statCells[i].textContent = temp[i + 4];
				}
			}
		</script>

		<style>
			* {
				text-align: center;
			}

			.character {
				border: 1px solid black;
				margin-left: auto;
				margin-right: auto;
				margin-top: 20px;
			}
			
			table, th, td {
  				border: 1px solid;
				width:25%;
			}
		</style>
	</body>
</html>
