import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PokemonCard, PokemonCardProps } from './components/PokemonCard';

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonCardProps[]>([])

  useEffect(() => {
    const arr: any = []
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(res => res.json())
      .then((res: any) => {
        res.results.forEach((element: any) => {
          const name = element.name
          fetch(element.url)
            .then(res => res.json())
            .then((p: any) => {

              const pokemon: PokemonCardProps = {
                name: name,
                pokemonTypes: p.types.map((t: any) => t.type.name),
                number: p.id,
                imgUrl: p.sprites.other.dream_world.front_default
              }
              setPokemons((prev) => [...prev, pokemon])
            })
        })
        console.log(pokemons)
      })

  }, [])

  return (

    <div className='App'>
      <ul className='grid grid-cols-2 gap-4 w-full h-full px-3'>
        {pokemons.map((p, index) =>
          <li className="" key={index}>
            <PokemonCard pokemonTypes={p.pokemonTypes} name={p.name} number={p.number} imgUrl={p.imgUrl} />
          </li>
        )}
      </ul>
    </div>
  );
}






export default App;
