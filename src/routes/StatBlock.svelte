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

	<div
		contenteditable="true"
		style="width:310px; font-family:Arial,Helvetica,sans-serif;font-size:11px;"
	>
		<div class="name">{npcName}</div>
		<div class="description">Average {npcRace}, {npcAlignment}</div>

		<div class="gradient" />

		<div class="red">
			<div><span class="bold red">Armor Class: </span><span> 11 (hide armor)</span></div>
			<div><span class="bold red">Hit Points: </span><span> 59 (7d10+21)</span></div>
			<div><span class="bold red">Speed: </span><span> 40 ft.</span></div>
		</div>

		<div class="gradient" />

		<table>
			<tr>
                <th>STR </th>
                <th>DEX </th>
                <th>CON </th>
                <th>INT </th>
                <th>WIS </th>
                <th>CHA </th>
            </tr>
			<tr>
				<td>{npcStrength} (+4)</td>
				<td>{npcDexterity} (-1)</td>
				<td>{npcConstitution} (+3)</td>
				<td>{npcIntelligence} (-3)</td>
				<td>{npcWisdom} (-2)</td>
				<td>{npcCharisma} (-2)</td>
            </tr>
		</table>

		<div class="gradient" />

		<div><span class="bold">Senses: </span><span> darkvision 60ft., passive Perception 8</span></div>
		<div><span class="bold">Languages: </span><span> Common, Giant</span></div>
		<div><span class="bold">Challenge: </span><span> 2 (450 XP)</span></div>

		<div class="gradient" />

		<div class="actions red">Actions</div>

		<div class="hr" />

		<div class="attack">
			<span class="attackname">Greatclub.</span><span class="description">
				Melee Weapon Attack:</span
			><span>+6 to hit, reach 5 ft., one target.</span><span class="description">Hit:</span><span
				>13 (2d8+4) bludgeoning damage.</span
			>
		</div>
		<div class="attack">
			<span class="attackname">Javelin.</span><span class="description">
				Melee or Ranged Weapon Attack:</span
			><span>+6 to hit, reach 5 ft. or 30ft./120, one target.</span><span class="description"
				>Hit:</span
			><span>11 (2d6+4) piercing damage.</span>
		</div>
	</div>
	<br /><br /><br />
</main>

<style>
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
