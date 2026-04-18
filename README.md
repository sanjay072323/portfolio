# Sanjay Fathepur — Portfolio

A Next.js 14 portfolio website ready to deploy on Vercel.

## 🚀 Deploy to Vercel (3 steps)

### Option A — GitHub + Vercel (Recommended)
1. Push this folder to a new GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Click **Deploy** — done! Vercel auto-detects Next.js

### Option B — Vercel CLI
```bash
npm i -g vercel
cd sanjay-portfolio
vercel
```
Follow the prompts — your site goes live instantly.

## 🛠 Run locally
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📁 Project Structure
```
sanjay-portfolio/
├── app/
│   ├── layout.js      # Root layout + fonts + metadata
│   ├── page.js        # Main page
│   └── globals.css    # All styles
├── components/
│   ├── Nav.js
│   ├── Hero.js
│   ├── Skills.js
│   ├── Experience.js
│   ├── Projects.js
│   ├── Education.js
│   ├── Contact.js
│   └── Footer.js
├── next.config.js
└── package.json
```

## ✏️ Customization
- Edit contact info in `components/Hero.js` and `components/Contact.js`
- Add new projects in `components/Projects.js` (just add to the array)
- Change colors in `app/globals.css` under `:root`
