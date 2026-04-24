# Feedback Hub

A modern, full-featured feedback application built with Next.js, React, and Supabase. Collect, manage, and analyze user feedback efficiently.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/easyweb/v0-product-feedback-app)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/EGRSkHH0hoJ)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-%233178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-%2306B6D4?logo=tailwindcss)](https://tailwindcss.com/)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Development Server](#development-server)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This repository stays in sync with your deployed chats on [v0.dev](https://v0.dev). Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

**Live Demo:** [https://vercel.com/easyweb/v0-feedback-hub](https://vercel.com/easyweb/v0-feedback-hub)

## Features

- **User Authentication** (via Supabase Auth)
- **Feedback Submission** with categorization and tagging
- **Admin Dashboard** for managing feedback
- **Real-time Updates** using Supabase Realtime
- **Responsive Design** for mobile and desktop
- **Dark/Light Mode** toggle
- **Data Visualization** with charts and analytics
- **Export Functionality** (CSV, JSON)
- **Customizable Statuses** and workflows
- **Email Notifications** for new feedback
- **Search and Filter** capabilities
- **Rich Text Editing** for feedback descriptions
- **Attachment Support** (images, files)
- **Duplicate Detection**
- **Voting System** for feature requests
- **Roadmap Integration**

## Tech Stack

**Frontend:**
- **Framework:** [Next.js 15.2.4](https://nextjs.org/) (React 19)
- **Styling:** [Tailwind CSS 3.4.17](https://tailwindcss.com/) with [Tailwind Variants](https://tailwind-variants.org/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) primitives
- **Forms:** [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **State Management:** React Context & Hooks
- **Data Fetching:** TanStack Query (React Query)
- **Charts:** [Recharts](https://recharts.org/en-US/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Carousel:** [Embla Carousel React](https://www.embla-carousel.com/)
- **Rich Text:** Custom implementation with React
- **Date Handling:** [date-fns](https://date-fns.org/)

**Backend & Infrastructure:**
- **Database:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Authentication:** Supabase Auth (Email, GitHub, Google providers)
- **Storage:** Supabase Storage (for file uploads)
- **Realtime:** Supabase Realtime subscriptions
- **API:** Supabase Edge Functions (if applicable)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)
- **Deployment:** [Vercel](https://vercel.com/)

**Development Tools:**
- **Language:** [TypeScript 5.0](https://www.typescriptlang.org/)
- **Linting:** [ESLint](https://eslint.org/) with Next.js config
- **Code Formatting:** [Prettier](https://prettier.io/)
- **Version Control:** Git
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- A [Supabase](https://supabase.com/) account
- A [Vercel](https://vercel.com/) account (for deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/feedback-app.git
   cd feedback-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see below).

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Vercel Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_vercel_analytics_id

# Email (for notifications - if using custom SMTP)
# SMTP_HOST=your_smtp_host
# SMTP_PORT=your_smtp_port
# SMTP_USER=your_smtp_user
# SMTP_PASS=your_smtp_password
# SMTP_FROM=your_from_email
```

> **Note:** Never commit your `.env.local` file to version control. Add it to `.gitignore`.

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

The application will automatically reload if you make changes to the source code.

## Usage

1. **Sign up / Log in** using your email or social providers.
2. **Submit feedback** through the feedback form.
3. **View all feedback** in the dashboard (admin view).
4. **Update status** of feedback items (e.g., "Planned", "In Progress", "Completed").
5. **Add comments** to feedback for discussion.
6. **Analyze trends** using the built-in charts and filters.
7. **Export data** for reporting purposes.
8. **Manage categories** and tags to organize feedback.

## Deployment

The easiest way to deploy your Feedback App is to use the [Vercel Platform](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) from the creators of Next.js.

### Vercel Deployment (Recommended)

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Add the environment variables in Vercel's project settings.
4. Vercel will automatically build and deploy your app.

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
feedback-hub/
├── .github/                 # GitHub workflows and templates
├── .husky/                  # Git hooks
├── components/              # Reusable UI components
│   ├── ui/                  # Radix-based UI components
│   ├── layout/              # Layout components (header, footer, etc.)
│   └── widgets/             # Dashboard widgets and cards
├── constants/               # Application constants
├── contexts/                # React context providers
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions and Supabase client
├── public/                  # Static assets
├── styles/                  # Global CSS and Tailwind configuration
├── types/                   # TypeScript type definitions
├── utils/                   # Helper functions
├── .env.local               # Environment variables (not in repo)
├── .eslintignore            # ESLint ignore patterns
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore patterns
├── .prettierrc              # Prettier configuration
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Scripts

In the `package.json` file, you can find the following scripts:

| Command          | Description                              |
|------------------|------------------------------------------|
| `npm run dev`    | Start the development server             |
| `npm run build`  | Build the application for production     |
| `npm run start`  | Start the production server              |
| `npm run lint`   | Run ESLint for code quality checking     |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to follow the existing code style and add tests for new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/your-username/feedback-hub](https://github.com/your-username/feedback-hub)

---

*Built with ❤️ using [v0.dev](https://v0.dev) and deployed on [Vercel](https://vercel.com/)*