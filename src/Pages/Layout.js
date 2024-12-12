import { Outlet, Link } from 'react-router-dom';
import '../App.css';
import Image from '../Image';
import logo from '../Images/pokemonlogo.png'

const Layout = () => {
    return (
        <div>
            <div className='navBar'>
                <Image src={logo} className={'logo'}/>
                <p>
                    <Link to='/'>Home</Link>
                </p>
                <p>
                    <Link to='/pokemon'>Pokemon</Link>
                </p>
                <p>
                    <Link to='/updates'>Updates</Link>
                </p>
                <p>
                    <Link to='/contact'>Contact</Link>
                </p>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout;