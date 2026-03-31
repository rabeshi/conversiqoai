# Conversiqo AI

Conversiqo AI is a Next.js marketing and product-demo site for a conversational AI SaaS platform. It includes a branded marketing website, industry solution pages, auth flows, onboarding, a demo workspace, and an embedded chatbot experience.

## Overview

This project is designed to present Conversiqo as a polished, enterprise-ready AI product. It combines:

- a marketing homepage and positioning pages
- industry-specific solution pages
- About and Careers pages
- demo sign-in and sign-up flows
- onboarding and workspace setup
- dashboard and analytics screens
- embedded chat and chatbot preview experiences

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- Recharts

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev -- -p 3003
```

Open:

```text
http://localhost:3003
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Main Routes

- `/` - marketing homepage
- `/solutions` - industry solutions index
- `/solutions/[slug]` - detailed industry solution pages
- `/about` - company positioning page
- `/careers` - careers page
- `/sign-in` - demo sign-in
- `/sign-up` - account creation flow
- `/onboarding` - onboarding flow
- `/dashboard` - product workspace demo

## Project Structure

```text
app/           App Router pages
components/    Reusable UI and feature components
lib/           Mock data, utilities, and session helpers
public/        Static assets and local images
```

## Notes

- This repository is currently set up as a demo/product-preview experience.
- Several pages use structured mock data from `lib/mock-data/index.ts`.
- Local images used across the site are stored in `public/images`.

## Validation

TypeScript validation:

```bash
npm run typecheck
```
