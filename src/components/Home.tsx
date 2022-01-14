
// Importing libraries
import { FC } from 'react'

// Importing css
import '../css/home.css'

interface HomeProps {
}

const Home:FC<HomeProps> = () => {

    return(
        <main className='main'>
            <div className="left">
                <div className="logo__container">
                    <img width={55} height={55} className="logo" src={require("../images/logo.svg").default} alt="" />
                    <h1 className='title'>Conv3rtify</h1>
                </div>
                <p className='desc'>
                    📱 The most versatile mobile convert tool on the AppStore.
                    It's yet simple to use and very functional. 
                    <br /> <br /> 
                    It offers 2 set of features  <strong>😇 standard</strong> and <strong>😈 pro</strong>. So all the needs can be satisfied. <br />
                    <br />

                    App available for iPhone and iPad.
                </p>
                <button className='btn'>
                    <a href="https://apple.com">
                        <img className="btn__img" src={require("../images/download.svg").default} alt="" />
                    </a>
                </button>
            </div>
            <div className='right'>
                <img className='img' src={require("../images/image.png")} alt="" />
            </div>
        </main>
    );
}

export default Home;