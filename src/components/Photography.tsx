import { useState } from 'react';
import { photographyImages } from '../data/content';
import { Lightbox } from './Lightbox';
import './Photography.css';

export function Photography() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="photography" className="photography-section">
      <h1 className="section-title">Photography</h1>
      <div className="photo-grid">
        {photographyImages.map((photo, index) => (
          <div
            key={index}
            className="photo-item"
            onClick={() => setSelectedImage(photo.src)}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
        ))}
      </div>
      <Lightbox
        isOpen={!!selectedImage}
        imageSrc={selectedImage || ''}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
