# Portfolio Workshop

A modern, responsive portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

## 🚀 Features

- **Hero Section**: Eye-catching introduction with your name and tagline
- **About Me**: Tell your story and highlight your skills
- **Projects Showcase**: Display your best work with project details
- **Contact Section**: Make it easy for visitors to reach out
- **Responsive Design**: Looks great on all devices (mobile, tablet, desktop)
- **Modern Styling**: Built with Tailwind CSS for clean, maintainable styles
- **TypeScript**: Type-safe code for better development experience

## 📁 Project Structure

```
portfolio-workshop/
├── app/
│   ├── page.tsx              ← Main portfolio page
│   ├── layout.tsx            ← Root layout wrapper
│   ├── globals.css           ← Global styles
│   └── components/
│       ├── Hero.tsx          ← Hero section
│       ├── AboutMe.tsx       ← About section
│       ├── Projects.tsx      ← Projects showcase
│       └── ContactMe.tsx     ← Contact section
├── public/
│   └── assets/               ← Images and static files
├── package.json              ← Dependencies and scripts
├── tsconfig.json             ← TypeScript configuration
├── tailwind.config.js        ← Tailwind CSS configuration
└── README.md                 ← This file
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with built-in routing
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- **UI Library**: [React 19](https://react.dev/) - JavaScript library for building components
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Development**: ESLint for code quality

## 📋 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**: Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Available Commands

- `npm run dev` - Start development server (auto-reloads on changes)
- `npm run build` - Create optimized production build
- `npm start` - Run production server
- `npm run lint` - Check code quality with ESLint

## 🎨 Customization

### Editing Components

Each section is a separate component in `app/components/`:
- **Hero.tsx** - Update your name, title, and introduction
- **AboutMe.tsx** - Add your skills and background
- **Projects.tsx** - Showcase your work with descriptions
- **ContactMe.tsx** - Add your contact information and social links

### Global Styles

Customize colors, fonts, and spacing in:
- `app/globals.css` - Global CSS styles
- `tailwind.config.js` - Tailwind CSS theme customization

### Adding Assets

Place images and static files in the `public/assets/` folder and reference them in your components.

## 🚢 Deployment

Deploy to [Vercel](https://vercel.com/) (recommended for Next.js):
```bash
npm install -g vercel
vercel
```

Or deploy to other platforms like Netlify, GitHub Pages, etc.

## 📝 License

Open source - feel free to use this as a template for your own portfolio!