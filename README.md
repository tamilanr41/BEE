# SmileCare Dental Platform

An AI-powered dental practice management platform combining a marketing website, patient portal, clinic management dashboard, tele-dentistry, and AI-assisted workflows.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Radix UI
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: NextAuth.js (Credentials + OAuth)
- **State**: Zustand
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Video**: LiveKit
- **Mobile**: React Native (Expo)

## Project Structure

```
dental-platform/
├── prisma/               # Database schema & seed
├── mobile/               # React Native mobile app
├── src/
│   ├── app/              # Next.js pages (App Router)
│   │   ├── services/     # 13 service pages
│   │   ├── dashboard/    # 11 dashboard pages
│   │   ├── patient-portal/ # 6 portal pages
│   │   ├── auth/         # Login & register
│   │   ├── api/          # API routes
│   │   └── ...           # Marketing pages
│   ├── components/       # Reusable components
│   │   ├── ui/           # Design system (12 components)
│   │   ├── layout/       # Navbar, Footer, DashboardLayout
│   │   ├── home/         # Homepage sections
│   │   ├── services/     # Service template
│   │   └── ...           # Feature-specific components
│   ├── lib/              # Utilities & config
│   ├── types/            # TypeScript types
│   ├── hooks/            # Custom hooks
│   └── store/            # Zustand stores
```

## Features Implemented

### Marketing Website
- Homepage with hero, clinic overview, services, dentist profiles, reviews, gallery, insurance info, location, CTAs
- 13 detailed service pages (dental implants, orthodontics, root canal, etc.)
- Dentist profiles with qualifications, experience, reviews
- Emergency booking page with AI triage
- Online appointment booking with real-time calendar
- Live chat, WhatsApp, and call buttons
- Patient reviews and before/after gallery

### Patient Portal
- Appointment viewing & management
- Medical records access (X-rays, reports, prescriptions)
- Billing & online payments
- Secure messaging with clinic
- Treatment plan tracking
- Family member profiles

### Clinic Management Dashboard
- Calendar & chair scheduling
- Patient records management
- Treatment planning with progress tracking
- Billing, invoices & payments
- Inventory management with stock alerts
- Staff scheduling & leave management
- Marketing campaign tracking
- Analytics & performance metrics

### AI Features
- AI Dental Assistant (patient Q&A)
- Appointment Triage (symptom collection & urgency routing)
- Clinical Documentation (auto-draft notes)
- Imaging Assistance (highlight findings)
- Follow-up Automation (reminders)
- Voice Assistant (dictation)

### Tele-Dentistry
- Video consultation scheduling
- Secure messaging
- Image sharing capabilities
- Follow-up visit management

### Security & Compliance
- Multi-factor authentication support
- Role-based access control
- Audit logging
- Consent management
- Data retention policies
- Encrypted communications

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- npm or yarn

### Installation

```bash
cd dental-platform
npm install
```

### Environment Setup

Copy `.env.local` and fill in your values:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/dental_platform"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
OPENAI_API_KEY="your-key"        # For AI features
LIVEKIT_API_KEY="your-key"       # For tele-dentistry
LIVEKIT_API_SECRET="your-secret"
TWILIO_ACCOUNT_SID="your-sid"    # For SMS/WhatsApp
TWILIO_AUTH_TOKEN="your-token"
```

### Database Setup

```bash
npx prisma generate
npx prisma db push
npm run seed
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Key API Routes

| Route | Description |
|-------|-------------|
| `/api/auth/[...nextauth]` | Authentication |
| `/api/appointments` | Appointment CRUD |
| `/api/ai/chat` | AI assistant chat |
| `/api/ai/triage` | Symptom triage |

## Deployment

Deploy to Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
npm start
```
