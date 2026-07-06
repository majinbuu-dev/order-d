# Modern Theme — Design System

## Tổng quan

Modern là theme tối giản, hiện đại với 4 bộ màu có thể chuyển đổi trực tiếp trên giao diện.

## Bộ màu

| Tên | Primary | Mô tả |
|---|---|---|
| **Monochrome** | `#0a0a0a` | Đen trắng tối giản, mặc định |
| **Ocean** | `#213555` | Xanh navy đậm, lạnh, chuyên nghiệp |
| **Sunset** | `#5c3d2e` | Nâu espresso ấm, earthy |
| **Forest** | `#34472a` | Xanh thông đậm, tự nhiên |

Mỗi bộ màu định nghĩa 10 CSS custom properties: `--bg`, `--bg-secondary`, `--surface`, `--border`, `--text`, `--text-secondary`, `--primary`, `--primary-hover`, `--accent`, `--accent-light`. Chuyển đổi qua `data-theme` attribute trên `<html>`.

## Typography

- **Font chính**: Inter (Google Fonts, weights 400–800)
- **Fallback**: system-ui, sans-serif
- **Cỡ chữ**: 12px–14px cho body, 16px–24px cho heading
- Không dùng font display (đã loại bỏ Playfair Display)

## Component chính

### Menu (`menu.html`)
- **Header**: 2 hàng — tên quán + theme picker | search bar full-width
- **Category chips**: scroll ngang, active = nền primary + chữ trắng
- **Product cards**: ảnh 3:4 full-card, tên + giá overlay trên gradient đen, bo `rounded-3xl`
- **Nút "+"**: nền trắng, icon đen, shadow 3D nhẹ
- **Cart drawer**: slide từ phải, hiển thị size + ghi chú
- **Floating cart**: hiện khi có món, nền primary + chữ trắng
- **Product modal**: bottom sheet, ảnh 16:9, chọn size từ data, ghi chú, animation slide-up/slide-down
- **Background**: hologram icon mờ 8% float nhẹ

### Store (`store.html`)
- **Cover**: ảnh bìa `rounded-b-3xl`, Menu button (nền trắng) + status badge (primary) 2 góc trên
- **Stats**: đánh giá, lượt xem, check-in + nút Check in
- **Quick actions**: pill ngang (Gọi, Bàn) nền primary chữ trắng + giờ mở cửa text phải
- **Tabs**: vuốt ngang chuyển tab, animation slide 250ms
  - Ảnh (mặc định) → Đánh giá → Giới thiệu → Khám phá
- **Photo lightbox**: fullscreen đen, mũi tên + swipe chuyển ảnh, counter
- **Discover popup**: bấm card mở modal chi tiết bài viết
- **Book modal**: form đặt bàn với date/time/guests/phone
- **Page load**: animation fade-up + scale-in theo tầng (0.05s → 0.34s)

### Checkout (`checkout.html`)
- Danh sách món kèm size + ghi chú
- Tính tiền: tạm tính, VAT 10%, tổng
- Chọn phương thức: Tiền mặt / Chuyển khoản (pill fill style)
- Nút Đặt hàng hiển thị tổng tiền

### Confirm (`confirm.html`)
- Animation checkmark pop-in
- Thông tin đơn hàng: mã đơn, số món, tổng tiền
- Nút "Tiếp tục đặt món" + link về store

## Interactions & Animations

| Animation | Timing | Mô tả |
|---|---|---|
| `cardIn` | 0.4s ease-out | Card menu xuất hiện staggered |
| `fadeUp` | 0.5s ease-out | Element fade từ dưới lên |
| `scaleIn` | 0.4s ease-out | Scale từ 0.92 → 1 |
| `slideUp` / `slideDown` | 0.35s / 0.25s | Modal open/close |
| `slideInRight` / `slideInLeft` | 0.25s | Tab transition |
| `pop` | 0.3s | Badge pop |
| `floatHolo` | 12s | Hologram icon float |
| `pulse` | 2s | Dot nhấp nháy |

## Cấu trúc dữ liệu

### `data/menu.js`
```js
ORDERD.items = [{
  id, name, desc, price, cat, tags, img,
  sizes: [{ size: 'S', label: 'Nhỏ', price: 0 }, ...] // optional
}]
```

### `data/store.js`
```js
ORDERD.store = { name, address, phone, rating, gallery[], discover[], reviews[], ... }
```

## Theme switching

Lưu vào `localStorage('orderd_modern_theme')`. Áp dụng `data-theme` attribute lên `<html>`. Tự động khôi phục khi load trang.

## Browser support

- CSS custom properties (CSS vars)
- Backdrop filter (glass effect, progressive enhancement)
- Pointer events + touch events
- LocalStorage
