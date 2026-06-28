window.ORDERD = window.ORDERD || {};

ORDERD.catLabels = {
  appetizers: 'Khai Vị',
  mains: 'Món Chính',
  rice: 'Cơm & Mì',
  pasta: 'Pasta & Risotto',
  desserts: 'Tráng Miệng',
  drinks: 'Đồ Uống',
};

ORDERD.items = [
  { id:'goi-cuon', name:'Gỏi Cuốn', desc:'Tôm, thịt heo, bún, rau thơm cuốn bánh tráng, chấm tương đậu phộng.', price:35000, cat:'appetizers', tags:['tươi'], img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80' },
  { id:'dimsum', name:'Dimsum Thập Cẩm', desc:'Há cảo, xíu mại, bánh bao chỉ — hấp nóng chấm xì dầu gừng.', price:45000, cat:'appetizers', tags:['hấp'], img:'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80' },
  { id:'gyoza', name:'Gyoza Chiên Giòn', desc:'Bánh xếp Nhật nhân thịt heo, bắp cải chiên giòn chấm tương.', price:40000, cat:'appetizers', tags:['chiên'], img:'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80' },
  { id:'onion-soup', name:'French Onion Soup', desc:'Classic gratineed onion soup with Gruyère crouton.', price:55000, cat:'appetizers', tags:['classic'], img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80' },

  { id:'com-tam', name:'Cơm Tấm Sườn', desc:'Cơm tấm dẻo, sườn nướng mật ong, bì, chả trứng, mỡ hành, nước mắm.', price:55000, cat:'mains', tags:['đặc biệt','featured'], img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80' },
  { id:'peking-duck', name:'Vịt Quay Bắc Kinh', desc:'Da giòn rụm, ăn kèm bánh tráng, dưa leo, sốt hoisin.', price:85000, cat:'mains', tags:['đặc trưng','featured'], img:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80' },
  { id:'tonkotsu', name:'Tonkotsu Ramen', desc:'Nước hầm xương heo 16h, mì dai, chashu, trứng lòng đào.', price:75000, cat:'mains', tags:['mì','featured'], img:'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600&q=80' },
  { id:'boeuf-bourguignon', name:'Boeuf Bourguignon', desc:'Slow-braised beef in Burgundy wine, pearl onions, mushrooms.', price:95000, cat:'mains', tags:['signature','classic'], img:'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&q=80' },
  { id:'sushi-set', name:'Sushi Set 12 Miếng', desc:'Cá hồi, cá ngừ, tôm, bạch tuộc, cơm giấm Nhật.', price:85000, cat:'mains', tags:['sushi'], img:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80' },
  { id:'lamb-rack', name:'Herb-Crusted Rack of Lamb', desc:'New Zealand lamb, rosemary crust, ratatouille, jus.', price:105000, cat:'mains', tags:['premium','signature'], img:'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?w=600&q=80' },

  { id:'yangzhou-rice', name:'Cơm Chiên Dương Châu', desc:'Cơm chiên trứng, tôm, lạp xưởng — hạt cơm tơi vàng óng.', price:45000, cat:'rice', tags:['featured'], img:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80' },
  { id:'crispy-noodle', name:'Mì Xào Giòn Hải Sản', desc:'Mì trứng chiên giòn phủ hải sản, rau cải sốt dầu hào.', price:60000, cat:'rice', tags:['mì','hải sản'], img:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80' },

  { id:'lobster-risotto', name:'Lobster Risotto', desc:'Creamy carnaroli risotto, butter-poached lobster tail.', price:99000, cat:'pasta', tags:['seafood','featured'], img:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80' },
  { id:'truffle-pasta', name:'Truffle Tagliatelle', desc:'Fresh tagliatelle, black truffle cream, aged parmesan.', price:79000, cat:'pasta', tags:['truffle'], img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80' },

  { id:'che-ba-mau', name:'Chè Ba Màu', desc:'Đậu đỏ, đậu xanh, thạch rau câu, nước cốt dừa béo ngậy.', price:25000, cat:'desserts', tags:['ngọt','featured'], img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80' },
  { id:'mochi', name:'Mochi Kem 3 Vị', desc:'Matcha, dâu, vani — bánh nếp dẻo bọc kem lạnh.', price:30000, cat:'desserts', tags:['lạnh'], img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80' },
  { id:'creme-brulee', name:'Crème Brûlée', desc:'Classic vanilla bean custard, caramelized sugar crust.', price:35000, cat:'desserts', tags:['classic'], img:'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80' },

  { id:'tra-dao', name:'Trà Đào Cam Sả', desc:'Trà đào thơm, cam tươi, sả, topping đào ngâm.', price:35000, cat:'drinks', tags:['trà','featured'], img:'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80' },
  { id:'matcha-latte', name:'Matcha Latte Đá', desc:'Matcha Uji đánh tan cùng sữa tươi, đá.', price:40000, cat:'drinks', tags:['matcha'], img:'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80' },
  { id:'wine-red', name:'Bordeaux — Château Margaux', desc:'Rich red blend, blackcurrant, cedar, leather notes.', price:85000, cat:'drinks', tags:['wine'], img:'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80' },
];
