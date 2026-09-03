import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Eye, EyeOff, RotateCw, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'candidate' | 'admin';
}

const CAPTCHA_POOL = ['23VLf', 'fcR6Z', '8mN4P', '9kX2W', '7rT5Y', '4bQ9H'];

const EXPECTED_REG_NO = '10023499537';
const EXPECTED_PASSWORD = 'Abhishek@1234';

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'candidate',
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'candidate' | 'admin'>(defaultTab);

  // Candidate fields
  const [candidateRegNo, setCandidateRegNo] = useState('');
  const [candidatePassword, setCandidatePassword] = useState('');
  const [candidateCaptcha, setCandidateCaptcha] = useState('');
  const [showCandidatePassword, setShowCandidatePassword] = useState(false);

  // Admin fields
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminCaptcha, setAdminCaptcha] = useState('');
  const [showAdminPassword, setShowAdminPassword] = useState(false);

  // Captcha State
  const [captchaIndex, setCaptchaIndex] = useState(0);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
      setSubmittedMessage(null);
      setErrorMessage(null);
      // Reset or randomize captcha
      setCaptchaIndex(Math.floor(Math.random() * CAPTCHA_POOL.length));
    }
  }, [isOpen, defaultTab]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const currentCaptcha = CAPTCHA_POOL[captchaIndex];

  const refreshCaptcha = () => {
    setCaptchaIndex((prev) => (prev + 1) % CAPTCHA_POOL.length);
    setCandidateCaptcha('');
    setAdminCaptcha('');
    setErrorMessage(null);
  };

  const handleFillDemo = () => {
    setCandidateRegNo(EXPECTED_REG_NO);
    setCandidatePassword(EXPECTED_PASSWORD);
    setCandidateCaptcha(currentCaptcha);
    setErrorMessage(null);
  };

  const handleCandidateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate fields presence
    if (!candidateRegNo.trim() || !candidatePassword.trim() || !candidateCaptcha.trim()) {
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    // Validate Captcha
    if (candidateCaptcha.trim().toLowerCase() !== currentCaptcha.toLowerCase()) {
      setErrorMessage('Incorrect Captcha code. Please enter the exact characters displayed.');
      return;
    }

    // Validate Candidate Credentials
    if (
      candidateRegNo.trim() === EXPECTED_REG_NO &&
      candidatePassword === EXPECTED_PASSWORD
    ) {
      setSubmittedMessage('Credentials verified. Opening Candidate Dashboard...');
      setTimeout(() => {
        onClose();
        navigate('/candidate/dashboard');
      }, 700);
    } else {
      setErrorMessage(
        'Invalid Registration Number or Password. Please ensure Registration Number is 10023499537 and Password is Abhishek@1234.'
      );
    }
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!adminUsername.trim() || !adminPassword.trim() || !adminCaptcha.trim()) {
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    if (adminCaptcha.trim().toLowerCase() !== currentCaptcha.toLowerCase()) {
      setErrorMessage('Incorrect Captcha code.');
      return;
    }

    setSubmittedMessage('One Time Password (OTP) sent to authorized administrator mobile (Demo UI).');
    setTimeout(() => {
      setSubmittedMessage(null);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-[440px] sm:max-w-[460px] bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button: Circular (X) icon in top-right */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 h-6 w-6 rounded-full border border-slate-300 text-slate-500 hover:text-slate-800 hover:border-slate-400 flex items-center justify-center transition-colors z-10"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 pt-5">
          {/* Tabs: Candidate | Admin */}
          <div className="flex border-b border-slate-200 mb-5">
            <button
              type="button"
              onClick={() => {
                setActiveTab('candidate');
                setSubmittedMessage(null);
                setErrorMessage(null);
              }}
              className={`flex-1 py-2.5 text-center text-sm font-semibold transition-all relative ${
                activeTab === 'candidate'
                  ? 'text-[#8b2332]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Candidate
              {activeTab === 'candidate' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#8b2332] rounded-t-full" />
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('admin');
                setSubmittedMessage(null);
                setErrorMessage(null);
              }}
              className={`flex-1 py-2.5 text-center text-sm font-semibold transition-all relative ${
                activeTab === 'admin'
                  ? 'text-[#8b2332]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Admin
              {activeTab === 'admin' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#8b2332] rounded-t-full" />
              )}
            </button>
          </div>

          {/* Success Banner */}
          {submittedMessage && (
            <div className="mb-4 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>{submittedMessage}</span>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-4 rounded-lg bg-rose-50 border border-rose-200 p-3 text-xs text-rose-800 flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* TAB 1: CANDIDATE */}
          {activeTab === 'candidate' && (
            <form onSubmit={handleCandidateSubmit} className="space-y-4">
              {/* Username (Registration Number) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs sm:text-[13px] font-medium text-slate-700">
                    Username (Registration Number) <span className="text-red-500">*</span>
                  </label>
                  {/* Quick autofill helper */}
                  <button
                    type="button"
                    onClick={handleFillDemo}
                    className="text-[10px] text-[#8b2332] hover:underline flex items-center gap-1 font-semibold"
                    title="Fill test credentials"
                  >
                    <Sparkles className="h-2.5 w-2.5" />
                    <span>Autofill Demo</span>
                  </button>
                </div>
                <input
                  type="text"
                  value={candidateRegNo}
                  onChange={(e) => setCandidateRegNo(e.target.value)}
                  placeholder="Registration Number"
                  required
                  className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#8b2332] focus:outline-none focus:ring-1 focus:ring-[#8b2332] transition-colors font-mono"
                />
              </div>

              {/* Password (SSC Registration Password) */}
              <div>
                <label className="block text-xs sm:text-[13px] font-medium text-slate-700 mb-1.5">
                  Password (SSC Registration Password) <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center rounded-md border border-slate-300 overflow-hidden focus-within:border-[#8b2332] focus-within:ring-1 focus-within:ring-[#8b2332]">
                  <input
                    type={showCandidatePassword ? 'text' : 'password'}
                    value={candidatePassword}
                    onChange={(e) => setCandidatePassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none font-mono"
                  />
                  {/* Eye toggle button with soft pink container */}
                  <button
                    type="button"
                    onClick={() => setShowCandidatePassword(!showCandidatePassword)}
                    className="h-full px-3 py-2.5 bg-rose-50/70 hover:bg-rose-100/80 text-rose-600 border-l border-slate-200 transition-colors flex items-center justify-center"
                    title={showCandidatePassword ? 'Hide password' : 'Show password'}
                  >
                    {showCandidatePassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Forgot Password Link */}
                <div className="text-right mt-1.5">
                  <a
                    href="#forgot-password"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Forgot Password / Reset OTR flow');
                    }}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Forgot Password
                  </a>
                </div>
              </div>

              {/* Captcha Display & Refresh */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex-1 bg-slate-100 border border-slate-200 rounded-md py-2 px-4 text-center select-none shadow-inner">
                  <span className="font-mono text-lg font-bold tracking-widest text-slate-800 line-through decoration-slate-400">
                    {currentCaptcha}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#8b2332] transition-colors p-2 rounded hover:bg-slate-100 cursor-pointer"
                >
                  <RotateCw className="h-3.5 w-3.5" />
                  <span>Refresh</span>
                </button>
              </div>

              {/* Captcha Input */}
              <div>
                <label className="block text-xs sm:text-[13px] font-medium text-slate-700 mb-1.5">
                  Captcha <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={candidateCaptcha}
                  onChange={(e) => setCandidateCaptcha(e.target.value)}
                  placeholder="Captcha"
                  required
                  className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#8b2332] focus:outline-none focus:ring-1 focus:ring-[#8b2332] transition-colors font-mono"
                />
              </div>

              {/* Submit Button: Login */}
              <button
                type="submit"
                className="w-full bg-[#8b2332] hover:bg-[#721c27] active:bg-[#5b141e] text-white font-semibold py-2.5 rounded-lg shadow-sm transition-all duration-150 text-sm mt-3 cursor-pointer"
              >
                Login
              </button>

              {/* New User ? Register Now */}
              <div className="text-center pt-2 text-xs sm:text-[13px] text-slate-600">
                <span>New User ? </span>
                <a
                  href="#register-now"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Redirecting to One Time Registration (OTR) Portal...');
                  }}
                  className="font-bold text-[#8b2332] hover:underline"
                >
                  Register Now
                </a>
              </div>
            </form>
          )}

          {/* TAB 2: ADMIN */}
          {activeTab === 'admin' && (
            <form onSubmit={handleAdminSubmit} className="space-y-4">
              {/* Username */}
              <div>
                <label className="block text-xs sm:text-[13px] font-medium text-slate-700 mb-1.5">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={adminUsername}
                  onChange={(e) => setAdminUsername(e.target.value)}
                  placeholder="Username"
                  required
                  className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#8b2332] focus:outline-none focus:ring-1 focus:ring-[#8b2332] transition-colors"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs sm:text-[13px] font-medium text-slate-700 mb-1.5">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center rounded-md border border-slate-300 overflow-hidden focus-within:border-[#8b2332] focus-within:ring-1 focus-within:ring-[#8b2332]">
                  <input
                    type={showAdminPassword ? 'text' : 'password'}
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                  {/* Eye toggle button with soft pink container */}
                  <button
                    type="button"
                    onClick={() => setShowAdminPassword(!showAdminPassword)}
                    className="h-full px-3 py-2.5 bg-rose-50/70 hover:bg-rose-100/80 text-rose-600 border-l border-slate-200 transition-colors flex items-center justify-center"
                    title={showAdminPassword ? 'Hide password' : 'Show password'}
                  >
                    {showAdminPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Captcha Display & Refresh */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex-1 bg-slate-100 border border-slate-200 rounded-md py-2 px-4 text-center select-none shadow-inner">
                  <span className="font-mono text-lg font-bold tracking-widest text-slate-800 line-through decoration-slate-400">
                    {currentCaptcha}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#8b2332] transition-colors p-2 rounded hover:bg-slate-100 cursor-pointer"
                >
                  <RotateCw className="h-3.5 w-3.5" />
                  <span>Refresh</span>
                </button>
              </div>

              {/* Captcha Input */}
              <div>
                <label className="block text-xs sm:text-[13px] font-medium text-slate-700 mb-1.5">
                  Captcha <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={adminCaptcha}
                  onChange={(e) => setAdminCaptcha(e.target.value)}
                  placeholder="Captcha"
                  required
                  className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#8b2332] focus:outline-none focus:ring-1 focus:ring-[#8b2332] transition-colors"
                />
              </div>

              {/* Submit Button: Send OTP */}
              <button
                type="submit"
                className="w-full bg-[#8b2332] hover:bg-[#721c27] active:bg-[#5b141e] text-white font-semibold py-2.5 rounded-lg shadow-sm transition-all duration-150 text-sm mt-3 cursor-pointer"
              >
                Send OTP
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default AuthModal;
