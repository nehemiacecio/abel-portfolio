import { useState } from 'react';
import { documentationCategories } from '../data/content';
import { Lightbox } from './Lightbox';
import './Documentation.css';

export function Documentation() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="documentation" className="documentation-section">
      <h1 className="section-title">Documentation</h1>

      {documentationCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="documentation-category">
          <h2 className="category-title">{category.title}</h2>
          <div className="documentation-grid">
            {category.photos.map((photo, photoIndex) => (
              <div
                key={photoIndex}
                className="documentation-item"
                onClick={() => setSelectedImage(photo.src)}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      ))}

      <Lightbox
        isOpen={!!selectedImage}
        imageSrc={selectedImage || ''}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
