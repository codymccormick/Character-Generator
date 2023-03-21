<script>
	import { characterStore } from '../data/store';

	$: character = $characterStore;
</script>

<div class="characterDescription">
	{#if character && character.siblings && character.caretakerStatus}
	
		<h3>Origin</h3>
		<p><b>Birth Location:</b> {character.birthplace}</p>
		<p><b>Description:</b> {character.birthplaceReason}</p>
		<p><b>Childhood Environment:</b> {character.childhoodEnvironment}</p>
		<p><b>Description:</b> {character.childhoodEnvironmentReason}</p>

		<h3>Family</h3>
		<p><b>Caretakers :</b> {character.caretakersOrigin}</p>
		<p><b>Description:</b> {character.caretakersOriginReason}</p>
		<p><b>Family Background</b> {character.familyBackground}</p>
		<p><b>Decription</b> {character.familyBackgroundReason}</p>
		{#if character.caretakerStatus.status === 'Misfortune'}
			<p><b>Caretakers misfortune:</b> {character.caretakerStatus.misfortune.misfortuneDescription}</p>
		{:else if character.caretakerStatus.status === 'Death'}
			<p><b>Caretakers Death:</b> {character.caretakerStatus.death.deathDescription}</p>
		{:else}
			<p>{character.caretakerStatus.description}</p>
		{/if}

		<p><b>Siblings:</b></p>
		<div class="siblings-grid">
			{#each character.siblings as sibling}
				<div class="sibling">
					<p>
						{sibling.birthOrder}
						{sibling.gender}
					</p>
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
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.characterDescription {
		border: 3px solid #a73335;
		width: 750px;
		padding: 5px;
		margin-top: 20px;
	}
	.siblings-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 10px;
	}
	.sibling {
		background-color: #f1f1f1;
		padding: 10px;
		border-radius: 5px;
	}
</style>
