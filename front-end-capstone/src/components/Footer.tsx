import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className='spacer-lg'>
            <div className='container'>

                <div className='col-4'>
                    <img src='/Logo.svg' alt='Little Lemon' />
                    <p>420 Starburst Rd. <br />Austin, TX</p>
                    <p>555-555-1234</p>
                    <p>contact@littlelemon.com</p>
                </div>

                <ul className='col-4'>
                    <li>
                        <Link to='/' className='lead'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <a  className="lead" href='#about'>About</a>
                    </li>
                    <li>
                        <a  className="lead" href='#menu'>Menu</a>
                    </li>
                    <li>
                        <Link to='/booking' className='lead'>
                            Reservation
                        </Link>
                    </li>
                    <li>
                        <a  className="lead" href='#home'>Order Online</a>
                    </li>
                    <li>
                        <a  className="lead" href='#home'>Login</a>
                    </li>
                </ul>



                <ul className='col-4'>
                    <li>
                        <a  className="lead" href='#home'>Instagram</a>
                    </li>
                    <li>
                        <a  className="lead" href='#home'>Yelp</a>
                    </li>
                    <li>
                        <a  className="lead" href='#home'>Facebook</a>
                    </li>
                    <li>
                        <a className="lead" href='#home'>Tiktok</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;