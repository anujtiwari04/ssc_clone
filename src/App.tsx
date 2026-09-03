import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { CandidateDashboard } from '@/pages/CandidateDashboard';
import { AdmissionCertificateStatus } from '@/pages/AdmissionCertificateStatus';
import { ResultStatus } from '@/pages/ResultStatus';
import { NotFound } from '@/pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
        <Route path="/candidate/admission-certificate-status" element={<AdmissionCertificateStatus />} />
        <Route path="/candidate/admission-certificate" element={<AdmissionCertificateStatus />} />
        <Route path="/candidate/result-status" element={<ResultStatus />} />
        <Route path="/candidate/result" element={<ResultStatus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
