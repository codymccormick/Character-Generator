<script>
  import { generateCharacter } from './generateCharacter.js';
  import { characterStore } from './store.js';

  function handleClick() {
    const character = generateCharacter();
    characterStore.set(character);
  }
</script>

<button on:click={handleClick}>
  Generate Character
</button>