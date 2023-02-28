<!DOCTYPE html>
<html lang="en">
	<head />
	<body>
		<button id="generate-character-button">Generate Character</button>

		<table class="character" id="character">
			{#each ['Name', 'Alignment', 'Race', 'Class', 'Occupation', 'Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'] as prop}
				<tr>
					<th>{prop}</th>
					<td />
				</tr>
			{/each}
		</table>

		<script>
			const generateCharacterButton = document.getElementById('generate-character-button');

			generateCharacterButton.addEventListener('click', generateCharacter);

			// Define names
			const names = [
				'Aldric',
				'Briar',
				'Cassius',
				'Elden',
				'Kael',
				'Marius',
				'Orion',
				'Riven',
				'Sebastian',
				'Zephyr'
			];

			const occupations = [
				'Baker',
				'Blacksmith',
				'Barber',
				'Guard',
				'Butcher',
				'Chef',
				'Mason',
				'Fletcher',
				'Cobbler'
			];

			const alignments = [
				'Lawful Good',
				'Neutral Good',
				'Chaotic Good',
				'Lawful Neutral',
				'True Neutral',
				'Chaotic Neutral',
				'Lawful Evil',
				'Neutral Evil',
				'Chaotic Evil'
			];

			//Define races
			const races = [
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
			const classes = [
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

			function rollAbilityScores() {
				const rolls = [];
				for (let i = 0; i < 6; i++) {
					const diceRolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
					const lowestRoll = Math.min(...diceRolls);
					const abilityScore = diceRolls.reduce((total, roll) => total + roll, 0) - lowestRoll;
					rolls.push(abilityScore);
				}
				return rolls;
			}

			function getRandomItemFromArray(array) {
				const randomIndex = Math.floor(Math.random() * array.length);
				return array[randomIndex];
			}

			// Define a function to generate a character
			function generateCharacter() {
				const name = getRandomItemFromArray(names);
				const race = getRandomItemFromArray(races);
				const characterClass = getRandomItemFromArray(classes);
				const occupation = getRandomItemFromArray(occupations);
				const alignment = getRandomItemFromArray(alignments);

				const attributes = ['str', 'dex', 'con', 'int', 'wis', 'cha'].map((attr) => {
					const rolls = [...new Array(4)].map(() => Math.floor(Math.random() * 6) + 1);
					const base = rolls
						.sort((a, b) => a - b)
						.slice(1)
						.reduce((total, num) => total + num, 0);
					const raceModifier = races[attr] || 0;
					const classModifier = characterClass[attr] || 0;
					const value = base + raceModifier + classModifier;
					return Math.min(20, Math.max(1, value)); // Ensure the value is between 1 and 20
				});

				const [nameCell, alignmentCell, raceCell, classCell, occupationCell, ...statCells] = document
					.getElementById('character')
					.getElementsByTagName('td');
				const temp = [name, alignment, race.name, characterClass.name, occupation, ...attributes];
				nameCell.textContent = temp[0];
				alignmentCell.textContent = temp[1];
				raceCell.textContent = temp[2];
				classCell.textContent = temp[3];
				occupationCell.textContent = temp[4]
				for (let i = 0; i < statCells.length; i++) {
					statCells[i].textContent = temp[i + 5];
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

			table,
			th,
			td {
				border: 1px solid;
				width: 25%;
			}
		</style>
	</body>
</html>
