import {
  Header,
  Hero,
  WorkExperience,
  Skills,
  Photography,
  VideoSection,
  Documentation,
  Contact,
  Loading,
} from './components';
import {
  videographerVideos,
  assistantDirectorVideos,
  videoEditorVideos,
} from './data/content';
import './styles/globals.css';

function App() {
  return (
    <>
      <Loading />
      <Header />
      <main>
        <Hero />
        <WorkExperience />
        <Skills />
        <Photography />
        <div id="videographer">
          <VideoSection
            title="Videographer"
            videos={videographerVideos}
            showMainTitle
          />
          <VideoSection
            title="Assistant Director"
            videos={assistantDirectorVideos}
          />
          <VideoSection
            title="Video Editor"
            videos={videoEditorVideos}
          />
        </div>
        <Documentation />
        <Contact />
      </main>
    </>
  );
}

export default App;
