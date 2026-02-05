# Architecture Blueprint

## 1. Arxitektura Qərarları
- **Framework:** Next.js 14+ (App Router). `src/app` qovluğu routing üçün istifadə olunur.
- **Rendering:** Dashboard komponentləri əsasən Client Components (`'use client'`) olacaq (interaktivlik üçün), lakin Layout və Data Fetching Server Components olaraq qalacaq.
- **Routing Modeli:** - `/` -> Redirect to `/login` or `/dashboard`
  - `/login` -> Auth Portal (3D Intro)
  - `/dashboard` -> Main Command Center (Protected Layout)
  - `/dashboard/analytics` -> Detallı qrafiklər

## 2. Folder Structure (Feature-Based)
```bash
src/
├── app/                  # Next.js Routes
│   ├── (auth)/login/     # Route Group for Auth
│   └── (app)/dashboard/  # Route Group for App
├── components/
│   ├── ui/               # Atomic Design (Button, GlassCard, Input)
│   ├── canvas/           # R3F Scenes (Scene.tsx, NeuralCore.tsx)
│   └── layout/           # Sidebar, Header, PageWrapper
├── features/             # Business Logic & Complex Components
│   ├── dashboard/        # DashboardWidgets, ActivityFeed
│   └── analytics/        # ChartView, Heatmap
├── hooks/                # useWindowSize, useScrollProgress
├── lib/                  # utils (cn), constants
├── stores/               # Zustand (useUIStore, useDataStore)
└── types/                # Global TypeScript interfaces
3. Data Layer & State
Mock Data First: API hələ yoxdur. src/lib/mockData.ts daxilində Typed JSON obyektləri yaradılır.

State Management:

Local UI: useState (məs: input dəyəri, modal open).

Global UI: Zustand (məs: Sidebar toggle, Theme config, 3D Performance tier).

Server Data: TanStack Query (gələcək API üçün hazırlıq, indi mock data qaytaracaq).

4. Error Boundaries & Logging
Hər bir əsas widget (GlassCard) daxilində ErrorBoundary olmalıdır. 3D Canvas çökərsə, bütün səhifə ağarmamalı, sadəcə Canvas yerinə statik şəkil gəlməlidir.

5. Acceptance Criteria
[ ] Qovluq strukturu yuxarıdakı ağaca uyğun qurulub.

[ ] "Prop drilling" yoxdur, qlobal state (Zustand) istifadə olunur.

[ ] Mock data type-safe şəkildə implementasiya olunub.