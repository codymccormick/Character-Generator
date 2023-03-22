<script>
	import { characterStore } from '../data/store';
	import Paper, { Title, Subtitle, Content } from '@smui/paper';

	$: character = $characterStore;
	$: isLoading = !character;
</script>

{#if isLoading}
	<p>Loading...</p>
{:else}
	<Paper color="primary" variant="outlined" class="mdc-theme--primary">
		<div class="characterDescription">
			{#if character && character.siblings && character.caretakerStatus}
				<div class="section">
					<Title>Origin</Title>
					<div class="subsection">
						<Content><b>Birth Location:</b> {character.birthplace}: {character.birthplaceReason}</Content>
						<Content><b>Childhood Environment:</b> {character.childhoodEnvironment}: {character.childhoodEnvironmentReason}</Content>
					</div>
				</div>
				<div class="section">
					<Title>Family Background</Title>
					<div class="subsection">
						<Content><b>Caretakers:</b> {character.caretakersOrigin}: {character.caretakersOriginReason}</Content>
						<Content><b>Family Background:</b> {character.familyBackground}: {character.familyBackgroundReason}</Content>
						{#if character.caretakerStatus.status === 'Misfortune'}
							<Content>
								<b>Caretakers' misfortune:</b>
								{character.caretakerStatus.misfortune.misfortuneDescription}
							</Content>
						{:else if character.caretakerStatus.status === 'Death'}
							<Content
								><b>Caretakers' Death:</b>
								{character.caretakerStatus.death.deathDescription}</Content
							>
						{:else}
							<Subtitle>{character.caretakerStatus.description}</Subtitle>
						{/if}
					</div>
				</div>
				<div class="section">
					<Title>Sibling Details</Title>
					<div class="subsection siblings-grid">
						{#each character.siblings as sibling}
							<div class="sibling">
								<Content><b>{sibling.birthOrder} {sibling.gender}</b></Content>
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
				</div>
			{/if}
		</div>
	</Paper>
{/if}

<style>
	.siblings-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 10px;
	}
	.sibling {
		background-color: #f1f1f1;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	ul {
		margin: 0;
		padding-left: 1.5em;
		list-style-type: none;
	}
	li::before {
		content: '•';
		color: #2c3e50;
		display: inline-block;
		position: relative;
		left: -1em;
	}
</style>
