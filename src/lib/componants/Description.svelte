<script>
  import { characterStore } from '../../routes/store';
  
    $: character = $characterStore;
  </script>
  
  <h1>Description</h1>

  <div class="characterDescription">
    <p>{character.name} is a {character.age} year old {character.alignment} {character.gender} {character.race}</p>
    <p>They grew up a {character.background} because {character.backgroundReason}</p>
    <p>They currently are a {character.occupation}. They became a {character.occupation} because {character.occupationReason}</p>
  </div>


  <style>
    .characterDescription {
        border: 3px solid #a73335;
        width: 750px;
        height: 250px;
        padding: 5px;
    }
  </style>
  