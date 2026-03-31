import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VharananiEditorialHero } from './pages/VharananiEditorialHero';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { PAIAManual } from './pages/PAIAManual';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VharananiEditorialHero />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfService />} />
        <Route path="/paia-manual" element={<PAIAManual />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
