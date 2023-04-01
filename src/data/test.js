import { characterStore } from "./store";

let character 

$: character = characterStore

export const generateDescription = () => {
    {character.name}
};