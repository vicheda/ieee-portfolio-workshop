PART 1: CREATE THE PROJECT (5 minutes)
Step 1: Create a New Next.js App
Open terminal and run:
bashnpx create-next-app@latest portfolio-workshop
Then:
bashcd portfolio-workshop
npm run dev
Open browser: http://localhost:3000
Step 2: Understand the File Structure
portfolio-workshop/
├── app/
│   ├── page.js          ← Main home page (WE'LL EDIT THIS!)
│   ├── layout.js        ← Wraps all pages (WE'LL EDIT THIS!)
│   └── globals.css      ← Global styles (WE'LL EDIT THIS!)
├── public/              ← Put images here later
├── package.json         ← Project config
└── next.config.js       ← Next.js config
Key files we'll work with:

app/page.js → Our main portfolio page (like App.js in React)
app/globals.css → All our styles (like App.css in React)
app/layout.js → Wraps everything (sets up fonts, metadata)