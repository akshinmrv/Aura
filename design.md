# Design System & Tokens

## 1. Rəng Sistemi (Palette)
- **Background:** `Void Black` (#05050A) - Əsas fon.
- **Primary:** `Neon Indigo` (#6366F1) -> `#8B5CF6` (Gradient).
- **Secondary:** `Cyber Cyan` (#06B6D4).
- **Semantic:** - Error: #EF4444 (Red-500)
  - Success: #10B981 (Emerald-500)
  - Text-Primary: #F8FAFC (Slate-50 with 90% opacity)
  - Text-Muted: #94A3B8 (Slate-400)

## 2. Typography (Geist Sans / Inter)
- **Scale:**
  - `text-xs` (Labels), `text-sm` (Body), `text-base` (Main), `text-xl` (Headings), `text-4xl` (Hero Metrics).
- **Weight:** Regular (400) body üçün, Medium (500) buttonlar üçün, Tracking-tight (-0.02em) başlıqlar üçün.

## 3. Glass Tokens (Tailwind Classes)
Şüşə effektləri üçün standart siniflər:
- **.glass-panel:** `bg-black/20 backdrop-blur-xl border border-white/10 shadow-lg`
- **.glass-panel-hover:** `hover:bg-white/5 hover:border-white/20 transition-all duration-300`
- **.glass-input:** `bg-white/5 border border-white/5 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 rounded-xl`

## 4. Component Inventory
- **Atoms:** - `GlowButton`: Hover zamanı daxili işıq (inner-shadow) saçan düymə.
  - `MetricCard`: İkon + Dəyər + Trend (% artım) göstərən kiçik kart.
- **Molecules:**
  - `SidebarItem`: Active state-də sol tərəfi parlayan naviqasiya elementi.
  - `ChartContainer`: Recharts və ya digər qrafik kitabxanası üçün wrapper.

## 5. Layout & Grid
- **Desktop:** Sidebar (260px fixed) + Main Content (Flex-1).
- **Mobile:** Hamburger menu + Full width content.
- **Spacing:** 4px grid (p-4, m-8, gap-6).

## 6. Acceptance Criteria
- [ ] `tailwind.config.ts` faylında xüsusi rənglər və şriftlər təyin olunub.
- [ ] `.glass-*` utility sinifləri CSS layer-də mövcuddur.
- [ ] Bütün komponentlər Dark Mode üçün optimallaşdırılıb.