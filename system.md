# System: Project Aura (Spatial SaaS Dashboard)

## 1. Layihənin Məqsədi
"Aura" standart admin panelini "Spatial Command Center" təcrübəsinə çevirən, Next.js və R3F (React Three Fiber) əsaslı yüksək performanslı bir veb tətbiqidir. Məqsəd istifadəçiyə məlumatı sadəcə göstərmək yox, "hiss etdirmək"dir. Biz "Layered Glassmorphism" və "Ambient AI Presence" konseptlərini birləşdiririk.

## 2. Agent Davranışı və İş Prinsipi
- **Docs-First:** Kod yazmazdan əvvəl bu sənədlərə baxılır. Sənədlərdə olmayan heç bir "random feature" əlavə edilmir.
- **Visual Excellence:** Hər bir UI elementi "premium" hissiyat verməlidir.
- **Performance-Obsessed:** Vizual gözəllik performansı öldürməməlidir.
- **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, React Three Fiber, Zustand.

## 3. Scope və Definition of Done (DoD)
Layihə "Vertical Slice" (MVP) olaraq hazırlanır:
- **Pages:** Login (Portal), Dashboard (Main), Analytics (Deep Dive).
- **Features:** 3D "Neural Core" hero, interaktiv qrafiklər (mock data), glass UI sistemi.
- **DoD:** - Lighthouse Performance > 90 (Desktop).
  - Təmiz konsol (xəta yoxdur).
  - Build uğurla tamamlanır.
  - Type checking (Strict) keçir.

## 4. Risklər və Prioritetlər
- **Risk:** Şüşə effektləri (backdrop-filter) və 3D səhnə zəif cihazlarda FPS düşüşü yarada bilər.
- **Mitigasiya:** `drei/PerformanceMonitor` ilə adaptiv keyfiyyət və statik fallback rejimi.
- **Prioritet:** 1. UI Struktur və Naviqasiya -> 2. 3D Hero -> 3. Micro-interactions -> 4. Data Binding.

## 5. Acceptance Criteria
- [ ] Layihə arxitekturası `architecture.md` sənədinə tam uyğundur.
- [ ] Bütün səhifələr həm desktop, həm mobil cihazlarda (responsive) işləyir.
- [ ] Rəng və şriftlər `design.md` sənədindən kənara çıxmır.