
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface PhotoCardProps {
  src: string;
  alt: string;
  caption: string;
  year?: string;
}

const PhotoCard = ({ src, alt, caption, year }: PhotoCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="group overflow-hidden rounded-md vintage-shadow bg-apple-white border border-apple-silverGray/10">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={src}
          alt={alt}
          className={cn(
            "object-cover w-full h-full hover-scale",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-apple-lightGray">
            <div className="animate-pulse w-10 h-10 rounded-full bg-apple-silverGray/30"></div>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-lg font-light text-apple-neutralGray">{caption}</p>
        {year && <p className="text-sm text-apple-neutralGray/60 mt-1">{year}</p>}
      </div>
    </div>
  );
};

export default PhotoCard;
