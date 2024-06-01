
import { ReviewCard } from "./Card";

const ReviewData = [
    {
        rating: 8,
        name: 'Bryan',
        description: 'saepe recusandae accusantium sapiente eveniet totam?'
    },
    {
        rating: 8,
        name: 'Kelsey',
        description: 'saepe recusandae accusantium sapiente eveniet totam?'
    },
    {
        rating: 5,
        name: 'Opal',
        description: 'saepe recusandae accusantium sapiente eveniet totam?'
    },
    {
        rating: 9,
        name: 'Rodney',
        description: 'saepe recusandae accusantium sapiente eveniet totam?'
    },
]

export const Reviews = () => {
    return (
        <section className='spacer-lg'>
                <h2 className='display container spacer-sm'>Reviews</h2>

                <div className='container'>
                    {ReviewData.map((review) => (
                        <div key={review.name} className='col-3'>
                            <ReviewCard {...review} />
                        </div>
                    ))}
                </div>
            </section>
    )
}