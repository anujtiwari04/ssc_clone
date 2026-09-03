import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home as HomeIcon, AlertCircle } from 'lucide-react';
import { IndiaEmblem, SscSeal } from '@/components/common/Emblem';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] px-4 text-center">
      <div className="flex items-center gap-3 mb-6">
        <SscSeal size={48} />
        <div className="h-8 w-px bg-slate-300" />
        <IndiaEmblem size={44} />
      </div>

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-maroon-50 text-maroon-800 mb-4 border border-maroon-200">
        <AlertCircle className="h-8 w-8" />
      </div>

      <span className="text-xs font-bold tracking-wider uppercase text-maroon-800">
        404 - Page Not Found
      </span>
      <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
        Resource Not Found
      </h1>
      <p className="mt-3 max-w-md text-xs sm:text-sm text-slate-600">
        The requested URL or examination resource is not available or has been relocated in accordance with SSC portal archive policies.
      </p>

      <div className="mt-6">
        <Link to="/">
          <Button variant="default" size="default" className="gap-2">
            <HomeIcon className="h-4 w-4" />
            <span>Return to SSC Portal Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
