<script>
	import { characterStore } from '../../routes/store';

	$: character = $characterStore;
</script>

<div class="characterDescription">
	<!-- <h1>Description</h1>
    <p>{character.name} is a {character.age} year old {character.alignment} {character.gender} {character.race}</p>
    <p>They grew up a {character.background} because {character.backgroundReason}</p>
    <p>They currently are a {character.occupation}. They became a {character.occupation} because {character.occupationReason}</p> -->

	{#if character && character.siblings && character.caretakerStatus}
		<h2><u>Life Plan</u></h2>

		<h3>Birth & Childhood</h3>
		<p><b>Birthplace:</b> {character.birthplace}</p>
		<p><b>Description:</b> {character.birthplaceReason}</p>
		<p><b>Childhood Environment:</b> {character.childhoodEnvironment}</p>
		<p><b>Description:</b> {character.childhoodEnvironmentReason}</p>

		<h3>Caretaker's Origin</h3>
		<p><b>Birthplace:</b> {character.caretakersOrigin}</p>
		<p><b>Description:</b> {character.caretakersOriginReason}</p>
		<p><b>Status:</b> {character.caretakerStatus.status}</p>
		<p>{character.caretakerStatus.description}</p>

		<p><b>Siblings:</b></p>
		<ul>
			{#each character.siblings as sibling}
				<li>
					{sibling.birthOrder}
					{sibling.gender}
					{#if sibling.fate}
						<ul>
							<li>{sibling.fate.fate}</li>
							<li>{sibling.fate.description}</li>
							{#if sibling.fate.misfortune}
								<li>{sibling.fate.misfortune.description}</li>
							{/if}
							{#if sibling.fate.death}
								<li>{sibling.fate.death.description}</li>
							{/if}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.characterDescription {
		border: 3px solid #a73335;
		width: 750px;
		padding: 5px;
		margin-top: 20px;
	}
</style>
