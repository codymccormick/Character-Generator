<script>
  import { characterStore } from '../data/store';
  import { Cell } from '@smui/layout-grid';
  import Card, { Content } from '@smui/card';

  let character;

  $: {
    characterStore.subscribe(($characterStore) => {
      character = $characterStore;
    });
  }
</script>

<Cell class="section">
  {#if character}
    <Card variant="outlined" padded>
      <h2>Family</h2>
      <Content>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Father</th>
              <th>Mother</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Name</b></td>
              <td>{character.parents.father.name}</td>
              <td>{character.parents.mother.name}</td>
            </tr>
            <tr>
              <td><b>Age</b></td>
              <td>{character.parents.father.age}</td>
              <td>{character.parents.mother.age}</td>
            </tr>
            <tr>
              <td><b>Status</b></td>
              <td>
                {#if character.parents.father.caretakerStatus === 'Misfortune'}
                  Misfortune: {character.parents.father.events.misfortune}
                {:else if character.parents.father.caretakerStatus === 'Death'}
                  Dead: {character.parents.father.events.death}
                {:else}
                  Alive and well
                {/if}
              </td>
              <td>
                {#if character.parents.mother.caretakerStatus === 'Misfortune'}
                  Misfortune: {character.parents.mother.events.misfortune}
                {:else if character.parents.mother.caretakerStatus === 'Death'}
                  Dead: {character.parents.mother.events.death}
                {:else}
                  Alive and well
                {/if}
              </td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Card>
  {/if}
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
