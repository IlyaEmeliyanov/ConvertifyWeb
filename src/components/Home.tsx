
// Importing libraries
import { FC } from 'react'

// Importing components
import Header from './common/Header';
import Footer from './common/Footer';

interface HomeProps {
}

const Home:FC<HomeProps> = () => {

    return(
        <>
        <Header />
        <main className='mx-8 gap-8 xl:mx-96 lg:mx-48 md:flex-row flex-col mt-16 md:mt-36 flex justify-center items-center mb-8 md:mb-24'>
            <div className="md:w-1/3 w-full">
                <div className="flex justify-start items-center gap-2" style={{marginBottom: '1rem'}}>
                    <img width={55} height={55} className="logo" src={require("../images/logo.svg").default} alt="" />
                    <h1 className='font-semibold text-2xl text-gray-700'>Conv3rtify</h1>
                </div>
                <p className=' font-base text-xl text-gray-500 mb-8'>
                    📱 The most versatile mobile convert tool on the AppStore.
                    It's yet simple to use and very functional. 
                    <br /> <br /> 
                    It offers 2 sets of features  <b>😇 standard</b> and <b>😈 pro</b>.
                    <br />

                    App available for iPhone and iPad.
                </p>
                <button className='w-36'>
                    {/* <a href="https://apps.apple.com/us/app/conv3rtify/id1602343906?itsct=apps_box_link&itscg=30200">
                        <img className="" src={require("../images/download.svg").default} alt="" />
                    </a> */}
                    <a href="https://apps.apple.com/us/app/conv3rtify/id1602343906?itsct=apps_box_badge&amp;itscg=30200" className="app-store-btn"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1651017600&h=412fed4554af428dca5f99189105a054" alt="Download on the App Store" /></a>
                </button>
            </div>
            <div className='md:w-2/3 w-full'>
                <img className='w-full' src={require("../images/image.png")} alt="" />
            </div>
        </main>
        <Footer />
        </>
    );
}

export default Home;