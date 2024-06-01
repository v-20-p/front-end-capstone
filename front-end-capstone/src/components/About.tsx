import MarioAndAdrianA from '../assets/Mario-and-Adrian-A.png';
import MarioAndAdrianB from '../assets/Mario-and-Adrian-B.png';

export const About = () => {
    return (
        <section id='about' className='spacer-lg'>
            <article className='container spacer-lg'>
                <div className='col-6'>
                    <h2 className='display'>Little Lemon</h2>
                    <h3 className='subtitle'>Chicago</h3>
                    <p className="spacer-sm">
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in
                        a lively but casual environment. The restaurant features a locally-sourced menu with daily
                        specials
                    </p>
                </div>
                <div className='col-3' style={{marginBottom: '-4rem', marginRight: '-1.5rem'}}>
                    <img src={MarioAndAdrianA} alt='' style={{width: '100%', height: 'auto'}} />
                </div>
                <div className='col-3' style={{marginTop: '-4rem', marginLeft: '-1.5rem'}}>
                    <img src={MarioAndAdrianB} alt='' style={{width: '100%', height: 'auto'}} />
                </div>
            </article>
        </section>
    );
}