import React from 'react';

interface EmblemProps {
  className?: string;
  size?: number;
}

/**
 * State Emblem of India (Ashoka Lion Capital representation)
 */
export const IndiaEmblem: React.FC<EmblemProps> = ({ className = '', size = 44 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-slate-800 ${className}`}
      aria-label="State Emblem of India"
    >
      {/* Ashoka Lion Representation - Stylized Government of India Crest */}
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Central Lion Head */}
        <path d="M42 20C42 14 50 10 50 10C50 10 58 14 58 20C58 24 55 27 50 28C45 27 42 24 42 20Z" fill="currentColor" fillOpacity="0.1" />
        <circle cx="50" cy="18" r="4" fill="currentColor" />
        <path d="M46 24C48 26 52 26 54 24" />

        {/* Left Lion Head */}
        <path d="M26 26C24 20 31 16 34 17C37 18 39 23 37 28C35 32 30 33 26 26Z" fill="currentColor" fillOpacity="0.1" />
        <circle cx="31" cy="22" r="3" fill="currentColor" />
        <path d="M28 27C30 29 33 28 34 27" />

        {/* Right Lion Head */}
        <path d="M74 26C76 20 69 16 66 17C63 18 61 23 63 28C65 32 70 33 74 26Z" fill="currentColor" fillOpacity="0.1" />
        <circle cx="69" cy="22" r="3" fill="currentColor" />
        <path d="M66 27C67 28 70 29 72 27" />

        {/* Mane and Body structure */}
        <path d="M30 35C30 45 37 55 42 58L50 62L58 58C63 55 70 45 70 35" />
        <path d="M44 32C44 42 47 50 50 52C53 50 56 42 56 32" />
        <path d="M36 40C40 45 44 48 50 48C56 48 60 45 64 40" />

        {/* Abacus Base with Ashoka Chakra */}
        <rect x="20" y="65" width="60" height="18" rx="2" fill="currentColor" fillOpacity="0.15" />
        
        {/* Ashoka Chakra in Central Abacus */}
        <circle cx="50" cy="74" r="6" strokeWidth="1.5" />
        <circle cx="50" cy="74" r="1.5" fill="currentColor" />
        {/* Chakra Spokes */}
        <line x1="50" y1="68" x2="50" y2="80" strokeWidth="1" />
        <line x1="44" y1="74" x2="56" y2="74" strokeWidth="1" />
        <line x1="46" y1="70" x2="54" y2="78" strokeWidth="1" />
        <line x1="46" y1="78" x2="54" y2="70" strokeWidth="1" />

        {/* Bull on left of abacus */}
        <path d="M28 77C26 73 29 71 31 73C33 74 34 77 34 77" strokeWidth="1.5" />
        
        {/* Horse on right of abacus */}
        <path d="M66 77C66 73 69 71 71 73C73 74 74 77 74 77" strokeWidth="1.5" />

        {/* Lotus Bell Base */}
        <path d="M24 83C24 95 35 100 50 100C65 100 76 95 76 83" fill="currentColor" fillOpacity="0.1" />
        <path d="M30 84C35 93 42 96 50 96C58 96 65 93 70 84" />
        <path d="M40 84C43 91 47 94 50 94C53 91 57 94 60 84" />

        {/* Pedestal line */}
        <line x1="16" y1="102" x2="84" y2="102" strokeWidth="3" />
      </g>
      
      {/* Satyameva Jayate (सत्यमेव जयते) Inscription */}
      <text
        x="50"
        y="114"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="currentColor"
        fontFamily="sans-serif"
        letterSpacing="0.5"
      >
        सत्यमेव जयते
      </text>
    </svg>
  );
};

/**
 * Staff Selection Commission Round Seal
 */
export const SscSeal: React.FC<EmblemProps> = ({ className = '', size = 44 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-maroon-800 ${className}`}
      aria-label="Staff Selection Commission Seal"
    >
      <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="3" fill="#ffffff" />
      <circle cx="50" cy="50" r="41" stroke="#b45309" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Circular text representation */}
      <path
        id="textPath"
        d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
        fill="none"
      />
      
      {/* Central Emblem Monogram */}
      <g fill="currentColor">
        <circle cx="50" cy="50" r="18" fill="#800000" />
        {/* Ashoka Chakra in center */}
        <circle cx="50" cy="50" r="12" fill="#ffffff" />
        <circle cx="50" cy="50" r="4" fill="#800000" />
        <line x1="50" y1="38" x2="50" y2="62" stroke="#800000" strokeWidth="1.5" />
        <line x1="38" y1="50" x2="62" y2="50" stroke="#800000" strokeWidth="1.5" />
        <line x1="42" y1="42" x2="58" y2="58" stroke="#800000" strokeWidth="1.5" />
        <line x1="42" y1="58" x2="58" y2="42" stroke="#800000" strokeWidth="1.5" />
      </g>

      {/* Decorative stars */}
      <circle cx="20" cy="50" r="2" fill="#b45309" />
      <circle cx="80" cy="50" r="2" fill="#b45309" />
    </svg>
  );
};
