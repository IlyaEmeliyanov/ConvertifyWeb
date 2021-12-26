
// Importing libraries
import { FC } from 'react'

// Importing css
import '../css/home.css'

interface HomeProps {
    bgSrc: string
}

const Home:FC<HomeProps> = ({bgSrc}) => {

    document.body.style.backgroundImage = bgSrc;

    return(
        <main className='main'>
            <img className='main__img' src={require("../images/image.png")} alt="" />
            <h1 className='main__title'>Convertify <span className="title__version">1.0</span></h1>
            <p className='main__desc'>We’re glad to present the most perfect <br /> mobile convert tool on the market</p>
        </main>
    );
}

export default Home;