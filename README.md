# OrderD — Digital Menu Theme System

Multi-theme digital menu platform. Each theme is a standalone folder with 3 pages: menu, store, checkout. Data is centralized in `data/` for consistency.

## Project Structure

```
order-d/
  index.html              ← Theme selector (clears localStorage before switching)
  data/
    menu.js               ← Shared menu data — loaded by ALL themes
    store.js              ← Shared store data — loaded by ALL themes
  theme/
    default/              ← Vietnamese cuisine
    chinese/              ← 锦绣楼 (Chinese)
    japan/                ← 桜亭 (Japanese)
    vintage/              ← Le Petit (European)
```

## Data Files (`data/`)

All 4 themes load from the **same** `data/menu.js` and `data/store.js`. This ensures any schema breakage is caught across all themes immediately.

### Menu Data (`data/menu.js`)

```js
window.ORDERD = {
  catLabels: { appetizers:'Khai Vị', mains:'Món Chính', ... },
  items: [{
    id: 'pho-bo',               // Unique ID (required)
    name: 'Phở Bò Tái',         // Display name (required)
    desc: 'Mô tả...',           // Description (required)
    price: 55000,               // VND integer (required)
    cat: 'mains',               // Category key (required)
    tags: ['best','招牌',...],  // Tags for ALL themes (required)
    img: 'https://...',         // Image URL (required)
  }]
};
```

Each theme defines its own `ORDERD.featuredTag = 'featured'` — all themes use the **same** `'featured'` tag. Items tagged `'featured'` in `data/menu.js` will show a badge across all 4 themes.

### Store Data (`data/store.js`)

```js
ORDERD.store = {
  name, address, phone, openHour, closeHour,
  rating, reviewCount, checkinCount,
  stats: { dishCount, prepTime, tables },
  amenities: [...],
  gallery: [...],
  discover: [{ tag, title, time, views, img }],
  reviews: [{ initials, name, stars, text, time }],
};
```

## Core Features (All Themes)

All data comes from `data/menu.js` and `data/store.js`. Changing data there updates all 4 themes.

| Feature | Data Source |
|---|---|
| Menu items | `ORDERD.items` from `data/menu.js` |
| Categories | `ORDERD.catLabels` from `data/menu.js` |
| Featured badge | Items tagged `'featured'` in `data/menu.js` |
| Store name, address, phone | `ORDERD.store` from `data/store.js` |
| Rating, check-in count | `ORDERD.store` |
| Stats (dishes, prep time) | `ORDERD.store.stats` |
| Gallery images | `ORDERD.store.gallery` |
| Discover posts | `ORDERD.store.discover` |
| Reviews | `ORDERD.store.reviews` |
| Amenities | `ORDERD.store.amenities` |
| Hours (open/close) | `ORDERD.store.openHour / closeHour` |

## Cart Format

```json
// Key: orderd_cart
[{ "id": "pho-bo", "qty": 2, "name": "Phở Bò Tái", "price": 55000, "img": "https://..." }]
```

## Featured Tag Convention

| Theme | Tag | Badge |
|---|---|---|
| Default | `best` | BEST |
| Chinese | `招牌` | 招牌 |
| Japan | `おすすめ` | 推 |
| Vintage | `signature` | ★ special |

## Color Presets

| Theme | Primary | Background | Accent | Fonts |
|---|---|---|---|---|
| Default | `#1c1917` | `#fafaf9` | `#d47b27` | Inter + Playfair Display |
| Chinese | `#c62828` | `#fdf7f4` | gold | Inter + Playfair Display |
| Japan | `#1a237e` | `#faf8f5` | white | Inter + Playfair Display |
| Vintage | `#5d4037` | `#f5f0e8` | `#c8a165` | + Cormorant Garamond |

## Creating a New Theme

1. Copy an existing theme: `cp -r theme/default theme/<name>`
2. Edit `data/menu.js`: add your items (keep all existing items for compatibility testing, or replace them)
3. Edit `data/store.js`: update store info
4. Edit `theme/<name>/menu.html`:
   - Set `<script>ORDERD.featuredTag = '<your-tag>';</script>` after the data include
   - Update CSS colors (Tailwind classes throughout)
   - Update restaurant name in header HTML
5. Edit `theme/<name>/store.html`: update CSS + hardcoded values
6. Edit `theme/<name>/checkout.html`: update CSS
7. Add entry to `index.html` with `onclick="clearStorage()"`
