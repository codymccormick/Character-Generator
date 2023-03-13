<script>
  import { generateCharacter } from '../scripts/generateCharacter';
  import { characterStore } from '../../routes/store';

  function handleClick() {
    const character = generateCharacter();
    characterStore.set(character);
  }
</script>

<button on:click={handleClick}>
  Generate Character
</button>