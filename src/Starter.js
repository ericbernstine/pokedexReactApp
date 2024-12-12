import Image from './Image';
import './App.css';

const Starter = ({name, pokeNum, type, height, weight}) => {
    return(
        <div className='starter'>
            <h3>{name}</h3>
            <p>Pokedex: #{pokeNum}</p>
            <p>Type: {type}</p>
            <div className='line'></div>
            <div className='staterStats'>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
            </div>
        </div>
    )
}

export default Starter