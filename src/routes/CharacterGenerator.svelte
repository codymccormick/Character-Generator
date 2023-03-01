<script>
	import { names, races, classes, alignments, occupations } from './data';
	import { getRandomItemFromArray, rollStat } from './helper';

	// Define variables for NPC generation
	let npcName = '';
	let npcRace = '';
	let npcClass = '';
	let npcAlignment = '';
	let npcOccupation = '';
	let npcStrength = '';
	let npcDexterity = '';
	let npcConstitution = '';
	let npcIntelligence = '';
	let npcWisdom = '';
	let npcCharisma = '';

	// Function to generate random NPC
	function generateNPC() {
		npcName = getRandomItemFromArray(names);
		npcRace = getRandomItemFromArray(races);
		npcClass = getRandomItemFromArray(classes);
		npcAlignment = getRandomItemFromArray(alignments);
		npcOccupation = getRandomItemFromArray(occupations);

		npcStrength = rollStat();
		npcDexterity = rollStat();
		npcConstitution = rollStat();
		npcIntelligence = rollStat();
		npcWisdom = rollStat();
		npcCharisma = rollStat();
	}
</script>

<main>
	<button on:click={generateNPC}>Generate NPC</button>

	<table>
		<tr>
			<th>Name</th>
			<td>{npcName}</td>
		</tr>
		<tr>
			<th>Race</th>
			<td>{npcRace}</td>
		</tr>
		<tr>
			<th>Class</th>
			<td>{npcClass}</td>
		</tr>
		<tr>
			<th>Alignment</th>
			<td>{npcAlignment}</td>
		</tr>
		<tr>
			<th>Occupation</th>
			<td>{npcOccupation}</td>
		</tr>
		<tr>
			<th>Strength</th>
			<td>{npcStrength}</td>
		</tr>
		<tr>
			<th>Dexterity</th>
			<td>{npcDexterity}</td>
		</tr>
		<tr>
			<th>Constitution</th>
			<td>{npcConstitution}</td>
		</tr>
		<tr>
			<th>Intelligence</th>
			<td>{npcIntelligence}</td>
		</tr>
		<tr>
			<th>Wisdom</th>
			<td>{npcWisdom}</td>
		</tr>
		<tr>
			<th>Charisma</th>
			<td>{npcCharisma}</td>
		</tr>
	</table>
</main>

<style>
	* {
		text-align: center;
	}

	table {
		margin: auto;
	}

	th,
	td {
		border: 1px solid black;
		
	}
</style>
