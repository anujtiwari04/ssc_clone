import React from 'react';
import satyamevImg from '@/assets/Satyamev-Jayate.webp';
import sscLogoImg from '@/assets/sscLogo.webp';

interface EmblemProps {
  className?: string;
  size?: number;
  alt?: string;
}

/**
 * State Emblem of India (Satyamev Jayate WebP Asset)
 */
export const IndiaEmblem: React.FC<EmblemProps> = ({
  className = '',
  size = 44,
  alt = 'State Emblem of India - Satyamev Jayate',
}) => {
  return (
    <img
      src={satyamevImg}
      alt={alt}
      width={size}
      height={Math.round(size * 1.15)}
      className={`object-contain shrink-0 ${className}`}
      style={{
        width: `${size}px`,
        height: 'auto',
        maxHeight: `${Math.round(size * 1.25)}px`,
      }}
      loading="eager"
    />
  );
};

/**
 * Staff Selection Commission Official Logo (sscLogo WebP Asset)
 */
export const SscSeal: React.FC<EmblemProps> = ({
  className = '',
  size = 44,
  alt = 'Staff Selection Commission Logo',
}) => {
  return (
    <img
      src={sscLogoImg}
      alt={alt}
      width={size}
      height={size}
      className={`object-contain shrink-0 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      loading="eager"
    />
  );
};
