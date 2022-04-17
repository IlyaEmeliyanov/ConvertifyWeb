

// Importing libraries
import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

// Importing components
import Home from './components/Home'
import TermsConditions from './components/TermsConditions'
import PrivacyPolicy from './components/PrivacyPolicy'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Home />}/>
      </Routes>
  );
}

export default App;
