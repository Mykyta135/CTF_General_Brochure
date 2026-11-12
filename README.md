# CTF_General_Brochure

General partner brochure for **BEST Lviv** events, built from the [BEST::CTF brochure](https://github.com/Mykyta135/CTF_Brochure). Companies assemble their own partnership offer from fixed and flexible options (including a World Café session), review it in a cart and send it to the organisers.

- Offer builder state in Redux Toolkit, forms with react-hook-form / Formik + Zod / Yup
- Request sent through EmailJS, no backend to host
- Framer Motion animations, Swiper carousels, light/dark theme

**Stack:** Next.js (App Router) · TypeScript · Tailwind · Redux Toolkit · EmailJS

## Run

```bash
npm install
# EmailJS: NEXT_PUBLIC_SERVICE_ID, NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_PUBLIC_KEY in .env.local
npm run dev
```
