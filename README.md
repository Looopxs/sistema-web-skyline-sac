# Skyline SAC - E-Commerce Premium 🌟

Bienvenido al repositorio oficial del **Sistema Web E-Commerce Premium de Skyline SAC**, una plataforma de venta de polos de lujo diseñada con una estética extremadamente pulida, minimalista y de alta conversión.

## 🚀 Arquitectura y Tecnologías Utilizadas

Este proyecto se ha construido bajo la filosofía de "Zero Dependencies" para el frontend en producción, lo que garantiza tiempos de carga ultrarrápidos y un control total sobre el diseño.

### Frontend (UI/UX)
* **HTML5 Semántico**: Estructura limpia y accesible.
* **Vanilla JavaScript (ES6+)**: Lógica de filtrado, carrito de compras y renderizado dinámico del DOM. No se utilizaron frameworks pesados como React o Vue para maximizar el rendimiento.
* **Vanilla CSS3**: Sistema de diseño personalizado ("Design System") que implementa:
  * Glassmorphism (efectos de cristal).
  * Animaciones fluidas y micro-interacciones.
  * Efecto "Sticky Deck of Cards" para las imágenes del panel lateral al hacer scroll.
  * Variables CSS para un fácil manejo del tema (Modo premium).
  * **Filtros CSS Avanzados (`hue-rotate`, `saturate`, `brightness`)**: Utilizados estratégicamente para colorear los polos dinámicamente sin necesidad de descargar cientos de imágenes.

### Backend y Build System
* **Vite**: Entorno de desarrollo ultrarrápido y empaquetador para producción.
* **Node.js (CommonJS)**: Script personalizado (`build_main2.cjs`) que actúa como motor de generación estática.
* **CSV Data Source**: El catálogo de 48 productos vive en un archivo plano (`catalog.csv`) que es parseado automáticamente.

### Inteligencia Artificial y Procesamiento de Imágenes
* **Rembg (U-2-Net / Python)**: Todas las fotografías de los polos fueron procesadas con esta IA avanzada para eliminar fondos con precisión milimétrica (conservando bordes suaves y pliegues), asegurando que el filtro CSS solo tiña la tela y no el estudio de fotografía.
* **Generación de Assets IA**: Imágenes macro (close-up) de texturas de Algodón Pima generadas con IA fotográfica para mejorar la experiencia inmersiva del catálogo.

---

## ⚙️ ¿Cómo funciona el motor del catálogo?

El corazón técnico de esta tienda no está en el frontend, sino en nuestro script generador **`build_main2.cjs`**.

Cada vez que el catálogo de polos (`catalog.csv`) cambia, este script debe ejecutarse. Su función es:
1. Leer los productos.
2. Identificar el **modelo** (Clásico, Cuello, Princesa, etc.) y asignar la **imagen base** correspondiente.
3. Identificar el **color** en texto (ej. "Rojo oscuro") y calcular la fórmula matemática exacta de CSS `filter` para teñir la foto base a ese color de manera realista.
4. Asignar los **precios** según reglas de negocio complejas.
5. Mezclar el catálogo (`shuffle`) para que el usuario no vea 4 polos del mismo modelo juntos.
6. **Inyectar** toda esta base de datos en `main.js` como un array de objetos, dejándolo listo para el cliente.

---

## 🛠️ Instrucciones de Desarrollo

### 1. Requisitos Previos
* Node.js instalado (v16 o superior).
* Python 3.10+ (Solo si se requiere volver a procesar fondos de imágenes).

### 2. Instalación
\`\`\`bash
# Instalar dependencias de desarrollo (Vite)
npm install
\`\`\`

### 3. Compilar el Catálogo (IMPORTANTE)
Si haces cambios en precios, reglas o en el archivo `catalog.csv`, SIEMPRE debes correr este script antes de iniciar la web:
\`\`\`bash
node build_main2.cjs
\`\`\`

### 4. Iniciar el Servidor de Desarrollo
\`\`\`bash
npm run dev
\`\`\`
Esto abrirá un servidor local en tu navegador (usualmente en `localhost:5173`) con Hot-Reloading.

---

## 🎨 Estructura de Carpetas

\`\`\`text
📦 SISTEMA WEB_PAUMYLOV
 ┣ 📂 public
 ┃ ┗ 📂 images          # Imágenes fotorealistas y recortes IA (PNG transparentes)
 ┣ 📜 index.html        # Estructura principal y maquetación
 ┣ 📜 style.css         # Hojas de estilo y animaciones
 ┣ 📜 main.js           # Lógica frontend (¡Se regenera automáticamente!)
 ┣ 📜 build_main2.cjs   # MOTOR CENTRAL: Lógica de negocio, precios y mapeo de color
 ┣ 📜 catalog.csv       # Base de datos cruda del catálogo
 ┣ 📜 use_rembg.py      # Script Python de IA para borrar fondos de futuras fotos
 ┣ 📜 package.json      # Dependencias
 ┗ 📜 README.md         # Esta documentación
\`\`\`

---

## 💎 Reglas de Negocio Implementadas
* **Precios:** Clásicos (S/30), Sin Cuello (S/30), Corte Princesa (S/35), Cuello (S/50), Personalizados (S/65).
* **Filtros Laterales:** El usuario puede filtrar combinando múltiples Categorías, Tallas y Colores simultáneamente.
* **Performance:** Carga diferida (`IntersectionObserver`) que renderiza de a 12 productos a medida que el usuario hace scroll, garantizando que la página nunca se congele.

---
*Desarrollado con estándares de código de grado producción. Listo para desplegar en plataformas Edge como Vercel, Netlify o Render.*
