

// Importing libraries
import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

// Importing components
import Home from './components/Home'
import TermsConditions from './components/TermsConditions'
import PrivacyPolicy from './components/PrivacyPolicy'

function App() {

  return (
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/terms-conditions" element={<TermsConditions />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        </Routes>
      </Fragment>
  );
}

export default App;
