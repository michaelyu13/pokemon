import { useEffect, useRef, useState } from 'react';
import PokemonFilter from './components/FilterAndSort/PokemonFilter';
import PokemonList from './components/PokemonList';
import axios from 'axios';
import './App.css';

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=30';

const App = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const sideEffectRanOnceAfterInitialRender = useRef(false);

    useEffect(() => {
        if (sideEffectRanOnceAfterInitialRender.current === false) {
            getApiData();
            sideEffectRanOnceAfterInitialRender.current = true;
        }
    }, []);

    const getApiData = async () => {
        try {
            const response = await axios.get(POKEMON_API_URL);
            getPokemonData(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    const getPokemonData = async (response) => {
        response.map(async (pokemon) => {
            const result = await axios.get(pokemon.url);

            const data = (data) => {
                data = [...data, result.data];
                data.sort((a, b) => a.id - b.id);
                return data;
            };

            setPokemonData(data);
        });
    };

    return (
        <>
            <header>
                <h1 className="my-8 text-center text-6xl">Pokémon</h1>
            </header>
            <main className="mx-auto max-w-7xl">
                <PokemonFilter pokemonData={pokemonData} setPokemonData={setPokemonData} />
                <PokemonList pokemonData={pokemonData} />
            </main>
        </>
    );
};

export default App;
