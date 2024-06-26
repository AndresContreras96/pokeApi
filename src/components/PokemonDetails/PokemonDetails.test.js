import React from "react";
import { render } from "@testing-library/react";
import PokemonDetails from "./PokemonDetails";

const testData = {
  abilities: [
    {
      ability: {
        name: "overgrow",
        url: "https://pokeapi.co/api/v2/ability/65/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "chlorophyll",
        url: "https://pokeapi.co/api/v2/ability/34/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 64,
  height: 7,
  id: 1,
  name: "bulbasaur",
  order: 1,
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
    },
  ],
  types: [
    {
      slot: 1,
      type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    },
    {
      slot: 2,
      type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    },
  ],
  weight: 69,
};

test("PokemonDetails renders with correct data", () => {
  const { getByText, getAllByText } = render(
    <PokemonDetails data={testData} />
  );

  const nameElement = getByText(/bulbasaur/i);
  expect(nameElement).toBeInTheDocument();

  const typeElement = getByText(/grass\/poison/i);
  expect(typeElement).toBeInTheDocument();

  const statElements = getAllByText(
    /hp|attack|defense|special-attack|special-defense|speed/i
  );
  expect(statElements.length).toBe(6);

  const abilityElements = getAllByText(/overgrow|chlorophyll/i);
  expect(abilityElements.length).toBe(2);
});
