import React, { useState } from 'react';
import { optimizeImageUrl } from '../utils/inkaeduLogic';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  targetWidth?: number;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  targetWidth = 480,
  priority = false,
  className = '',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  const webpSrc = optimizeImageUrl(src, targetWidth, 'webp');
  const fallbackJpgSrc = optimizeImageUrl(src, targetWidth, 'jpg');

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-surface-container-high text-primary flex items-center justify-center ${className}`}
      >
        <span className="material-symbols-outlined text-[20px]">image</span>
      </div>
    );
  }

  return (
    <picture className="contents">
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={fallbackJpgSrc} type="image/jpeg" />
      <img
        src={webpSrc}
        alt={alt}
        width={targetWidth}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={className}
        {...rest}
      />
    </picture>
  );
};
