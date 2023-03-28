<script>
	import { characterStore } from '../data/store';
	import { Cell } from '@smui/layout-grid';
	import Card, { Content } from '@smui/card';

	$: character = $characterStore;
</script>

<Cell class="section">
	<Card variant="outlined" padded>
		<Content>
			<h2>Sibling Details</h2>
		</Content>
		<Content>
			<div class="subsection siblings-grid">
				{#if character.siblings.length > 0 && character.siblings[0].gender !== null}
					{#each character.siblings as sibling}
						<Card variant="outlined" padded>
							<Content>
								<b>{sibling.name}</b>
								<br /><b>{sibling.age} year old {sibling.gender}</b>
							</Content>
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
						</Card>
					{/each}
				{:else}
					<Content><b>None</b></Content>
				{/if}
			</div>
		</Content>
	</Card>
</Cell>

<style>
	.siblings-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 10px;
	}
</style>
