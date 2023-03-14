<script>
  import { characterStore } from '../../routes/store';
  
    $: character = $characterStore;
  </script>
  
  
  <div class="characterDescription">
    <!-- <h1>Description</h1>
    <p>{character.name} is a {character.age} year old {character.alignment} {character.gender} {character.race}</p>
    <p>They grew up a {character.background} because {character.backgroundReason}</p>
    <p>They currently are a {character.occupation}. They became a {character.occupation} because {character.occupationReason}</p> -->

    <h2><u>Life Plan</u></h2>

    <h3>Birth & Childhood</h3>
    <p><b>Birthplace:</b> {character.birthplace}</p>
    <p><b>Reason:</b> {character.birthplaceReason}</p>
    <p><b>Childhood Environment:</b> {character.childhoodEnvironment}</p>
    <p><b>Reason:</b> {character.childhoodEnvironmentReason}</p>

    <h3>Caretaker's Origin</h3>
    <p><b>Birthplace:</b> {character.caretakersOrigin}</p>
    <p><b>Reason:</b> {character.caretakersOriginReason}</p>
    
  </div>


  <style>
    .characterDescription {
        border: 3px solid #a73335;
        width: 750px;
        padding: 5px;
        margin-top: 20px;
    }
  </style>
  