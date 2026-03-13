# Memory: index.md
Updated: now

Project: Cypher Global corporate website (IT company, Côte d'Ivoire)

## Design system
- Fonts: Space Grotesk (display), DM Sans (body)
- Colors: lighter palette with modern gradients (blue-teal)
- Primary: 220 72% 40%, Secondary: 180 45% 40% (teal)
- Logo colors: blue, teal, red, green, orange
- Navy for dark sections: 220 35% 12%
- Background: 210 40% 98% (light)
- Gradients: blue-to-teal primary, red-to-orange accent
- Button: gradient from-primary to-secondary
- Custom tokens in index.css + tailwind.config.ts

## i18n
- 3 languages: French (default), English, Chinese
- Context: src/i18n/LanguageContext.tsx
- Translations: src/i18n/translations.ts

## Pages
- / (Index), /solutions, /ia, /realisations, /a-propos, /blog, /contact
- All pages use Navbar + Footer layout
- AI page has chatbot widget + WhatsApp/Telegram links
- Logo: src/assets/logo.png

## Images
- hero-bg.jpg, ai-illustration.jpg, network-infrastructure.jpg
- security-center.jpg, smart-home.jpg, team-meeting.jpg

## Backend
- Lovable Cloud enabled
- Back-office CMS planned (not yet built)
