
import React from 'react';
import PhotoCard from './PhotoCard';

const Gallery = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Gray laptop computer",
      caption: "Power Computing",
      year: "1996"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Person using MacBook Pro",
      caption: "Macintosh Experience",
      year: "1998"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Woman using laptop",
      caption: "Think Different",
      year: "1997"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      alt: "Laptop on glass table",
      caption: "Studio Display",
      year: "1999"
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "MacBook with code",
      caption: "Hello World",
      year: "2001"
    },
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      alt: "Woman with laptop",
      caption: "Digital Life",
      year: "2000"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="photo-container">
        {photos.map((photo, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <PhotoCard
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              year={photo.year}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
