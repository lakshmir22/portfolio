# Lakshmi Rai - Portfolio Website

A modern, responsive portfolio website for Lakshmi Rai, a software engineer. The website showcases her skills, projects, and contact information with beautiful animations and a dark/light theme toggle.

## Features

- **Modern Design**: Clean and professional UI with attention to detail
- **Responsive Layout**: Looks great on all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Theme toggle with smooth transition animation
- **Scroll Animations**: Elements animate into view as you scroll
- **Interactive Components**: Engaging user experience with interactive elements
- **Optimized Performance**: Fast loading and smooth animations
- **Accessibility**: Built with accessibility in mind

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for React
- **React Intersection Observer**: For scroll-based animations
- **Next Themes**: For dark/light theme implementation

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lakshmirai/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── styles/         # Global styles
│   └── assets/         # Images and other assets
├── tailwind.config.js  # Tailwind CSS configuration
├── next.config.js      # Next.js configuration
└── tsconfig.json       # TypeScript configuration
```

## Customization

To customize this portfolio for your own use:

1. Update personal information in the components
2. Replace placeholder images with your own
3. Modify the color scheme in `tailwind.config.js`
4. Update project details in the `Projects.tsx` component

## Deployment

This website can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

### Deploy to Vercel

```bash
npm run build
# or
yarn build
```

Then follow the deployment instructions for your preferred hosting platform.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Inspiration from various portfolio websites across the web 