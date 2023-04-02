<script>
	import { generateCharacter } from "../data/characterGeneration/generateCharacter"
	import Button from '@smui/button';
</script>

<Button on:click={generateCharacter} variant="unelevated"> Generate Character </Button>