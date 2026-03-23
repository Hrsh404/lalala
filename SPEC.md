# Romantic Anniversary Website - Specification

## 1. Project Overview

**Project Name:** Our Love Story - Anniversary Website
**Type:** Single-page romantic anniversary website
**Core Functionality:** A beautifully crafted website to celebrate a romantic anniversary with animations, memories, and special messages
**Target Users:** Couples celebrating their anniversary

---

## 2. UI/UX Specification

### Layout Structure

**Sections (in order):**
1. **Hero Section** - Full-screen romantic landing with couple's names and anniversary date
2. **Love Timeline** - Scrollable timeline of memorable moments
3. **Photo Gallery** - Romantic photo showcase with lightbox
4. **Love Letter** - Personal message section
5. **Countdown Section** - Time together counter
6. **Footer** - Special closing message

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette:**
- Primary: `#8B2635` (Deep Rose Red)
- Secondary: `#F7E7CE` (Champagne Gold)
- Accent: `#D4A574` (Warm Gold)
- Background: `#1A0F14` (Deep Burgundy Black)
- Text Primary: `#FFF5F0` (Soft White)
- Text Secondary: `#C9A86C` (Muted Gold)
- Heart Accent: `#E85A71` (Coral Pink)

**Typography:**
- Headings: 'Playfair Display', serif (elegant, romantic)
- Body: 'Cormorant Garamond', serif (classic, readable)
- Accent Text: 'Great Vibes', cursive (for names and special text)

**Font Sizes:**
- Hero Title: 4rem (mobile: 2.5rem)
- Section Titles: 2.5rem (mobile: 1.8rem)
- Body: 1.2rem (mobile: 1rem)
- Accent Text: 1.5rem

**Spacing System:**
- Section padding: 80px vertical (mobile: 50px)
- Content max-width: 1200px
- Card padding: 30px
- Element gaps: 20px

**Visual Effects:**
- Floating heart particles animation in hero
- Scroll-triggered fade-in animations
- Subtle parallax on backgrounds
- Glowing text effect on names
- Smooth hover transitions (0.3s ease)
- Pulsing heart icons

### Components

**1. Hero Section:**
- Full viewport height
- Animated floating hearts background (CSS)
- Centered content with names in script font
- Anniversary date below names
- Animated "Scroll Down" indicator
- Subtle gradient overlay

**2. Timeline Cards:**
- Alternating left/right layout (desktop)
- Vertical line connector
- Date badge with heart icon
- Title and description
- Image thumbnail (optional)
- Staggered reveal animation on scroll

**3. Photo Gallery:**
- Masonry-style grid
- 3 columns (desktop), 2 (tablet), 1 (mobile)
- Hover zoom effect
- Click to open lightbox modal
- Smooth transitions

**4. Love Letter:**
- Elegant paper-like card design
- Decorative border
- Handwriting-style quote
- Fade-in animation

**5. Countdown Timer:**
- Days, Hours, Minutes, Seconds boxes
- Flip-style animation on update
- Romantic label text

**6. Footer:**
- Decorative heart divider
- Final romantic message
- Year display

---

## 3. Functionality Specification

### Core Features

1. **Animated Hero**
   - Continuous floating heart particles (CSS-only)
   - Names with glowing animation
   - Smooth entrance animation on load

2. **Scroll Animations**
   - Intersection Observer for reveal animations
   - Elements fade and slide in when entering viewport
   - Staggered delays for grouped elements

3. **Interactive Timeline**
   - 5-6 sample memory entries
   - Hover effects on cards
   - Smooth scroll behavior

4. **Photo Gallery**
   - 6 placeholder romantic images
   - Click to view fullscreen
   - Keyboard navigation (ESC to close)
   - Click outside to close

5. **Time Counter**
   - Real-time countdown from anniversary date
   - Smooth number transitions
   - Calculate days, hours, minutes, seconds

6. **Smooth Scrolling**
   - All internal links scroll smoothly
   - Scroll-to-top button appears after scrolling

### User Interactions
- Scroll to navigate sections
- Click gallery images for lightbox
- Hover on timeline cards for elevation
- Click scroll indicator to go to next section

### Data Handling
- Static content (no backend)
- Anniversary date: March 22, 2025 (configurable)
- All images use placeholder service (picsum.photos)

### Edge Cases
- Graceful fallback if fonts fail to load
- Images load with skeleton placeholders
- Countdown handles past dates gracefully

---

## 4. Acceptance Criteria

### Visual Checkpoints
- [ ] Hero section fills viewport with animated hearts
- [ ] Names display in elegant script font with glow
- [ ] Timeline alternates properly on desktop
- [ ] Gallery displays in responsive grid
- [ ] Lightbox opens and closes smoothly
- [ ] Countdown updates in real-time
- [ ] All sections have proper scroll animations
- [ ] Mobile layout is fully responsive
- [ ] Colors match specified palette exactly

### Functional Checkpoints
- [ ] Page loads without console errors
- [ ] All animations perform smoothly (60fps)
- [ ] Gallery lightbox works with keyboard
- [ ] Scroll animations trigger correctly
- [ ] Countdown calculates correct time difference

### Technical Requirements
- Angular 21.0.4
- Standalone components
- SCSS for styling
- No external UI libraries (pure custom design)