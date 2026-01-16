# Portfolio Website Starter Kit

A modern, responsive portfolio website built with React + TypeScript + Vite.

---

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **CSS3** - Styling with custom properties

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
├── public/                 # Static assets (images, videos)
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Landing section
│   │   ├── WorkExperience.tsx
│   │   ├── Skills.tsx
│   │   ├── Photography.tsx
│   │   ├── VideoSection.tsx
│   │   ├── Documentation.tsx
│   │   ├── Contact.tsx
│   │   ├── Loading.tsx
│   │   └── Lightbox.tsx
│   ├── data/
│   │   └── content.ts      # All portfolio content
│   ├── hooks/              # Custom React hooks
│   ├── styles/
│   │   └── globals.css     # Global styles & CSS variables
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Customization Guide

### 1. Update Personal Information

Edit `src/data/content.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  subtitle: 'Your Subtitle',
  bio: 'Your bio description...',
  email: 'your@email.com',
  phone: '+1 234 567 890',
  social: {
    instagram: 'https://instagram.com/yourhandle',
    linkedin: 'https://linkedin.com/in/yourprofile',
  },
};
```

### 2. Update Work Experience

```typescript
export const workExperiences: WorkExperience[] = [
  {
    title: 'Job Title',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'What you did...',
  },
  // Add more...
];
```

### 3. Update Skills

```typescript
export const skills: Skill[] = [
  { name: 'Skill Name', level: 90 },  // level: 0-100
  // Add more...
];
```

### 4. Add Photography Images

1. Place images in `public/` folder
2. Update `content.ts`:

```typescript
export const photographyImages: PhotographyImage[] = [
  { src: '/image1.jpg', alt: 'Description' },
  // Add more...
];
```

### 5. Add Videos

```typescript
export const videos: VideoItem[] = [
  {
    title: 'Video Title',
    thumbnail: '/thumbnail.jpg',
    videoUrl: '/video.mp4',
    description: 'Video description',
  },
  // Add more...
];
```

### 6. Update Navigation

```typescript
export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  // Add or remove sections...
];
```

---

## Styling Customization

### Color Theme

Edit CSS variables in `src/styles/globals.css`:

```css
:root {
  /* Primary gradient colors */
  --gradient-start: #6366f1;    /* Indigo */
  --gradient-end: #ec4899;      /* Pink */

  /* Text colors */
  --text-dark: #1e1e2e;
  --text-muted: #64748b;

  /* Background */
  --background-cream: #faf8f5;

  /* Cards */
  --card-border: #e2e8f0;
  --card-shadow: 0 4px 20px rgba(99, 102, 241, 0.08);
}
```

### Fonts

Update font import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Then update `globals.css`:

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

---

## Adding New Sections

1. Create component file: `src/components/NewSection.tsx`

```tsx
import './NewSection.css';

export function NewSection() {
  return (
    <section id="new-section" className="new-section">
      <h2 className="section-title">Section Title</h2>
      {/* Your content */}
    </section>
  );
}
```

2. Create styles: `src/components/NewSection.css`

3. Add to `src/components/index.ts`:

```typescript
export { NewSection } from './NewSection';
```

4. Import in `src/App.tsx`:

```tsx
import { NewSection } from './components';

// Add in the return statement
<NewSection />
```

5. Add navigation link in `content.ts`:

```typescript
{ href: '#new-section', label: 'New Section' }
```

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

The `vercel.json` is pre-configured:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Netlify

1. Push to GitHub
2. Import in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

---

## Component Overview

| Component | Purpose |
|-----------|---------|
| `Header` | Fixed navigation with mobile sidebar |
| `Hero` | Landing section with profile & CTA |
| `WorkExperience` | Timeline of work history |
| `Skills` | Skill bars with percentages |
| `Photography` | Image grid with lightbox |
| `VideoSection` | Video gallery with player |
| `Documentation` | Categorized image gallery |
| `Contact` | Contact info & social links |
| `Loading` | Initial loading spinner |
| `Lightbox` | Fullscreen image viewer |

---

## Custom Hooks

### useScrollPosition

Tracks scroll position for header effects:

```tsx
const scrolled = useScrollPosition(50); // threshold in pixels
```

### useMediaQuery

Responsive breakpoint detection:

```tsx
const isMobile = useMediaQuery('(max-width: 768px)');
```

---

## Tips

1. **Images**: Optimize images before adding (use WebP format)
2. **Videos**: Compress videos for faster loading
3. **Performance**: Use lazy loading for images below the fold
4. **SEO**: Update meta tags in `index.html`
5. **Analytics**: Add Google Analytics or similar in `index.html`

---

## License

MIT - Feel free to use for personal or commercial projects.
