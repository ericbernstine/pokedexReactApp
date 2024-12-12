import Image from "../Image"
import starterImage from '../Images/fullLogo.png'
import char from '../Images/char.gif'
import squ from '../Images/squirtle.gif'
import bulb from '../Images/bulb.gif'
import '../App.css';
import Starter from '../Starter';
import starterData from '../data/starters.json'
import { useState } from "react";


const Home = () => {
  const [starterMessage, setStarterMessage] = useState('Choose your Starter')
  const [welcomeImage, setWelcomeImage] = useState(starterImage)

  const changeMessage = (name) => {
    setStarterMessage(`${name} Great Choice!`)

    switch (name.toLowerCase()){
      case 'charmander':
        setWelcomeImage(char)
        break;
      case 'squirtle':
        setWelcomeImage(squ)
        break;
      case 'bulbasaur':
        setWelcomeImage(bulb)
        break;
    }
  }
    return (
      <div>
        <h1>Welcome to the Pokemon Web App!</h1>
        <h4>{starterMessage}</h4>
        <div className="welcomeImg">
        <img src={welcomeImage}></img>
        </div>
        <div className="container">
          {starterData.starters.map((starter) => (
            <div className="starterWrap" key={starter.id}>
              <img src={starter.img} alt={starter.name} className="starterImage"/>
              <Starter
                name={starter.name}
                pokeNum={starter.num}
                type={starter.type.join(', ')}
                height={starter.height}
                weight={starter.weight}
              />
              <div className="homeButton">
              <button onClick={() => changeMessage(starter.name)}>Click Me</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Home