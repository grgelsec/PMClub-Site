# PMClub-Site

A modern React application for the Product Management Club (PMC) website, built with TypeScript, Vite, and Tailwind CSS. The site serves as a hub for club information, member applications, event management, and community engagement.

## Features

- **Landing Page**: Eye-catching hero section with club branding and value proposition
- **About Page**: Club mission, vision, and detailed information
- **Events Page**: Upcoming and past events with registration links
- **Team Page**: Board and committee member profiles
- **Join Page**: Multiple pathways to engage (Slack community, membership applications, event attendance)
- **Admin Dashboard**: Protected area for managing team members, events, and allowed emails
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Authentication**: Supabase-powered login for admin access

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Testing**: Vitest with Testing Library
- **Linting**: ESLint with TypeScript rules

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Supabase account and project

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pmclub-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Database

The application uses Supabase as its backend database. Required tables: `board_members`, `committee_members`, `events`, `allowed_emails`.

## Hosting

The application is configured for deployment on Vercel with SPA routing handled by `vercel.json`.

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (Radix UI)
│   ├── Login.tsx     # Admin login component
│   ├── Navigation.tsx # Main navigation
│   ├── ProtectedRoute.tsx # Route protection
│   └── navbar.tsx    # Alternative navigation
├── lib/
│   ├── supabase.ts   # Supabase client configuration
│   └── utils.ts      # Utility functions
├── pages/
│   ├── Admin.tsx     # Admin dashboard
│   ├── Team.tsx      # Team page
│   ├── about.tsx     # About page
│   ├── application.tsx # Application form (unused)
│   ├── events.tsx    # Events page
│   ├── footer.tsx    # Footer component
│   ├── join.tsx      # Join page
│   ├── landing.tsx   # Landing page
│   └── sp.tsx        # Single page (unused)
├── types/
│   └── framer-motion.d.ts # Type definitions
├── utils/
│   └── validation.ts # Zod validation schemas
├── App.tsx           # Main app component with routing
├── index.css         # Global styles
└── main.tsx          # App entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes following the code style guidelines
4. Run tests and linting: `npm run lint && npm run test`
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Open a pull request

### Code Style Guidelines

- **TypeScript**: Strict mode enabled, full type checking
- **React**: Functional components with arrow functions
- **Naming**: PascalCase for components, camelCase for variables
- **Imports**: Group by type (React, third-party, internal)
- **Styling**: Tailwind CSS classes, responsive design
- **Strings**: Double quotes
- **Semicolons**: No semicolons at statement ends

## CI/CD

GitHub Actions workflow runs on every push and pull request to the main branch:
- Installs dependencies
- Runs linting
- Executes tests
- Builds the project

## Environment Variables

Required environment variables:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## License

This project is private and proprietary to the Product Management Club.