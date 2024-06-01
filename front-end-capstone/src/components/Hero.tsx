import { Link } from "react-router-dom";
import FoodImg from '../assets/restauranfood.jpg'

const Hero = () => {

    return  (
    <section id="hero">
        <div className="container spacer-lg" >
            <div className="col-6 flex-col between flex">
                <div>
                <h1 className="display">Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                </div>
                <p>We are a family owned and operated Mediterranean restaurant, focused on traditional recipes served with a modern twist </p>
                <button aria-label="On Click" className="specials">
                    <Link to="/booking">Reserve a Table</Link>
                </button>
            </div>
            <div className="col-6 img-container">
                <img src={FoodImg} alt="Antipasta board" />
            </div>

        </div>

    </section>
    )
}

export default Hero;