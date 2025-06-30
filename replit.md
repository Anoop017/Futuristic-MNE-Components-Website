# MNE Components India Pvt. Ltd. - Corporate Website

## Overview

This is a modern, professional corporate website for MNE Components India Pvt. Ltd., a manufacturing company specializing in advanced battery connector solutions for EV, ESS, and Transmission & Distribution industries. The website is built as a static frontend application using pure HTML, CSS, and JavaScript without any external frameworks.

## System Architecture

### Frontend Architecture
- **Pure HTML/CSS/JavaScript**: Single-page application with no external frameworks
- **Mobile-First Design**: Responsive layout that adapts to all screen sizes
- **Component-Based Structure**: Modular sections for easy maintenance and updates
- **Progressive Enhancement**: Core content accessible without JavaScript, enhanced with animations and interactions

### Technology Stack
- HTML5 for semantic markup
- CSS3 with modern features (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript for interactivity
- Google Fonts (Inter) for typography
- Font Awesome for icons

## Key Components

### Core Sections
1. **Navigation Bar**: Sticky header with smooth scroll navigation and mobile hamburger menu
2. **Hero Section**: Banner with company branding, tagline, and call-to-action
3. **About Section**: Company profile, mission, and core strengths
4. **Products Section**: Responsive grid layout for product showcase
5. **Careers Section**: Employment opportunities with contact information
6. **Contact Section**: Company details, embedded map, social links, and contact form
7. **Footer**: Company branding and additional navigation

### Interactive Features
- Page loader with company branding
- Smooth scroll animations and transitions
- Active navigation link highlighting
- Responsive mobile menu
- Hover effects on interactive elements
- Scroll-triggered animations
- Back-to-top functionality

### UI/UX Elements
- Professional color scheme with CSS custom properties
- Consistent typography using Inter font family
- Subtle shadows and gradients for depth
- Smooth transitions using cubic-bezier timing functions
- Accessibility considerations with semantic HTML

## Data Flow

### Static Content Flow
1. HTML provides semantic structure and content
2. CSS handles all visual styling and responsive behavior
3. JavaScript enhances user experience with:
   - Navigation interactions
   - Scroll-based animations
   - Form handling (frontend validation only)
   - Mobile menu functionality

### Event-Driven Interactions
- Window scroll events for navbar behavior and animations
- Click events for navigation and mobile menu
- Form submission handling (no backend integration)
- Page load events for loader dismissal

## External Dependencies

### Third-Party Services
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Icon library for UI elements
- **Google Maps**: Embedded map placeholder (dummy implementation)

### Assets Structure
```
assets/
├── logo.svg (company logo)
└── (placeholder for product images and other media)
```

## Deployment Strategy

### Static Hosting Requirements
- Any static web hosting service (Netlify, Vercel, GitHub Pages, etc.)
- No server-side processing required
- Simple file upload deployment
- CDN distribution recommended for global performance

### Browser Compatibility
- Modern browsers supporting ES6+ features
- CSS Grid and Flexbox support required
- Graceful degradation for older browsers

### Performance Optimizations
- Minimal external dependencies
- Optimized CSS with custom properties
- Efficient JavaScript with event delegation
- Lazy loading considerations for future image assets

## Changelog

```
Changelog:
- June 30, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## Technical Notes

### Maintenance Considerations
- Well-commented code structure for easy updates
- Modular CSS organization with utility classes
- Scalable JavaScript architecture for feature additions
- Semantic HTML for SEO and accessibility

### Future Enhancement Opportunities
- Backend integration for contact form functionality
- Content Management System integration
- Analytics tracking implementation
- Performance monitoring setup
- Image optimization and lazy loading
- Advanced animation libraries integration

### Development Workflow
- Direct file editing for content updates
- CSS custom properties for easy theme modifications
- JavaScript module pattern for feature organization
- Asset optimization for production deployment