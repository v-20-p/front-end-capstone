
import Basket from '../assets/Basket.svg'

export const SpecialCard = ({img, title, price, description}) => {

    return (
        <article className="card">
            <div className="img-container">
                <img src={img} alt={title} />
            </div>
            <div className="card-content">
                <div className="flex between card-header card-title">
                    <h3>{title}</h3>
                    <p>{price}</p>
                </div>
                <p className='spacer-sm'>{description}</p>

                <a role="button" className="flex specials between align-center" href="#">Order a Deliver
                    <img src={Basket} width={24} height={24} alt="Add to Cart" />
                </a>
            </div>
        </article>
    )
}

export const ReviewCard = ({rating, name, description}) => {

    return (
        <article className='card review-card'>
            <img src='/Logo.svg' alt='' />
            <div className='card-content'>
                <div className='flex between align-center'>
                    <h3 className='specials'>{name}</h3>
                    <p className='highlight'>{rating}/10</p>
                </div>
                <p>{description}</p>
                <a className='specials' href='#'>
                    Full review &rarr;
                </a>
            </div>
        </article>
    );
}