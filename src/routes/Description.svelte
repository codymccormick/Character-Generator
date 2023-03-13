<script>
    import { characterStore } from './store.js';
  
    $: character = $characterStore;
  </script>
  
  <div class="characterDescription">
    <p>{character.name} is a {character.age} year old {character.alignment} {character.gender} {character.race}</p>
    <p>They grew up a {character.background} because {character.backgroundReason}</p>
    <p>They currently are a {character.occupation}. They became a {character.occupation} because {character.occupationReason}</p>
  </div>
  