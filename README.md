# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS 4. Features smooth animations, expandable sections, and a modern design inspired by Tailwind's aesthetic.

![Portfolio Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Portfolio+Preview)

## ✨ Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop, and extra-large screens)
- **Expandable Sections**: Projects and Experience sections with smooth expand/collapse animations
- **Modern UI**: Clean, minimalist design with smooth transitions and animations
- **Component-Based**: Industry-standard component architecture for easy maintenance
- **Dark Mode Ready**: Styled for both light and dark themes
- **Smooth Scrolling**: Seamless navigation between sections
- **Performance Optimized**: Built with Next.js App Router for optimal performance

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Header.tsx          # Navigation header with mobile menu
│       │   │   └── Footer.tsx          # Footer with social links
│       │   ├── sections/
│       │   │   ├── Hero.tsx            # Hero/About Me section
│       │   │   ├── Projects.tsx        # Expandable projects section
│       │   │   ├── Experience.tsx      # Expandable experience section
│       │   │   └── Contact.tsx         # Contact section
│       │   └── ui/
│       │       ├── Button.tsx          # Reusable button component
│       │       ├── Card.tsx            # Card component
│       │       ├── ExpandableCard.tsx  # Expandable card with animations
│       │       ├── TechBadge.tsx       # Technology badge component
│       │       └── SectionHeading.tsx  # Section heading component
│       ├── lib/
│       │   ├── types.ts                # TypeScript interfaces
│       │   ├── data.ts                 # Portfolio content data
│       │   ├── constants.ts            # Design constants
│       │   └── utils.ts                # Utility functions
│       ├── globals.css                 # Global styles
│       ├── layout.tsx                  # Root layout
│       └── page.tsx                    # Main page
├── public/                             # Static assets
├── package.json
└── README.md
```

## 🎨 Design System

### Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md-lg)
- **Desktop**: 1024px - 1536px (lg-xl)
- **Large Screens**: > 1536px (2xl+)

### Typography

- **Headings**: Bold, tracking-tight for modern look
- **Body**: Inter font with optimized font features
- **Sizes**: Responsive text sizing using Tailwind's responsive utilities

### Colors

- **Primary**: Blue (blue-600)
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Purple for gradients and highlights

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customizing Your Portfolio

### Update Personal Information

Edit `src/app/lib/data.ts` to customize your portfolio content:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio...',
  email: 'your.email@example.com',
  location: 'Your City, Country',
  socialLinks: [
    // Add your social links
  ],
};
```

### Add Projects

Add your projects to the `projects` array in `src/app/lib/data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    link: 'https://github.com/...',
    timeline: 'Jan 2024 - Present',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    description: 'Project description...',
    highlights: [
      'Key highlight 1',
      'Key highlight 2',
    ],
  },
  // Add more projects...
];
```

### Add Experience

Add your work experience to the `experiences` array in `src/app/lib/data.ts`:

```typescript
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Company Name',
    role: 'Your Role',
    timeline: 'Jan 2023 - Present',
    technologies: ['React', 'Node.js'],
    description: 'Role description...',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
    ],
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
  },
  // Add more experiences...
];
```

## 🎯 Key Components

### ExpandableCard

The expandable card component powers both Projects and Experience sections:

- **Collapsed State**: Shows title, link, timeline, and technologies
- **Expanded State**: Reveals full description, highlights/responsibilities, and achievements
- **Smooth Animations**: Uses Framer Motion for buttery-smooth transitions

### Responsive Header

- **Desktop**: Horizontal navigation bar
- **Mobile**: Hamburger menu with slide-down animation
- **Scroll Effect**: Background blur and shadow on scroll

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

## 📱 Responsive Design

The portfolio is fully responsive across all screen sizes:

- **Mobile**: Single column layout, stacked navigation
- **Tablet**: Optimized spacing and typography
- **Desktop**: Multi-column layouts where appropriate
- **Large Screens**: Maximum width containers for optimal reading

## 🎨 Customization Tips

1. **Colors**: Modify Tailwind classes in components to change the color scheme
2. **Fonts**: Change the font in `layout.tsx` by importing a different Google Font
3. **Animations**: Adjust animation timings in `lib/constants.ts`
4. **Layout**: Modify section order in `page.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any questions or feedback, feel free to reach out via the contact section on the portfolio.

---

Built with ❤️ using Next.js and Tailwind CSS
