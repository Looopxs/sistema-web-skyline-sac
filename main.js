// Product Data (18 models meticulously mapped to their visual representation)
const products = [
  {
    id: 1, name: 'Polo Básico Slim Fit Blanco', brand: 'Skyline Essentials', price: 29.90,
    image: '/images/polo_blanco.png', categories: ['basico'], models: ['hombre', 'sin-cuello'], sizes: ['S', 'M', 'L', 'XL'],
    colorName: 'blanco', colorHex: '#ffffff'
  },
  {
    id: 2, name: 'Polo Estampado Geométrico Negro', brand: 'Skyline Design', price: 45.90,
    image: '/images/polo_estampado_negro.png', categories: ['estampado'], models: ['hombre', 'sin-cuello'], sizes: ['M', 'L', 'XL', 'XXL'],
    colorName: 'negro', colorHex: '#000000'
  },
  {
    id: 3, name: 'Polo Piqué Elegante Azul', brand: 'Skyline Premium', price: 69.90,
    image: '/images/polo_cuello_azul.png', categories: ['basico', 'personalizado'], models: ['hombre', 'cuello'], sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colorName: 'azul', colorHex: '#001F3F'
  },
  {
    id: 4, name: 'Polo Corte Princesa Celeste', brand: 'Skyline Woman', price: 35.90,
    image: '/images/polo_corte_princesa.png', categories: ['basico'], models: ['princesa', 'sin-cuello'], sizes: ['XS', 'S', 'M', 'L'],
    colorName: 'celeste', colorHex: '#87CEEB'
  },
  {
    id: 5, name: 'Polo Básico Rojo Pasión', brand: 'Skyline Essentials', price: 32.90,
    image: '/images/polo_rojo.png', categories: ['basico'], models: ['hombre', 'sin-cuello'], sizes: ['S', 'M', 'L', 'XL'],
    colorName: 'rojo', colorHex: '#8B0000'
  },
  {
    id: 6, name: 'Polo Forest Verde Clásico', brand: 'Skyline Nature', price: 39.90,
    image: '/images/polo_verde.png', categories: ['basico'], models: ['hombre', 'sin-cuello'], sizes: ['M', 'L', 'XL'],
    colorName: 'verde', colorHex: '#228B22'
  },
  {
    id: 7, name: 'Polo Verano Amarillo', brand: 'Skyline Active', price: 34.90,
    image: '/images/polo_amarillo.png', categories: ['basico'], models: ['hombre', 'sin-cuello'], sizes: ['S', 'M', 'L'],
    colorName: 'amarillo', colorHex: '#FFD700'
  },
  {
    id: 8, name: 'Polo Urbano Gris', brand: 'Skyline Street', price: 42.90,
    image: '/images/polo_gris.png', categories: ['basico'], models: ['hombre', 'sin-cuello'], sizes: ['M', 'L', 'XL', 'XXL'],
    colorName: 'gris', colorHex: '#808080'
  },
  {
    id: 9, name: 'Polo Sunset Naranja', brand: 'Skyline Active', price: 36.90,
    image: '/images/polo_naranja.png', categories: ['basico'], models: ['hombre', 'sin-cuello'], sizes: ['S', 'M', 'L'],
    colorName: 'naranja', colorHex: '#FF8C00'
  },
  {
    id: 10, name: 'Polo Royal Morado', brand: 'Skyline Premium', price: 55.90,
    image: '/images/polo_morado.png', categories: ['basico'], models: ['hombre', 'sin-cuello'], sizes: ['S', 'M', 'L', 'XL'],
    colorName: 'morado', colorHex: '#4B0082'
  },
  {
    id: 11, name: 'Polo Personalizado Negro', brand: 'Skyline Custom', price: 49.90,
    image: '/images/polo_estampado_negro.png', categories: ['personalizado'], models: ['hombre', 'sin-cuello'], sizes: ['M', 'L', 'XL'],
    colorName: 'negro', colorHex: '#000000'
  },
  {
    id: 12, name: 'Polo Cuello Piqué Blanco', brand: 'Skyline Premium', price: 65.90,
    image: '/images/polo_cuello_blanco.png', categories: ['basico'], models: ['hombre', 'cuello'], sizes: ['S', 'M', 'L', 'XL'],
    colorName: 'blanco', colorHex: '#ffffff'
  },
  {
    id: 13, name: 'Polo Estampado Princesa', brand: 'Skyline Woman', price: 45.90,
    image: '/images/polo_corte_princesa.png', categories: ['estampado'], models: ['princesa', 'sin-cuello'], sizes: ['XS', 'S', 'M'],
    colorName: 'celeste', colorHex: '#87CEEB'
  },
  {
    id: 14, name: 'Polo Casual Gris Melange', brand: 'Skyline Essentials', price: 33.90,
    image: '/images/polo_gris.png', categories: ['basico'], models: ['hombre', 'sin-cuello'], sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colorName: 'gris', colorHex: '#808080'
  },
  {
    id: 15, name: 'Polo Cuello Ejecutivo Rojo', brand: 'Skyline Premium', price: 69.90,
    image: '/images/polo_cuello_rojo.png', categories: ['basico'], models: ['hombre', 'cuello'], sizes: ['M', 'L', 'XL'],
    colorName: 'rojo', colorHex: '#8B0000'
  },
  {
    id: 16, name: 'Polo Estampado Urbano Verde', brand: 'Skyline Design', price: 48.90,
    image: '/images/polo_estampado_verde.png', categories: ['estampado'], models: ['hombre', 'sin-cuello'], sizes: ['S', 'M', 'L'],
    colorName: 'verde', colorHex: '#228B22'
  },
  {
    id: 17, name: 'Polo Personalizado Amarillo', brand: 'Skyline Custom', price: 52.90,
    image: '/images/polo_amarillo.png', categories: ['personalizado'], models: ['hombre', 'sin-cuello'], sizes: ['M', 'L', 'XL'],
    colorName: 'amarillo', colorHex: '#FFD700'
  },
  {
    id: 18, name: 'Polo Bordado Premium', brand: 'Skyline Premium', price: 62.90,
    image: '/images/polo_cuello_azul.png', categories: ['bordado'], models: ['hombre', 'cuello'], sizes: ['S', 'M', 'L', 'XL'],
    colorName: 'azul', colorHex: '#001F3F'
  }
];

// State
let activeFilters = {
  categories: [],
  models: [],
  sizes: [],
  colors: []
};
let cart = [];

// DOM Elements
const grid = document.getElementById('product-grid');
const count = document.getElementById('product-count');
const activeFiltersContainer = document.getElementById('active-filters');

// Cart Elements
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartBadge = document.getElementById('cart-badge');
const cartTotalPrice = document.getElementById('cart-total-price');

// Filter Elements (Mobile)
const mobileFilterBtn = document.getElementById('mobile-filter-btn');
const sidebar = document.getElementById('sidebar');
const filterOverlay = document.getElementById('filter-overlay');
const closeFilterBtn = document.getElementById('close-filter');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  setupEventListeners();
  updateCartUI();
});

// Setup Listeners
function setupEventListeners() {
  // Checkboxes (Categories and Models)
  document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const type = e.target.dataset.type === 'category' ? 'categories' : 'models';
      const value = e.target.value;
      
      if (e.target.checked) {
        if (!activeFilters[type].includes(value)) activeFilters[type].push(value);
      } else {
        activeFilters[type] = activeFilters[type].filter(v => v !== value);
      }
      
      applyFilters();
    });
  });

  // Size Buttons
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const value = e.target.dataset.size;
      e.target.classList.toggle('selected');
      
      if (e.target.classList.contains('selected')) {
        if (!activeFilters.sizes.includes(value)) activeFilters.sizes.push(value);
      } else {
        activeFilters.sizes = activeFilters.sizes.filter(v => v !== value);
      }
      
      applyFilters();
    });
  });

  // Color Buttons
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const value = e.target.dataset.color;
      e.target.classList.toggle('selected');
      
      if (e.target.classList.contains('selected')) {
        if (!activeFilters.colors.includes(value)) activeFilters.colors.push(value);
      } else {
        activeFilters.colors = activeFilters.colors.filter(v => v !== value);
      }
      
      applyFilters();
    });
  });

  // Cart Listeners
  cartIcon.addEventListener('click', toggleCart);
  closeCartBtn.addEventListener('click', toggleCart);
  cartOverlay.addEventListener('click', toggleCart);
  
  // Mobile Filter Listeners
  mobileFilterBtn.addEventListener('click', toggleFilterMenu);
  closeFilterBtn.addEventListener('click', toggleFilterMenu);
  filterOverlay.addEventListener('click', toggleFilterMenu);
}

// Filter Logic
function applyFilters() {
  const filtered = products.filter(product => {
    // Check categories
    const categoryMatch = activeFilters.categories.length === 0 || 
      activeFilters.categories.some(c => product.categories.includes(c));
      
    // Check models
    const modelMatch = activeFilters.models.length === 0 || 
      activeFilters.models.some(m => product.models.includes(m));
      
    // Check sizes
    const sizeMatch = activeFilters.sizes.length === 0 || 
      activeFilters.sizes.some(s => product.sizes.includes(s));
      
    // Check colors perfectly mapping to colorName
    const colorMatch = activeFilters.colors.length === 0 || 
      activeFilters.colors.includes(product.colorName);

    return categoryMatch && modelMatch && sizeMatch && colorMatch;
  });

  renderProducts(filtered);
  updateActiveFilterTags();
}

// Render Products
function renderProducts(productsToRender) {
  grid.innerHTML = '';
  
  if (productsToRender.length === 0) {
    grid.innerHTML = `
      <div class="no-results fade-in">
        <h3>No se encontraron polos</h3>
        <p>Intenta ajustar tus filtros para ver más resultados.</p>
      </div>
    `;
    count.textContent = '0 artículos';
    return;
  }

  count.textContent = `${productsToRender.length} artículo${productsToRender.length !== 1 ? 's' : ''}`;

  productsToRender.forEach((product, index) => {
    const card = document.createElement('article');
    card.className = 'product-card fade-in';
    card.style.animationDelay = `${(index % 10) * 0.05}s`;
    
    // Show color dot
    const colorsHtml = `
      <div class="product-color-dot" style="background-color: ${product.colorHex}" title="${product.colorName}"></div>
    `;

    card.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-brand">${product.brand}</span>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">S/ ${product.price.toFixed(2)}</div>
        <div class="product-bottom-row">
          <div class="product-colors">
            ${colorsHtml}
          </div>
          <button class="add-to-cart-btn" data-id="${product.id}">Añadir al carrito</button>
        </div>
      </div>
    `;
    
    // Attach click listener for "Añadir al carrito"
    const addBtn = card.querySelector('.add-to-cart-btn');
    addBtn.addEventListener('click', () => addToCart(product.id));

    grid.appendChild(card);
  });
}

// Render Tags
function updateActiveFilterTags() {
  activeFiltersContainer.innerHTML = '';
  
  const filterNames = {
    'basico': 'Básicos', 'estampado': 'Estampados', 'personalizado': 'Personalizados', 'bordado': 'Bordados',
    'cuello': 'Con Cuello', 'sin-cuello': 'Sin Cuello', 'princesa': 'Corte Princesa', 'hombre': 'Hombre Clásico'
  };

  const allFilters = [
    ...activeFilters.categories.map(c => filterNames[c] || c),
    ...activeFilters.models.map(m => filterNames[m] || m),
    ...activeFilters.sizes,
    ...activeFilters.colors.map(c => c.charAt(0).toUpperCase() + c.slice(1))
  ];

  allFilters.forEach(filter => {
    const tag = document.createElement('div');
    tag.className = 'filter-tag';
    tag.innerHTML = `${filter} <span title="Quitar filtro">×</span>`;
    activeFiltersContainer.appendChild(tag);
  });

  if (allFilters.length > 0) {
    const clearAll = document.createElement('button');
    clearAll.textContent = 'Limpiar todos';
    clearAll.style.background = 'none';
    clearAll.style.border = 'none';
    clearAll.style.color = 'var(--accent-color)';
    clearAll.style.cursor = 'pointer';
    clearAll.style.textDecoration = 'underline';
    clearAll.style.marginLeft = '10px';
    clearAll.style.fontWeight = '600';
    clearAll.addEventListener('click', clearFilters);
    
    activeFiltersContainer.appendChild(clearAll);
  }
}

function clearFilters() {
  activeFilters = { categories: [], models: [], sizes: [], colors: [] };
  document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = false);
  document.querySelectorAll('.size-btn, .color-btn').forEach(btn => btn.classList.remove('selected'));
  applyFilters();
}

// Shopping Cart Logic
function toggleCart() {
  cartSidebar.classList.toggle('open');
  cartOverlay.classList.toggle('active');
}

// Mobile Filter Menu Logic
function toggleFilterMenu() {
  sidebar.classList.toggle('open');
  filterOverlay.classList.toggle('active');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    const cartItem = { ...product, cartId: Date.now() };
    cart.push(cartItem);
    updateCartUI();
    
    if (!cartSidebar.classList.contains('open')) {
      toggleCart();
    }
  }
}

function removeFromCart(cartId) {
  cart = cart.filter(item => item.cartId !== cartId);
  updateCartUI();
}

function updateCartUI() {
  cartBadge.textContent = cart.length;
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="text-align:center; color:var(--text-light); margin-top:2rem;">Tu carrito está vacío</p>';
    cartTotalPrice.textContent = 'S/ 0.00';
    return;
  }

  let html = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    html += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div>
            <div class="cart-item-title">${item.name}</div>
            <div style="font-size: 0.8rem; color: var(--text-light);">Talla: ${item.sizes[0]} | Color: ${item.colorName}</div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
            <div class="cart-item-price">S/ ${item.price.toFixed(2)}</div>
            <span class="cart-item-remove" onclick="window.removeCartItem(${item.cartId})">Quitar</span>
          </div>
        </div>
      </div>
    `;
  });

  cartItemsContainer.innerHTML = html;
  cartTotalPrice.textContent = `S/ ${total.toFixed(2)}`;
}

window.removeCartItem = removeFromCart;
