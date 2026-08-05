# Thalibar Portfolio

A personal portfolio website for Thalibar Rifqi, Data Engineer.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** Resend + React Email
- **Rate Limiting:** Upstash Redis
- **Analytics:** Vercel Analytics + Speed Insights

## Features

- Responsive single-page portfolio
- Dark/light theme toggle
- Animated sections with scroll-triggered effects
- Contact form with server actions and rate limiting
- Project showcase with parallax scroll effects
- Experience timeline
- Skills section
- SEO optimized with Open Graph and sitemap

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
RESEND_API_KEY=your_resend_api_key
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

## License

Private
