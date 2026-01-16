export interface WorkExperience {
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
}

export interface Skill {
  text: string;
}

export interface VideoItem {
  type: 'youtube' | 'local';
  src: string;
  title?: string;
}

export interface PhotoItem {
  src: string;
  alt: string;
}

export interface DocumentationCategory {
  title: string;
  photos: PhotoItem[];
}

export const personalInfo = {
  name: 'Abel Windrawan',
  title: 'Portfolio',
  bio: `I am currently a final year student majoring in Journalistic at Multimedia Nusantara University. I am a creative, hard working, and responsible person that you can rely on. Furthermore, I also love to explore a new things to gain knowledges and more experiences. I am interested in a job related to broadcasting, event, and film production.`,
  phone: '(+62) 812-7421-2893',
  email: 'Abelw39@gmail.com',
  social: {
    instagram: 'https://www.instagram.com/abelwindrawan04/',
    linkedin: 'https://www.linkedin.com/in/abel-windrawan-9b0284137/',
  },
  profileImage: '/profile.jpg',
};

export const workExperiences: WorkExperience[] = [
  {
    company: 'NET Mediatama Televisi',
    location: 'Jakarta, Indonesia',
    period: 'Aug 2023 - Nov 2023',
    type: 'Internship',
    responsibilities: [
      'Editing Television programs for "Tonight Show" and "Tonight Show Premiere" for Youtube',
      'Editing "Ruang Kang Dede" for Youtube',
      'Editing "Fakta Terkini" news program',
      'Editing for "86" NET Tv program for two and a half months',
      'Being talent for Huawei video ads on "Fakta +62"',
    ],
  },
  {
    company: 'Ceritera Storytelling Agency',
    location: 'Jakarta, Indonesia',
    period: 'May 2023 - Jun 2023',
    type: 'Freelancer',
    responsibilities: [
      '1st Assistant Director for VITA FOAM Company Profile Video',
      'Make Schedules for Shooting day',
      'Workshop for talent',
      'Do Discuss to Director for shoot',
      'Directing for main and supporting talent',
    ],
  },
  {
    company: 'Ceritera Storytelling Agency',
    location: 'Jakarta, Indonesia',
    period: 'Nov 2022 - Dec 2022',
    type: 'Freelancer',
    responsibilities: [
      '1st Assistant Director for "GOJEK TIPS PINTAR" Ads Project',
      'Make Schedules for Shooting day',
      'Workshop for talent',
      'Do Discuss to Director for shoot',
      'Directing for main and supporting talent',
    ],
  },
  {
    company: 'MD ENTERTAINMENT',
    location: 'Jakarta, Indonesia',
    period: 'Mar 2022 - Jun 2022',
    type: 'Freelancer',
    responsibilities: [
      '3rd Assistant Director for "Antares" WeTV Series and "Mumun" Movie',
      'Making script breakdown',
      'Discuss with Director for shot',
      'Directing for supporting talent',
    ],
  },
  {
    company: 'Prambors Radio Jakarta',
    location: 'Jakarta, Indonesia',
    period: 'Aug 2021 - Jan 2022',
    type: 'Internship',
    responsibilities: [
      'Scripting and audio editing "What\'s On" and "Ini Bisnis Gue" programs',
      'Editing program and interview results',
      'Editing Ads (SPOT)',
    ],
  },
];

export const skills: Skill[] = [
  { text: 'Operate DAW (Adobe Audition, FL Studio, Cubase 5).' },
  { text: 'Mixing and Mastering audio.' },
  { text: 'Writing drama and marketing scripts.' },
  { text: 'Operating the Camera for Photo or Video.' },
  { text: 'Use video editing programs such as Adobe Premiere Pro, Capcut, and Sony Vegas.' },
  { text: 'Use photo editing programs such as Canva and Photoshop.' },
  { text: 'Operate MS Word, Power Point, Excel well.' },
];

export const photographyImages: PhotoItem[] = [
  { src: '/foto12.jpg', alt: 'Photography' },
  { src: '/foto10.jpg', alt: 'Photography' },
  { src: '/foto13.jpg', alt: 'Photography' },
  { src: '/foto15.jpg', alt: 'Photography' },
  { src: '/foto14.jpg', alt: 'Photography' },
  { src: '/foto11.jpg', alt: 'Photography' },
  { src: '/Q2.jpg', alt: 'Photography' },
  { src: '/Q6.jpg', alt: 'Photography' },
  { src: '/foto3.jpg', alt: 'Photography' },
  { src: '/foto4.jpg', alt: 'Photography' },
  { src: '/foto1.jpg', alt: 'Photography' },
  { src: '/Q3.jpg', alt: 'Photography' },
  { src: '/Q5.jpg', alt: 'Photography' },
  { src: '/Q7.jpg', alt: 'Photography' },
  { src: '/Q8.jpg', alt: 'Photography' },
  { src: '/Q1.jpg', alt: 'Photography' },
  { src: '/Q4.jpg', alt: 'Photography' },
];

export const videographerVideos: VideoItem[] = [
  { type: 'local', src: '/721208142.141685.mp4', title: 'Videography Sample 1' },
  { type: 'local', src: '/KENNY DJAFAR MC draft 4.mp4', title: 'Kenny Djafar MC' },
  { type: 'local', src: '/721208142.374139.mp4', title: 'Videography Sample 2' },
];

export const assistantDirectorVideos: VideoItem[] = [
  { type: 'youtube', src: 'https://www.youtube.com/embed/EVhkmsdfJw0', title: 'AD Work 1' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/I4MuZyJkdv8', title: 'AD Work 2' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/6xrUJXX_DXQ', title: 'AD Work 3' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/MEyFzaUlAFA', title: 'AD Work 4' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/J47jYO614os', title: 'AD Work 5' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/Iy0XfEwYOTQ', title: 'AD Work 6' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/DDP0zvQLLNQ', title: 'AD Work 7' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/58BNZWQzIzU', title: 'AD Work 8' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/xGqtmVX4Pq8', title: 'AD Work 9' },
];

export const videoEditorVideos: VideoItem[] = [
  { type: 'youtube', src: 'https://www.youtube.com/embed/Mpey8wOBoys', title: 'Editor Work 1' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/C7NANYbIPQY', title: 'Editor Work 2' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/RUotqDXnmOE', title: 'Editor Work 3' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/Tfe6EdHWm0I', title: 'Editor Work 4' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/RF4GUuoqOOM', title: 'Editor Work 5' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/d4IbSLtz6No', title: 'Editor Work 6' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/UIs0U4q5T2k', title: 'Editor Work 7' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/vFmSJRNVhak', title: 'Editor Work 8' },
  { type: 'local', src: '/IG_1.mp4', title: 'Instagram Reel 1' },
  { type: 'local', src: '/IG_2.mp4', title: 'Instagram Reel 2' },
  { type: 'local', src: '/IG_3.mp4', title: 'Instagram Reel 3' },
  { type: 'local', src: '/IG_4.mp4', title: 'Instagram Reel 4' },
];

export const documentationCategories: DocumentationCategory[] = [
  {
    title: 'Assistant Director',
    photos: [
      { src: '/AD1.jpg', alt: 'Assistant Director Documentation' },
      { src: '/AD2.jpg', alt: 'Assistant Director Documentation' },
      { src: '/AD3.jpg', alt: 'Assistant Director Documentation' },
      { src: '/AD4.jpg', alt: 'Assistant Director Documentation' },
      { src: '/AD5.jpg', alt: 'Assistant Director Documentation' },
    ],
  },
  {
    title: 'UMN RADIOACTIVE Chairman',
    photos: [
      { src: '/U1.jpg', alt: 'UMN RADIOACTIVE Chairman' },
      { src: '/U2.jpg', alt: 'UMN RADIOACTIVE Chairman' },
      { src: '/U3.jpg', alt: 'UMN RADIOACTIVE Chairman' },
      { src: '/U4.jpg', alt: 'UMN RADIOACTIVE Chairman' },
      { src: '/U5.jpg', alt: 'UMN RADIOACTIVE Chairman' },
    ],
  },
  {
    title: 'Radio Announcer',
    photos: [
      { src: '/A1.png', alt: 'Radio Announcer' },
      { src: '/A2.png', alt: 'Radio Announcer' },
      { src: '/A3.png', alt: 'Radio Announcer' },
      { src: '/A4.png', alt: 'Radio Announcer' },
      { src: '/A5.png', alt: 'Radio Announcer' },
      { src: '/A6.png', alt: 'Radio Announcer' },
    ],
  },
  {
    title: 'Theatre',
    photos: [
      { src: '/T1.jpg', alt: 'Theatre' },
      { src: '/T2.jpg', alt: 'Theatre' },
      { src: '/T3.jpg', alt: 'Theatre' },
      { src: '/T4.jpg', alt: 'Theatre' },
      { src: '/T5.jpg', alt: 'Theatre' },
      { src: '/T6.jpg', alt: 'Theatre' },
      { src: '/T7.jpg', alt: 'Theatre' },
      { src: '/T8.jpg', alt: 'Theatre' },
    ],
  },
];

export const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#photography', label: 'Photography' },
  { href: '#videographer', label: 'Videographer' },
  { href: '#documentation', label: 'Documentation' },
  { href: '#contact', label: 'Contact' },
];
