<script>
	import { onMount } from 'svelte';
	import { genders, races, classes, alignments, occupations, backgrounds } from './data';
	import { getRandomItemFromArray, rollStat, generateAge } from './helper';
	import faker from 'faker';

	let character = {};

	onMount(generateCharacter());

	function generateCharacter() {
		character = {
			name: faker.name.findName(),
			age: generateAge(),
			race: getRandomItemFromArray(races),
			gender: getRandomItemFromArray(genders),
			class: getRandomItemFromArray(classes),
			alignment: getRandomItemFromArray(alignments),
			occupation: getRandomItemFromArray(occupations),
			background: getRandomItemFromArray(backgrounds),
			attributes: {
				strength: rollStat(),
				dexterity: rollStat(),
				constitution: rollStat(),
				intelligence: rollStat(),
				wisdom: rollStat(),
				charisma: rollStat()
			}
		};
		console.clear();
		console.log(character);
	}
</script>

<main>
	<div
		id="statBlock"
		contenteditable="true"
		style="width:310px; font-family:Arial,Helvetica,sans-serif;font-size:11px;"
	>
		<div class="name">{character.name}</div>
		<div class="description">
			Medium {character.age} year old {character.gender}
			{character.race}, {character.alignment}
		</div>

		<div class="gradient" />

		<div class="red">
			<div><span class="bold red">Armor Class: </span><span> 11 (hide armor)</span></div>
			<div><span class="bold red">Hit Points: </span><span> 59 (7d10+21)</span></div>
			<div><span class="bold red">Speed: </span><span> 40 ft.</span></div>
		</div>

		<div class="gradient" />

		<table>
			<tr>
				<th>STR</th>
				<th>DEX</th>
				<th>CON</th>
				<th>INT</th>
				<th>WIS</th>
				<th>CHA</th>
			</tr>
			<tr>
				<td>{character.attributes.strength} (+4)</td>
				<td>{character.attributes.dexterity} (-1)</td>
				<td>{character.attributes.constitution} (+3)</td>
				<td>{character.attributes.intelligence} (-3)</td>
				<td>{character.attributes.wisdom} (-2)</td>
				<td>{character.attributes.charisma} (-2)</td>
			</tr>
		</table>

		<div class="gradient" />

		<div><span class="bold">Background: </span><span> {character.background}</span></div>
		<div><span class="bold">Occupation: </span><span> {character.occupation}</span></div>
		<div>
			<span class="bold">Senses: </span><span> darkvision 60ft., passive Perception 8</span>
		</div>
		<div><span class="bold">Languages: </span><span> Common, Giant</span></div>
		<div><span class="bold">Challenge: </span><span> 2 (450 XP)</span></div>

		<div class="gradient" />

		<div class="actions red">Actions</div>

		<div class="hr" />

		<div class="attack">
			<span class="attackname">Greatclub.</span>
			<span class="description">Melee Weapon Attack:</span>
			<span>+6 to hit, reach 5 ft., one target.</span>
			<span class="description">Hit:</span>
			<span>13 (2d8+4) bludgeoning damage.</span>
		</div>

		<div class="attack">
			<span class="attackname">Javelin.</span>
			<span class="description"> Melee or Ranged Weapon Attack:</span>
			<span>+6 to hit, reach 5 ft. or 30ft./120, one target.</span>
			<span class="description">Hit:</span>
			<span>11 (2d6+4) piercing damage.</span>
		</div>
	</div>
</main>

<div id="button">
	<button on:click={generateCharacter}>Generate Character</button>
</div>

<style>
	main {
		display: flex;
		justify-content: center;
	}

	#button {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}

	#statBlock {
		border: 1px solid black;
	}
	.gradient {
		background: linear-gradient(10deg, #a73335, white);
		height: 5px;
		margin: 7px 0px;
	}
	.name {
		font-size: 225%;
		font-family: Georgia, serif;
		font-variant: small-caps;
		font-weight: bold;
		color: #a73335;
	}
	.description {
		font-style: italic;
	}
	.bold {
		font-weight: bold;
	}
	.red {
		color: #a73335;
	}
	table {
		width: 100%;
		border: 0px;
		border-collapse: collapse;
		color: #a73335;
	}
	th,
	td {
		width: 50px;
		text-align: center;
	}
	.actions {
		font-size: 175%;
		font-variant: small-caps;
		margin: 17px 0px 0px 0px;
	}
	.hr {
		background: #a73335;
		height: 2px;
	}
	.attack {
		margin: 5px 0px;
	}
	.attackname {
		font-weight: bold;
		font-style: italic;
	}
</style>
