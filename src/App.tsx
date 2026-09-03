import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { CandidateDashboard } from '@/pages/CandidateDashboard';
import { NotFound } from '@/pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
