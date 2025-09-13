# Agent Guidelines for PMClub-Site

## Build Commands
- **Build**: `npm run build` (TypeScript compilation + Vite build)
- **Dev server**: `npm run dev` (Vite dev server)
- **Lint**: `npm run lint` (ESLint with TypeScript rules)
- **Preview**: `npm run preview` (Vite preview)

## Code Style Guidelines

### TypeScript & React
- Use strict TypeScript with full type checking
- Component names: PascalCase (e.g., `ButtonBar`, `SinglePage`)
- Arrow functions for functional components
- No semicolons at statement ends
- Double quotes for string literals

### Imports
- Relative imports for internal modules
- Destructure named exports: `import { Component } from "./path"`
- Group imports by type (React, third-party, internal)

### Styling
- Tailwind CSS for all styling
- Custom colors: `lavender: "#D5B8FF"`
- Responsive design with Tailwind classes
- Hover/focus states with opacity and scale transforms

### Error Handling
- Use TypeScript strict mode for compile-time error catching
- ESLint catches React hooks and refresh issues
- No runtime error handling patterns established yet

### File Structure
- Components in `src/components/`
- Pages in `src/pages/`
- Assets in `public/assets/`

## Testing
No test framework configured. Add testing setup if needed.

## Linting Rules
- TypeScript ESLint recommended rules
- React hooks rules
- React refresh rules for hot reloading