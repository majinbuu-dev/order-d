# Modern Theme — Chuyển sang Next.js / React

## Tổng quan

Theme Modern hiện dùng HTML thuần + Tailwind CDN + vanilla JS. Để chuyển sang Next.js hoặc React, cần tách thành component và dùng Tailwind JIT.

## Các bước chính

### 1. Cài đặt

```bash
npx create-next-app@latest orderd-app --typescript --tailwind
cd orderd-app
npm install
```

### 2. Cấu hình Tailwind

`tailwind.config.ts`:
```ts
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

Import Inter font trong `app/layout.tsx`:
```tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin', 'vietnamese'], weight: ['400','500','600','700','800'] })
```

### 3. Theme system (CSS Variables)

Tạo `app/globals.css`:
```css
:root {
  --bg: #ffffff;
  --primary: #0a0a0a;
  /* ... 10 biến cho mỗi theme */
}
[data-theme="ocean"] { --primary: #213555; /* ... */ }
```

Dùng trong Tailwind với arbitrary values:
```tsx
<div className="bg-[var(--bg)] text-[var(--text)]" />
```

Hoặc wrap trong ThemeProvider để quản lý `data-theme`.

### 4. Component tree

```
app/
├── layout.tsx          # ThemeProvider + font
├── page.tsx            # Redirect hoặc index
├── menu/
│   └── page.tsx        # Trang menu
├── store/
│   └── page.tsx        # Trang store
├── checkout/
│   └── page.tsx        # Trang checkout
├── confirm/
│   └── page.tsx        # Trang confirm
components/
├── Header.tsx          # Header 2 hàng
├── CategoryChips.tsx   # Scroll ngang
├── ProductCard.tsx     # Card 3:4 với overlay
├── ProductModal.tsx    # Bottom sheet detail
├── CartDrawer.tsx      # Slide từ phải
├── CartProvider.tsx    # Context quản lý giỏ hàng
├── ThemePicker.tsx     # 4 chấm màu
├── StoreCover.tsx      # Ảnh bìa + badge
├── QuickActions.tsx    # Gọi, Bàn, giờ mở cửa
├── Tabs.tsx            # Swipe tabs
├── PhotoLightbox.tsx   # Fullscreen ảnh
├── DiscoverModal.tsx   # Popup bài viết
├── BookModal.tsx       # Form đặt bàn
└── HologramBg.tsx      # Background icon nổi
data/
├── menu.ts             # ORDERD.items
└── store.ts            # ORDERD.store
```

### 5. Quản lý state

| State | Cách làm |
|---|---|
| Giỏ hàng | React Context `CartProvider` + `localStorage` |
| Theme | `ThemeProvider` + `localStorage('orderd_modern_theme')` |
| Active tab | local state trong `Tabs.tsx` |
| Search query | local state trong `MenuPage` |
| Modal open/close | local state (`useState`) |

### 6. Animation

Dùng CSS modules hoặc `framer-motion`:
```bash
npm install framer-motion
```

```tsx
import { motion, AnimatePresence } from 'framer-motion'

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {/* modal content */}
    </motion.div>
  )}
</AnimatePresence>
```

Hoặc giữ CSS keyframes trong `globals.css` và dùng class như hiện tại.

### 7. Swipe gestures

Dùng `framer-motion` drag hoặc custom hook:
```tsx
import { useSwipeable } from 'react-swipeable'

const handlers = useSwipeable({
  onSwipedLeft: () => nextTab(),
  onSwipedRight: () => prevTab(),
  delta: 70,
})
```

### 8. Data fetching

Copy `data/menu.js` và `data/store.js` vào thư mục `data/`. Export thành module:
```ts
// data/menu.ts
export const ORDERD = { items: [...], catLabels: {...} }
```

Import trực tiếp (static data). Nếu muốn dynamic, thay bằng API call hoặc CMS.

### 9. Routing

```
/               → index (chọn template)
/menu           → menu page
/store          → store page
/checkout       → checkout page
/confirm        → confirm page
```

Dùng Next.js App Router file-based routing.

### 10. Checklist chuyển đổi

- [ ] Copy CSS variables từ `<style>` → `globals.css`
- [ ] Tách HTML → React components
- [ ] Thay `onclick` → `onClick` (React event)
- [ ] Thay `class` → `className`
- [ ] Thay `style="..."` → `style={{...}}`
- [ ] Thay `innerHTML` render → JSX `.map()`
- [ ] Thay `document.getElementById` → `useRef` / state
- [ ] Chuyển cart logic → `CartContext`
- [ ] Thêm `framer-motion` cho animation
- [ ] Thêm `react-swipeable` cho gesture
- [ ] Responsive: giữ `max-w-lg mx-auto`, mobile-first
