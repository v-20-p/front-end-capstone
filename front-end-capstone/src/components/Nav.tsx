// import Logo from '../assets/Logo.svg'

import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <header className='container spacer-sm'>
            <Link to='/'>
                <img src={"/Logo.svg"} />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/' className='lead'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <a className='lead' href='#about'>
                            About
                        </a>
                    </li>
                    <li>
                        <a className='lead' href='#menu'>
                            Menu
                        </a>
                    </li>
                    <li>
                        <Link to='/booking' className='lead'>
                            Reservation
                        </Link>
                    </li>
                    <li>
                        <a className='lead' href='#home'>
                            Order Online
                        </a>
                    </li>
                    <li>
                        <a className='lead' href='#home'>
                            Login
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;