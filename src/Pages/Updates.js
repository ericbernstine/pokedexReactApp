import '../App.css';
import Image from '../Image';
import Legendslogo from '../Images/legendsLogo.png'
const Updates = () => {
    return (
        <div>
            <h1>Recent Pokemon News!</h1>
            <div className='updates'>
                <Image src={Legendslogo} />
                <h4>Release Date: 2025</h4>
                <div className='updatesDesc'>
                    <p>
                    Pokémon Legends: Z-A is an upcoming 2025 video game developed by Game Freak and published by Nintendo. Pokémon Legends: Z-A, a new adventure set within Lumiose City, will launch on Nintendo Switch systems in 2025
                    </p>
                    <a href='https://legends.pokemon.com/en-us/'a>Click to learn more</a>
                </div>
            </div>
        </div>
    )
}

export default Updates