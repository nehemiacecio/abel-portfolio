import type { VideoItem } from '../data/content';
import './VideoSection.css';

interface VideoSectionProps {
  id?: string;
  title: string;
  videos: VideoItem[];
  showMainTitle?: boolean;
}

export function VideoSection({ id, title, videos, showMainTitle = false }: VideoSectionProps) {
  return (
    <section id={id} className="video-section">
      {showMainTitle ? (
        <h1 className="section-title">{title}</h1>
      ) : (
        <h2 className="subsection-title">{title}</h2>
      )}
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            {video.type === 'youtube' ? (
              <iframe
                src={video.src}
                title={video.title || `Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video controls preload="metadata">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
