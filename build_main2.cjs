const fs = require('fs');

const csv = fs.readFileSync('catalog.csv', 'utf16le');
const lines = csv.split('\n');

const products = [];

lines.forEach((line) => {
  if (!line.startsWith('SKU-')) return;
  const parts = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') inQuotes = !inQuotes;
    else if (line[i] === ',' && !inQuotes) { parts.push(current); current = ''; }
    else current += line[i];
  }
  parts.push(current);

  if (parts.length >= 7) {
    const sku = parts[0], name = parts[1], category = parts[2], gender = parts[3], color = parts[4], description = parts[5];
    
    let price = 85.00;
    if (category === 'Polos Clásicos') price = 30.00;
    if (category === 'Polos Estampados') price = 45.00;
    if (category === 'Polos Personalizados') price = 50.00;

    const cName = color.toLowerCase();
    const hexMap = {
      'rojo': '#8B0000', 'azul': '#001F3F', 'verde': '#228B22', 'amarillo': '#FFD700',
      'morado': '#4B0082', 'naranja': '#FF8C00', 'dorado': '#D4AF37', 'plomo': '#808080',
      'azul oscuro': '#000033', 'rojo oscuro': '#4d0000', 'negro': '#000000', 'blanco': '#ffffff'
    };
    const colorHex = hexMap[cName] || '#000000';

    let img = '/images/polo_blanco.png';
    // EXACT IMAGE MAPPING BY CATEGORY
    if (category === 'Polos de Cuello') {
      if (cName.includes('rojo')) img = '/images/polo_cuello_rojo.png';
      else if (cName.includes('azul') || cName.includes('negro')) img = '/images/polo_cuello_azul.png';
      else img = '/images/polo_cuello_blanco.png';
    } 
    else if (category === 'Polos Clásicos') {
      if (cName.includes('rojo')) img = '/images/polo_rojo.png';
      else if (cName.includes('verde')) img = '/images/polo_verde.png';
      else if (cName.includes('amarillo') || cName.includes('dorado')) img = '/images/polo_amarillo.png';
      else if (cName.includes('morado')) img = '/images/polo_morado.png';
      else if (cName.includes('naranja')) img = '/images/polo_naranja.png';
      else if (cName.includes('plomo') || cName.includes('azul')) img = '/images/polo_gris.png';
      else if (cName.includes('negro')) img = '/images/polo_estampado_negro.png'; // closest
      else img = '/images/polo_blanco.png';
    }
    else if (category === 'Polos Estampados') {
      if (cName.includes('verde') || cName.includes('azul')) img = '/images/polo_estampado_verde.png';
      else img = '/images/polo_estampado_negro.png';
    }
    else if (category === 'Polos Personalizados') {
      if (gender === 'Mujer') img = '/images/polo_corte_princesa.png';
      else img = '/images/polo_estampado_negro.png';
    }

    products.push({
      id: sku, name: name, brand: 'Skyline SAC ' + (category.split(' ')[1] || 'Premium'),
      price: price, image: img, category: category, description: description,
      sizes: gender === 'Hombre' ? ['S', 'M', 'L', 'XL'] : ['XS', 'S', 'M', 'L'],
      colorName: cName, colorHex: colorHex, featured: sku.includes('001') || sku.includes('014') || sku.includes('025')
    });
  }
});

const mainJsTemplate = `
const products = ${JSON.stringify(products, null, 2)};

// State
let activeFilters = { categories: [], sizes: [], colors: [] };
let cart = [];
let currentFilteredProducts = [];
let visibleCount = 12;

// DOM Elements
const grid = document.getElementById('product-grid');
const count = document.getElementById('product-count');
const activeFiltersContainer = document.getElementById('active-filters');
const featuredCarousel = document.getElementById('featured-carousel');

const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartBadge = document.getElementById('cart-badge');
const cartTotalPrice = document.getElementById('cart-total-price');

const mobileFilterBtn = document.getElementById('mobile-filter-btn');
const sidebar = document.getElementById('sidebar');
const filterOverlay = document.getElementById('filter-overlay');
const closeFilterBtn = document.getElementById('close-filter');

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
  currentFilteredProducts = [...products];
  renderProductsGrid();
  updateProductCount(products.length);
  setupEventListeners();
  updateCartUI();
});

function setupEventListeners() {
  document.querySelectorAll('.filter-checkbox').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const val = e.target.value;
      if (e.target.checked) { if (!activeFilters.categories.includes(val)) activeFilters.categories.push(val); }
      else { activeFilters.categories = activeFilters.categories.filter(v => v !== val); }
      applyFilters();
    });
  });

  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const val = e.target.dataset.size;
      e.target.classList.toggle('selected');
      if (e.target.classList.contains('selected')) { if (!activeFilters.sizes.includes(val)) activeFilters.sizes.push(val); }
      else { activeFilters.sizes = activeFilters.sizes.filter(v => v !== val); }
      applyFilters();
    });
  });

  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const val = e.target.dataset.color;
      e.target.classList.toggle('selected');
      if (e.target.classList.contains('selected')) { if (!activeFilters.colors.includes(val)) activeFilters.colors.push(val); }
      else { activeFilters.colors = activeFilters.colors.filter(v => v !== val); }
      applyFilters();
    });
  });

  cartIcon.addEventListener('click', toggleCart);
  closeCartBtn.addEventListener('click', toggleCart);
  cartOverlay.addEventListener('click', toggleCart);
  mobileFilterBtn.addEventListener('click', toggleFilterMenu);
  closeFilterBtn.addEventListener('click', toggleFilterMenu);
  filterOverlay.addEventListener('click', toggleFilterMenu);
}

function applyFilters() {
  currentFilteredProducts = products.filter(p => {
    const cat = activeFilters.categories.length === 0 || activeFilters.categories.includes(p.category);
    const siz = activeFilters.sizes.length === 0 || activeFilters.sizes.some(s => p.sizes.includes(s));
    const col = activeFilters.colors.length === 0 || activeFilters.colors.includes(p.colorName);
    return cat && siz && col;
  });
  visibleCount = 12;
  updateProductCount(currentFilteredProducts.length);
  renderProductsGrid();
  updateActiveFilterTags();
}

function updateProductCount(num) {
  count.textContent = \`\${num} artículo\${num !== 1 ? 's' : ''}\`;
}

function createProductCardHTML(product, index) {
  const card = document.createElement('article');
  card.className = 'product-card fade-in';
  card.style.animationDelay = \`\${(index % 12) * 0.05}s\`;
  
  const colorsHtml = \`<div style="width:12px; height:12px; border-radius:50%; background-color:\${product.colorHex}; border:1px solid rgba(0,0,0,0.1);" title="\${product.colorName}"></div>\`;
  const pricePrefix = product.category === 'Polos Personalizados' ? 'Desde ' : '';

  let badgeHtml = '';
  let graphicOverlayHtml = '';

  // Dynamic visual overlays based on exact Excel descriptions!
  if (product.category === 'Polos de Cuello') {
    badgeHtml = \`<div style="font-size:0.75rem; color:var(--text-light); font-style:italic; margin-bottom:0.3rem; font-family:'Inter', sans-serif;">Bordado minimalista 'S'</div>\`;
    // Tiny golden 'S' on the left chest
    graphicOverlayHtml = \`<div style="position:absolute; top:35%; left:62%; font-family:'Playfair Display', serif; font-size:0.8rem; font-weight:bold; color:#D4AF37; text-shadow:1px 1px 2px rgba(0,0,0,0.3);">S</div>\`;
  } else if (product.category === 'Polos Clásicos') {
    if (product.description.includes('Sky')) {
      badgeHtml = \`<div style="font-size:0.7rem; font-weight:600; color:var(--primary-color); margin-bottom:0.4rem; background:#f0f0f0; display:inline-block; padding:0.2rem 0.5rem; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">Diseño: Sky (Centro)</div>\`;
      graphicOverlayHtml = \`<div style="position:absolute; top:45%; left:50%; transform:translate(-50%, -50%); font-family:'Inter', sans-serif; font-size:1.2rem; font-weight:800; color:rgba(255,255,255,0.7); mix-blend-mode:overlay; letter-spacing:3px;">SKY</div>\`;
    } else if (product.description.includes('Kyle')) {
      badgeHtml = \`<div style="font-size:0.7rem; font-weight:600; color:var(--primary-color); margin-bottom:0.4rem; background:#f0f0f0; display:inline-block; padding:0.2rem 0.5rem; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">Diseño: Kyle (Espalda)</div>\`;
    }
  } else if (product.category === 'Polos Estampados') {
     graphicOverlayHtml = \`<svg style="position:absolute; top:45%; left:50%; transform:translate(-50%, -50%); width:60px; height:60px; opacity:0.6; mix-blend-mode:overlay;" viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-width="4"><circle cx="50" cy="50" r="40"/><path d="M 30 50 L 70 50 M 50 30 L 50 70"/></svg>\`;
  } else if (product.category === 'Polos Personalizados') {
     graphicOverlayHtml = \`<div style="position:absolute; top:80%; right:15%; border:2px dashed rgba(255,255,255,0.5); padding:0.2rem 0.5rem; font-size:0.6rem; color:white; font-weight:bold;">CUSTOM</div>\`;
  }

  card.innerHTML = \`
    <div class="product-image-container" style="position:relative;">
      <img src="\${product.image}" alt="\${product.name}" class="product-image" loading="lazy">
      \${graphicOverlayHtml}
      <div class="card-overlay">
        <button class="add-to-cart-btn" data-id="\${product.id}">Añadir al Carrito</button>
      </div>
    </div>
    <div class="product-info">
      <div class="product-brand">\${product.brand}</div>
      <div style="color:var(--accent-color); font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; margin-bottom:0.5rem; font-family:'Inter', sans-serif;">100% Algodón Pima</div>
      \${badgeHtml}
      <h3 class="product-name">\${product.name}</h3>
      <div class="product-price">
        \${pricePrefix}S/. \${product.price.toFixed(2)} 
        <span class="usd-price">| $ \${(product.price / 3.80).toFixed(2)}</span>
      </div>
      <div class="product-colors" style="display:flex; justify-content:center; gap:0.5rem; margin-top:0.5rem;">
        \${colorsHtml}
      </div>
    </div>
  \`;
  
  card.querySelector('.add-to-cart-btn').addEventListener('click', () => addToCart(product.id));
  return card;
}

function renderFeaturedProducts() {
  featuredCarousel.innerHTML = '';
  products.filter(p => p.featured).forEach((product, index) => {
    featuredCarousel.appendChild(createProductCardHTML(product, index));
  });
}

function renderProductsGrid() {
  grid.innerHTML = '';
  if (currentFilteredProducts.length === 0) {
    grid.innerHTML = \`<div style="grid-column: 1/-1; text-align:center; padding: 4rem; background:#fff; border-radius:12px;">
        <h3 style="font-family:'Playfair Display', serif; color:var(--primary-color); font-size:1.5rem; margin-bottom:1rem;">No se encontraron polos</h3>
        <p style="color:var(--text-light);">Intenta ajustar tus filtros para ver más resultados.</p>
      </div>\`;
    return;
  }

  currentFilteredProducts.slice(0, visibleCount).forEach((p, i) => {
    grid.appendChild(createProductCardHTML(p, i));
  });

  if (visibleCount < currentFilteredProducts.length) {
    const obs = document.createElement('div');
    obs.style.height = '20px';
    obs.style.gridColumn = '1 / -1';
    grid.appendChild(obs);
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        visibleCount += 12;
        renderProductsGrid();
      }
    });
    observer.observe(obs);
  }
}

function updateActiveFilterTags() {
  activeFiltersContainer.innerHTML = '';
  const allFilters = [...activeFilters.categories, ...activeFilters.sizes, ...activeFilters.colors.map(c => c.charAt(0).toUpperCase() + c.slice(1))];
  allFilters.forEach(filter => {
    const tag = document.createElement('div');
    tag.style = 'background:var(--white); border:1px solid var(--border-color); padding:0.4rem 1rem; border-radius:20px; font-size:0.8rem; font-weight:600; display:flex; align-items:center; gap:0.5rem; color:var(--primary-color);';
    tag.innerHTML = \`\${filter} <span style="cursor:pointer; color:var(--text-light);" title="Quitar filtro">×</span>\`;
    activeFiltersContainer.appendChild(tag);
  });
  if (allFilters.length > 0) {
    const clearAll = document.createElement('button');
    clearAll.textContent = 'Limpiar todos';
    clearAll.style = 'background:none; border:none; color:var(--accent-color); text-decoration:underline; cursor:pointer; font-weight:600; font-size:0.85rem; margin-left:10px;';
    clearAll.addEventListener('click', clearFilters);
    activeFiltersContainer.appendChild(clearAll);
  }
}

function clearFilters() {
  activeFilters = { categories: [], sizes: [], colors: [] };
  document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = false);
  document.querySelectorAll('.size-btn, .color-btn').forEach(btn => btn.classList.remove('selected'));
  applyFilters();
}

function toggleCart() { cartSidebar.classList.toggle('open'); cartOverlay.classList.toggle('active'); }
function toggleFilterMenu() { sidebar.classList.toggle('open'); filterOverlay.classList.toggle('active'); }

function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (p) { cart.push({ ...p, cartId: Date.now() }); updateCartUI(); if (!cartSidebar.classList.contains('open')) toggleCart(); }
}
function removeFromCart(id) { cart = cart.filter(x => x.cartId !== id); updateCartUI(); }

function updateCartUI() {
  cartBadge.textContent = cart.length;
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="text-align:center; color:var(--text-light); margin-top:2rem;">Tu carrito está vacío</p>';
    cartTotalPrice.innerHTML = '<span>Total:</span> <span style="text-align:right;">S/. 0.00 <br><span style="font-size:0.85rem; color:var(--text-light); font-weight:400;">$ 0.00</span></span>';
    return;
  }
  let html = '', total = 0;
  cart.forEach(item => {
    total += item.price;
    html += \`<div class="cart-item">
      <img src="\${item.image}" class="cart-item-img" style="mix-blend-mode:multiply;">
      <div style="flex-grow:1; display:flex; flex-direction:column; justify-content:space-between;">
        <div><div class="cart-item-title">\${item.name}</div><div style="font-size:0.8rem; color:var(--text-light); font-family:'Inter', sans-serif;">Talla: \${item.sizes[0]} | Color: \${item.colorName}</div></div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.5rem;">
          <div style="font-weight:700; color:var(--accent-color);">S/. \${item.price.toFixed(2)}</div>
          <span style="color:#ff3333; font-size:0.8rem; cursor:pointer; text-decoration:underline;" onclick="window.removeCartItem(\${item.cartId})">Quitar</span>
        </div>
      </div>
    </div>\`;
  });
  cartItemsContainer.innerHTML = html;
  cartTotalPrice.innerHTML = \`<span>Total:</span> <span style="text-align:right;">S/. \${total.toFixed(2)}<br><span style="font-size:0.85rem; color:var(--text-light); font-weight:400;">$ \${(total / 3.8).toFixed(2)}</span></span>\`;
}
window.removeCartItem = removeFromCart;
`;

fs.writeFileSync('main.js', mainJsTemplate);
console.log('main.js built successfully');
