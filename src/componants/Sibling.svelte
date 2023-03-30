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
	  {#if Object.keys(character.siblings).length > 0 && character.siblings[Object.keys(character.siblings)[0]].gender !== null}
		<Content>
		  <table>
			<thead>
			  <tr>
				<th>Name</th>
				<th>Age</th>
				<th>Gender</th>
				<th>Fate</th>
				<th>Description</th>
			  </tr>
			</thead>
			<tbody>
			  {#each Object.values(character.siblings) as sibling}
				<tr>
				  <td>{sibling.name}</td>
				  <td>{sibling.age} years old</td>
				  <td>{sibling.gender}</td>
				  <td>{sibling.fate?.fate}</td>
				  <td>
					{sibling.fate?.description}
					{#if sibling.fate?.misfortune}
					  <br>{sibling.fate.misfortune.description}
					{/if}
					{#if sibling.fate?.death}
					  <br>{sibling.fate.death.description}
					{/if}
				  </td>
				</tr>
			  {/each}
			</tbody>
		  </table>
		</Content>
	  {:else}
		<Content>
		  <b>None</b>
		</Content>
	  {/if}
	</Card>
  </Cell>
  
  <style>
	table {
	  width: 100%;
	  border-collapse: collapse;
	}
	th,
	td {
	  padding: 8px;
	  text-align: left;
	  border-bottom: 1px solid #eee;
	}
	th {
	  background-color: #f5f5f5;
	}
  </style>
  