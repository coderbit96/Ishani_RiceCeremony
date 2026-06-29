# শুভ অন্নপ্রাশন Invitation Website

A fully frontend, data-driven React invitation built with Vite, Tailwind CSS, Framer Motion, Swiper, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

## Personalize

Edit `src/data/eventData.js`. Names, date/time, venue, family details, messages, images, timeline, food menu, and contact links all flow from this file.

Replace `src/assets/ishani-hero.jpg` with your daughter's photo and update the import or image entries in `eventData.js` when ready.

Personalize a guest link with `?guest=Mr.%20Sanjay%20and%20Family`. Without that parameter, the greeting defaults to “Dear Guest, You Are Invited.”

The optional background melody lives in `public/music`. It never autoplays; guests remain in control through the floating music button.

## Production build

```bash
npm run build
npm run preview
```
