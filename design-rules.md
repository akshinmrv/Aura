# UX, UI & Accessibility Rules

## 1. UI Qaydaları (Visual Hierarchy)
- **Z-Axis:** Ən vacib elementlər (Modals, Dropdowns) ən üstdə və daha yüksək blur/opacity-ə sahib olmalıdır.
- **Whitespace:** Elementlər sıxışdırılmamalıdır. "Negative space" lüks hissi yaradır.
- **Contrast:** Mətnlər `Void Black` fonunda mütləq oxuna bilən olmalıdır (Minimum 4.5:1).

## 2. Interaction Qaydaları
- **Hover:** Hər bir interaktiv element (button, card, link) hover zamanı reaksiya verməlidir (rəng, border, və ya yüngül scale).
- **Active/Focus:** Focus halında (Tab düyməsi) elementin ətrafında `ring-2 ring-indigo-500` olmalıdır.
- **Disabled:** Opacity 50%, `cursor-not-allowed`, hover effekti yoxdur.

## 3. Accessibility (A11y)
- **Semantic HTML:** `<div onClick>` yox, `<button>` istifadə olunmalıdır.
- **Images:** Bütün `img` teqlərində `alt` atributu olmalıdır. 3D Canvas üçün "screen-reader-only" təsvir verilməlidir.
- **Keyboard Nav:** Bütün dashboard klaviatura ilə idarə oluna bilməlidir.

## 4. Acceptance Criteria
- [ ] Lighthouse Accessibility skoru > 90.
- [ ] Focus halqaları (focus rings) görünür və işləyir.
- [ ] Rəng kontrastı WCAG AA standartlarına uyğundur.