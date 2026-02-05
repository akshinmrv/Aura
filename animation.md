# Motion System & Microinteractions

## 1. Texnologiya: Framer Motion
- Next.js və React komponentlərinin mount/unmount döngüsünü idarə etmək üçün ən yaxşı seçimdir.

## 2. Motion Qaydaları
- **Spring Physics:** "Linear" animasiya yoxdur. `type: "spring", stiffness: 200, damping: 20` standartı.
- **Stagger:** Səhifə yüklənəndə widget-lar eyni anda yox, `0.05s` gecikmə ilə ardıcıl gəlir.
- **Duration:**
  - Micro (Hover): 0.2s - 0.3s
  - Macro (Page Transition): 0.5s - 0.8s

## 3. Scroll Storytelling
- Dashboard-da aşağı endikcə "Recent Activity" siyahısı yavaşca `opacity: 0 -> 1` və `y: 20 -> 0` olur.

## 4. Reduced Motion
- `prefers-reduced-motion: reduce` sistem ayarı aktivdirsə:
  - Parallax effektləri sönür.
  - 3D fırlanma dayanır.
  - "Warp speed" keçidləri sadə "Fade in/out" ilə əvəz olunur.

## 5. Acceptance Criteria
- [ ] Animasiyalar "janky" (qırıq-qırıq) deyil, axıcıdır (60fps).
- [ ] Səhifə keçidləri (Routing) yumşaqdır.
- [ ] Reduced motion rejimi düzgün işləyir.