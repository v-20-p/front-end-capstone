import { SpecialCard } from "./Card";

import GreekSalad from '../assets/greek-salad.jpg'
import Bruchetta from '../assets/bruchetta.svg'
import LemonDessert from '../assets/lemon-dessert.jpg'

const SpecialData = [
    {
        img: GreekSalad,
        title: 'Greek Salad',
        price: '12.99',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons'
    },
    {
        img: Bruchetta,
        title: 'Bruchetta',
        price: '9.99',
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil"
    },
    {
        img: LemonDessert,
        title: 'Lemon Dessert',
        price: '5.99',
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined"
    },
]

export const Specials = () => {
    return (
        <section className='spacer-lg'>
                <div className='spacer-sm container between align-center col-12 spacer-sm'>
                    <h2 className='display'>Specials</h2>
                    <button aria-label="On Click" className='specials'>Online Menu</button>
                </div>

                <div className='container'>
                    {SpecialData.map((item) => (
                        <div key={item.title} className='col-4'>
                            <SpecialCard {...item} />
                        </div>
                    ))}
                </div>
            </section>
    )
}