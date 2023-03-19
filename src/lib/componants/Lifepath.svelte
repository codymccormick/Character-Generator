<script>
    import { lifepathCategories } from '../scripts/lifepathData';
    let selectedEvents = [];
  </script>
  
  {#each lifepathCategories as category}
  <h3>{category.name}</h3>
  {#each category.events as event}
    <label>
      <input
        type="radio"
        bind:group={selectedEvents[category.name]}
        value={event.id}
      />
      {event.description}
    </label>
  {/each}
{/each}