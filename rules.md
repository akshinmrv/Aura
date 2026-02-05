# Code Standards & Workflow

## 1. TypeScript Rules
- **Strict Mode:** `true`.
- **No Any:** `any` tipi qadağandır. Məlumat strukturları üçün `interface` istifadə olunmalıdır.
- **Props:** Bütün komponentlər `Props` interfeysi ilə tiplənməlidir.

## 2. Coding Conventions
- **Naming:**
  - Components: `PascalCase` (e.g., `GlassCard.tsx`)
  - Functions/Hooks: `camelCase` (e.g., `useWindowSize.ts`)
  - Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_COUNT`)
- **Imports:** Absolute imports istifadə et (`@/components/...`).
- **Comments:** Kodu izah etmə, "niyə" yazdığını izah et. Mürəkkəb məntiqlər üçün JSDoc yaz.

## 3. Git & Quality
- **Commit:** Conventional Commits (e.g., `feat: add 3d hero`, `fix: sidebar z-index`).
- **Lint:** ESLint və Prettier hər save zamanı işə düşməlidir.

## 4. Acceptance Criteria
- [ ] `npm run lint` əmri heç bir xəta qaytarmır.
- [ ] Kod strukturu təmiz və oxunaqlıdır.
- [ ] Lazımsız `console.log`-lar təmizlənib.