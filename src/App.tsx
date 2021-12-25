

// Importing libraries
import { Fragment } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Importing components
import Header from './components/common/Header'
import Home from './components/Home'
import PrivacyPolicy from './components/PrivacyPolicy'

function App() {

  return (
      <Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Home bgSrc={"url(images/home.jpg)"} />}></Route>
          <Route path="privacy-policy" element={<PrivacyPolicy bgSrc={"url(images/privacy-policy.jpg)"}/>}></Route>
        </Routes>
      </Fragment>
  );
}

export default App;
