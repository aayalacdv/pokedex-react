import React, { useEffect, useState } from 'react'
import { mapTypeToColor } from '../type-to-color/mapTypeToColor'




export interface PokemonCardProps {
    pokemonTypes: string[]
    name: string
    number: number
    imgUrl: string
  }
  
  interface TypeWrapperProps {
    pokemonType: string
    color: string
  }
  
  const TypeWrapper: React.FC<TypeWrapperProps> = (props) => {
  
    return (
      <div
        style={{ backgroundColor: props.color }}
        className={`w-3/4 h-[33%] rounded-xl `}>
        <p className='font-bold text-white flex items-center justify-center '> {props.pokemonType}</p>
      </div>
    )
  }
  
  export const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  
    const [colours, setColours] = useState<string[]>([])
    useEffect(() => {
      setColours(mapTypeToColor(props.pokemonTypes[0]))
    }, [])
  
    return (
      <div
        className='h-full rounded-xl shadow-md '
        style={{ backgroundColor: colours[0] }}
      >
  
        <div className='p-2'></div>
        <h1 className='text-white text-xl font-bold mx-2'> {props.name}</h1>
        <div className='p-2'></div>
  
        <div className='flex justify-around h-full'>
  
          <div className='mx-2 h-1/2 w-1/2 flex flex-col gap-2'>
            {props.pokemonTypes.map((type: string) => <TypeWrapper pokemonType={type} color={colours[1]} />)}
          </div>
  
          <div className='w-1/2  h-1/2 px-2'>
            <img className='w-20 h-20' src={props.imgUrl} alt="pokemon" />
          </div>
        </div>
  
      </div>
    )
  }