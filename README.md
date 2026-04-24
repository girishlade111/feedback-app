# InsightFlow

<p align="center">
  <img src="https://capsule-render.vercel.app/type?font=Jost&weight=700&height=100&section=header&desc=AI-Powered%20Feedback%20Intelligence%20Platform&descSize=24&descAlign=50&descAlignY=50&color=0:222222&fontSize=60" alt="InsightFlow Banner"/>
</p>

<p align="center">
  <a href="https://vercel.com/easyweb/v0-insightflow">
    <img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel" alt="Deployed on Vercel"/>
  </a>
  <a href="https://v0.dev/chat/projects/EGRSkHH0hoJ">
    <img src="https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge" alt="Built with v0"/>
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"/>
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.0-%233178C6?logo=typescript" alt="TypeScript"/>
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-%2306B6D4?logo=tailwindcss" alt="Tailwind CSS"/>
  </a>
</p>

> **InsightFlow** is an AI-powered feedback intelligence platform built with Next.js, React, and Supabase. Collect, manage, and analyze user feedback efficiently with real-time updates, advanced analytics, and a modern responsive design.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Database Setup](#database-setup)
  - [Running the App](#running-the-app)
- [Configuration](#configuration)
  - [Environment Variables](#environment-variables)
  - [Supabase Setup](#supabase-setup)
  - [Authentication Providers](#authentication-providers)
- [Features Guide](#features-guide)
  - [Feedback Submission](#feedback-submission)
  - [Admin Dashboard](#admin-dashboard)
  - [Real-time Updates](#real-time-updates)
  - [Analytics & Charts](#analytics--charts)
  - [Export Functionality](#export-functionality)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
  - [Vercel Deployment](#vercel-deployment)
  - [Custom Deployment](#custom-deployment)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Stats](#stats)
- [Contact](#contact)

---

## Overview

**InsightFlow** is a modern, full-featured feedback application designed to help businesses collect, manage, and analyze user feedback efficiently. Built with the latest web technologies, it offers:

- **Real-time feedback collection** with instant notifications
- **AI-powered analytics** for better insights
- **Intuitive admin dashboard** for managing feedback
- **Responsive design** that works seamlessly on all devices
- **Dark/Light mode** for better user experience
- **Export capabilities** for reporting and analysis

**Live Demo:** [https://vercel.com/easyweb/v0-insightflow](https://vercel.com/easyweb/v0-insightflow)

---

## Key Features

### Core Features

| Feature | Description |
|---------|-------------|
| ✅ **User Authentication** | Secure login with Supabase Auth (Email, GitHub, Google) |
| ✅ **Feedback Submission** | Rich text feedback with categorization and tagging |
| ✅ **Admin Dashboard** | Comprehensive admin panel for managing feedback |
| ✅ **Real-time Updates** | Live updates using Supabase Realtime subscriptions |
| ✅ **Responsive Design** | Mobile-first design for all screen sizes |
| ✅ **Dark/Light Mode** | System-preference aware theme switching |
| ✅ **Category Management** | Organize feedback with custom categories |
| ✅ **Status Workflows** | Track feedback with customizable statuses |

### Advanced Features

- 🔄 **Data Visualization** - Interactive charts and analytics dashboards
- 📊 **Export Functionality** - Export data in CSV, JSON, and PDF formats
- 🔍 **Search & Filter** - Powerful search with advanced filters
- 📝 **Rich Text Editing** - Markdown support for feedback descriptions
- 📎 **Attachment Support** - Upload images, files, and documents
- 🔔 **Email Notifications** - Instant notifications for new feedback
- 🗳️ **Voting System** - Community voting for feature requests
- 🛣️ **Roadmap Integration** - Public roadmap for feature planning
- 📈 **Analytics Dashboard** - Comprehensive metrics and insights
- 🔒 **Role-based Access** - Admin, Moderator, and User roles
- 📱 **PWA Support** - Progressive Web App capabilities
- 🌐 **Multi-language Ready** - Internationalization architecture

---

## Tech Stack

### Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | **15.2.4** | React framework with App Router |
| [React](https://react.dev/) | **19** | UI library |
| [TypeScript](https://www.typescriptlang.org/) | **5.0** | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | **3.4.17** | Utility-first CSS framework |
| [Radix UI](https://www.radix-ui.com/) | Latest | Accessible UI components |
| [React Hook Form](https://react-hook-form.com/) | Latest | Form management |
| [Zod](https://zod.dev/) | **3.24.1** | Schema validation |
| [Recharts](https://recharts.org/) | Latest | Data visualization |
| [Lucide React](https://lucide.dev/) | **0.454.0** | Icon library |
| [Sonner](https://sonner.emilkowal.ski/) | Latest | Toast notifications |
| [date-fns](https://date-fns.org/) | **4.1.0** | Date manipulation |

### Backend & Infrastructure

| Service | Purpose |
|--------|---------|
| [Supabase](https://supabase.com/) | Backend-as-a-Service (PostgreSQL, Auth, Storage, Realtime) |
| [Vercel](https://vercel.com/) | Deployment & Edge Network |
| [Vercel Analytics](https://vercel.com/analytics) | Web analytics |

### Development Tools

| Tool | Purpose |
|------|---------|
| [ESLint](https://eslint.org/) | Code linting |
| [Prettier](https://prettier.io/) | Code formatting |
| [Git](https://git-scm.com/) | Version control |
| [npm](https://www.npmjs.com/) | Package management |

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Minimum Version | Notes |
|--------------|----------------|-------|
| **Node.js** | 18.0.0+ | LTS recommended |
| **npm** | 9.0.0+ | Comes with Node.js |
| **Git** | 2.0.0+ | For version control |
| **Supabase Account** | Free Tier | Create at supabase.com |
| **Vercel Account** | Free Tier | Create at vercel.com |

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/girishlade111/InsightFlow.git
cd InsightFlow
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=InsightFlow

# Vercel Analytics (Optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id

# Email Configuration (Optional - for notifications)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
SMTP_FROM=noreply@yourdomain.com
```

> ⚠️ **Important:** Never commit your `.env.local` file to version control. It's already in `.gitignore`.

#### 4. Initialize Supabase Database

Run the following SQL in your Supabase SQL Editor to create the necessary tables:

```sql
-- Enable Realtime
alter publication supabase_realtime add table feedback;

-- Create Feedback Table
create table public.feedback (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  category text not null,
  status text default 'new' check (status in ('new', 'planned', 'in_progress', 'completed', 'closed')),
  priority text default 'medium' check (priority in ('low', 'medium', 'high', 'critical')),
  votes int default 0,
  user_id uuid references auth.users(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.feedback enable row level security;

-- Create Policies
create policy "Enable read access for all users" on public.feedback for select using (true);
create policy "Enable insert for authenticated users" on public.feedback for insert with check (auth.role() = 'authenticated');
create policy "Enable update for authenticated users" on public.feedback for update using (auth.role() = 'authenticated');
```

#### 5. Start Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

---

## Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase service role key (server-side) |
| `NEXT_PUBLIC_APP_URL` | Yes | Application URL |
| `NEXT_PUBLIC_APP_NAME` | No | Application name (default: InsightFlow) |
| `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` | No | Vercel Analytics ID |

### Supabase Setup

1. **Create a new Supabase project** at [supabase.com](https://supabase.com)
2. **Get your credentials** from Project Settings → API
3. **Configure authentication** providers in Authentication → Providers
4. **Set up storage** buckets for file uploads
5. **Enable realtime** for real-time subscriptions

### Authentication Providers

Enable these providers in Supabase Dashboard → Authentication → Providers:

- ✅ Email/Password
- ✅ GitHub
- ✅ Google
- ✅ (Optional) Apple, Facebook, Twitter

---

## Features Guide

### Feedback Submission

1. Click **"Add Feedback"** button
2. Fill in the feedback form:
   - **Title** (required, max 200 chars)
   - **Description** (optional, markdown supported)
   - **Category** (select from predefined or custom)
   - **Priority** (low, medium, high, critical)
3. Attach files (images, documents)
4. Submit and receive confirmation

### Admin Dashboard

Access the admin dashboard at `/admin` with these features:

- 📋 **Feedback List** - View and manage all feedback
- 📊 **Analytics** - Charts and metrics
- 👥 **User Management** - View registered users
- ⚙️ **Settings** - Configure categories and statuses
- 📁 **Export** - Download data in multiple formats

### Real-time Updates

Enable real-time subscriptions to receive:

- 🔔 New feedback notifications
- 📝 Status changes
- 👍 New votes
- 💬 Comments

### Analytics & Charts

View analytics at `/analytics`:

- 📈 Feedback by status (pie chart)
- 📊 Feedback over time (line chart)
- 🏆 Top categories (bar chart)
- ⏱️ Average response time

### Export Functionality

Export data from `/admin/export`:

- 📄 **CSV** - For spreadsheets
- 📋 **JSON** - For APIs
- 📑 **PDF** - For reports

---

## Project Structure

```
InsightFlow/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── actions.ts             # Server actions
│   ├── admin/                  # Admin routes
│   │   ├── page.tsx           # Admin dashboard
│   │   └── analytics/
│   └── api/                  # API routes
│       └── ...
├── components/                   # React components
│   ├── ui/                    # Radix UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── table.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── feedback/              # Feedback components
│   │   ├── feedback-card.tsx
│   │   ├── feedback-form.tsx
│   │   └── feedback-list.tsx
│   ├── charts/               # Chart components
│   │   └── analytics-chart.tsx
│   └── layout/               # Layout components
│       ├── header.tsx
│       ├── footer.tsx
│       └── sidebar.tsx
├── lib/                      # Utility functions
│   ├── supabase.ts           # Supabase client
│   ├── utils.ts             # Helper functions
│   ├── initial-data.ts      # Sample data
│   └── types.ts            # TypeScript types
├── hooks/                    # Custom React hooks
│   ├── use-feedback.ts
│   ├── use-auth.ts
│   └── use-realtime.ts
├── contexts/                # React contexts
│   ├── auth-context.tsx
│   └── theme-context.tsx
├── types/                   # TypeScript types
│   ├── feedback.ts
│   └── user.ts
├── constants/              # App constants
│   ├── categories.ts
│   └── statuses.ts
├── public/                  # Static assets
│   ├── images/
│   ├── fonts/
│   ├── logo.svg            # Logo
│   └── favicon.ico         # Favicon
├── .env.local              # Environment variables (not committed)
├── next.config.js          # Next.js config
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json           # TypeScript config
├── postcss.config.js       # PostCSS config
├── package.json           # Dependencies
├── pnpm-lock.yaml        # pnpm lock file
└── README.md            # This file
```

---

## Deployment

### Vercel Deployment (Recommended)

The easiest way to deploy InsightFlow:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready to deploy"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Configure environment variables
   - Click **Deploy**

3. **Done!** Your app is live at `https://your-project.vercel.app`

### Custom Deployment

For other platforms:

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## API Reference

### Supabase Tables

| Table | Description |
|-------|-------------|
| `feedback` | User feedback submissions |
| `profiles` | User profiles |
| `comments` | Feedback comments |
| `votes` | Feedback votes |

### Edge Functions

| Function | Description |
|----------|-------------|
| `/api/send-notification` | Send email notifications |
| `/api/export-data` | Export feedback data |

---

## Contributing

We welcome contributions! Here's how you can help:

1. ⭐ **Star** the repository
2. 🍴 **Fork** the project
3. 🔧 **Create** your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
4. 💻 **Make** your changes
5. ✅ **Test** your changes
6. 📝 **Commit** your changes
   ```bash
   git commit -m 'Add AmazingFeature'
   ```
7. 🚀 **Push** to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
8. 🎉 **Open** a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Stats

<p align="center">
  <img src="https://capsule-render.vercel.app/type?font=Jost&weight=600&height=60&section=stats&repos=1&issues=0&pulls=0&contribs=1&stars=1&commits=1" alt="GitHub Stats"/>
</p>

| Metric | Value |
|--------|-------|
| ⭐ Stars | 1 |
| 🍴 Forks | 0 |
| 👁️ Watchers | 0 |
| 📁 Files | 25+ |
| 📦 Dependencies | 60+ |
| 🌍 Lines of Code | 10,000+ |
| 📝 Commits | 20+ |

---

## Contact

Connect with me:

[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/girish_lade_/) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/girish-lade-075bba201/) [![GitHub](https://img.shields.io/badge/GitHub-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/girishlade111) [![CodePen](https://img.shields.io/badge/CodePen-%23161617.svg?&style=for-the-badge&logo=codepen&logoColor=white)](https://codepen.io/Girish-Lade-the-looper)

**Email:** [admin@ladestack.in](mailto:admin@ladestack.in)

**Website:** [ladestack.in](https://ladestack.in)

**Project Link:** [https://github.com/girishlade111/InsightFlow](https://github.com/girishlade111/InsightFlow)

---

<p align="center">
  <sub>Built with ❤️ using <a href="https://v0.dev">v0.dev</a> and deployed on <a href="https://vercel.com">Vercel</a></sub>
</p>