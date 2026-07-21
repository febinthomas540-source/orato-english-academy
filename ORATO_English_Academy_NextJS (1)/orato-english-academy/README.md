# ORATO English Academy

Premium, mobile-first Next.js website for ORATO English Academy.

## Local development
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Add the phone, WhatsApp, email, social and map values.
5. Run `npm run dev` and open `http://localhost:3000`.

## Build
Run `npm run build`, then `npm start`.

## Deployment
Import the folder into Vercel or push it to GitHub and connect the repository. Add all `.env.local` values as deployment environment variables.

## Updating content
- Edit `data/site.ts` for prices, courses, qualifications, FAQs and social/contact details.
- Replace `public/images/orato-logo.jpg` and `public/images/meenakshi-sethulekshmi.jpg` to update brand assets while keeping the same filenames.
- The contact API validates submissions but currently logs them server-side. Connect it to Resend, Formspree, a CRM or another email provider before launch.

## Notes
- Empty contact values are intentionally hidden rather than showing fake information.
- Testimonials use an honest empty state until real reviews are supplied.
