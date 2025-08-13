# Vony - Peer-to-Peer Micro-Lending Platform

## Overview

Vony is a peer-to-peer micro-lending platform designed to connect lenders and borrowers directly through a secure, transparent platform. The project currently consists of a static HTML website showcasing the platform's purpose and features, built with modern web technologies and a clean, professional design focused on financial services.

The platform emphasizes simplicity, transparency, and trust in micro-lending transactions, targeting users who need quick access to small loans or want to invest in peer-to-peer lending opportunities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Static Website Structure**: The current implementation uses a traditional multi-page HTML structure with separate pages for different sections (index.html, contact.html). This approach provides fast loading times and simple hosting requirements.

**CSS Framework**: Built on Bootstrap 5.3.0 for responsive grid system and components, ensuring cross-device compatibility and mobile-first design principles.

**Component-Based Styling**: Custom CSS variables and utility classes are organized around the Vony brand identity, with a green and white color scheme that conveys trust and growth in financial services.

**Interactive Elements**: jQuery 3.6.0 handles dynamic interactions including smooth scrolling, mobile menu functionality, form handling, and loading animations. Custom JavaScript provides enhanced user experience through progressive animation triggers.

### Design System

**Typography**: Combination of Inter (primary) and Poppins (secondary) fonts from Google Fonts, chosen for readability and modern appeal in financial interfaces.

**Color Palette**: Green-based theme with primary color #5EC47E representing growth and trust, complemented by clean whites and subtle grays for professional appearance.

**Animation System**: Animate.css integration provides consistent micro-interactions and page transitions, while custom easing functions create smooth scrolling experiences.

### Asset Management

**Icon System**: Font Awesome 6.4.0 provides scalable vector icons for consistent visual language across the platform.

**Image Optimization**: SVG logo format ensures crisp display across all screen densities while maintaining small file sizes.

**Plugin Ecosystem**: Magnific Popup for modal interactions, Slick carousel for content sliders, and Odometer for animated counters enhance user engagement.

## External Dependencies

### Frontend Libraries
- **Bootstrap 5.3.0**: Responsive framework for layout and components
- **jQuery 3.6.0**: JavaScript library for DOM manipulation and AJAX
- **Font Awesome 6.4.0**: Icon font library for scalable vector icons
- **Google Fonts**: Web fonts (Inter, Poppins) for typography

### CSS Plugins
- **Animate.css**: CSS animation library for entrance and interaction effects
- **Magnific Popup**: Responsive lightbox plugin for modals and galleries
- **Slick Carousel**: Touch-enabled carousel/slider plugin
- **Odometer**: Animated number counter plugin

### Development Tools
- **Standard HTML5/CSS3**: Core web technologies for structure and styling
- **Vanilla JavaScript**: Custom scripts for enhanced interactivity
- **CSS Custom Properties**: For maintainable theming and brand consistency

### Hosting Requirements
- **Static File Hosting**: Compatible with any web server (Apache, Nginx, CDN)
- **No Database**: Current implementation requires no backend infrastructure
- **SSL Certificate**: Recommended for trust and SEO in financial services

The architecture is designed to be easily extensible into a full-stack application when backend functionality for user registration, loan management, and payment processing is needed.

## Recent Changes (August 13, 2025)

### Mobile Navigation Enhancement
- Updated responsive navigation breakpoints to show full menu on medium screens and up (768px+) 
- Hamburger menu now only appears on small screens (below 768px) where navigation items don't fit
- Fixed JavaScript syntax errors that were preventing mobile menu from closing properly
- Replaced problematic jQuery code with vanilla JavaScript for better browser compatibility
- Enhanced mobile dropdown functionality with reliable event handlers for menu closing
- Adjusted navigation spacing: 5rem margin between items to match user's preferred layout
- Navigation now matches the exact layout shown in user's screenshot for large screens

### Hero Section Spacing Adjustments
- Reduced hero section bottom padding from 10rem to 3rem to 1rem for tighter spacing with "Coming Soon" banner
- Added 2rem top margin to "Coming Soon" banner for better visual separation
- Vertically centered checkbook image with title and paragraph using align-items-center
- Reduced hero section top padding to 2rem for tighter spacing with header

## Previous Changes (August 12, 2025)

### Content Focus Update
- Completely rewrote website content to focus on Vony's actual purpose: personal lending between friends and family
- Updated hero section: "Lending Money to Friends Made Simple" 
- Replaced generic P2P lending language with specific use cases: dinner bills, rent help, car repairs
- Modified features section to showcase real-life lending scenarios
- Updated call-to-action buttons to link to: https://anyavondiessl.com (changed from Vony app URL)

### Navigation Structure Finalized
- Removed "About Us" from navigation menu for cleaner focus
- Final navigation order: How It Works → Key Features → Use Cases → Contact Us
- Changed main CTA from "Contact us" to "Get Started" linking to Vony app
- Added "Contact Us" as regular nav item next to "Use Cases"
- Added responsive navigation spacing: 4rem on desktop (1200px+), 3rem on tablets (992px-1199px)
- Maintained mobile-friendly spacing for smaller screens

### Section Restructuring
- Created distinct "Key Features" section covering technical functionality:
  - Custom Payment Plans: Flexible payment schedules (weekly/bi-weekly/monthly)
  - Interest Rate Options: Choice to lend with or without interest
  - Repayment Periods: Customizable timeframes from days to years
  - Digital Contracts: Automatic creation of legally-binding agreements
- Renamed practical scenarios section to "Use Cases": Split Dinner Bills, Help with Rent, Urgent Car Repairs
- Clear separation between technical features and practical applications

### Footer Redesign
- Implemented four-column layout: Logo + CTA, Address, Phone, Email
- Added company description under logo: "Connecting people through trusted peer-to-peer micro-lending. Simple, secure, and transparent."
- Single "Contact Us" button positioned under logo and description
- Green headers ("Address", "Phone", "Email") with white content on dark background
- Contact information: San Francisco, CA; +1 (650) 924-7120; hello@vony.com

### Mobile Optimization
- Added comprehensive mobile responsiveness with specific breakpoints for tablets (991px) and phones (576px)
- Implemented mobile-specific typography scaling: titles from 2.5rem to 2rem on mobile
- Enhanced touch targets: minimum 44px height for buttons following iOS guidelines
- Improved mobile form experience: larger touch targets, proper focus states, prevented iOS zoom
- Added mobile-specific spacing and padding adjustments throughout
- Enhanced feature cards with shadows and better mobile layout
- Optimized container padding and image sizes for mobile screens

### Technical Fixes
- Fixed JavaScript syntax errors that were causing console issues
- Resolved template literal compatibility issues in script.js
- Enhanced cross-device compatibility and performance

The website now properly represents Vony as a friends and family lending platform with excellent mobile user experience.