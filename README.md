# Skyline SAC - E-Commerce Premium 🌟

Bienvenido a la presentación oficial de la interfaz del **Sistema Web E-Commerce Premium de Skyline SAC**, una plataforma de venta de polos de lujo diseñada con una estética extremadamente pulida, minimalista y orientada a la alta conversión. 

Este proyecto se enfoca en la exhibición visual y la experiencia de usuario (UX/UI) del catálogo de productos.

## 🚀 Arquitectura y Tecnologías Utilizadas

Este proyecto se ha construido bajo la filosofía de "Zero Dependencies" para la interfaz, lo que garantiza tiempos de carga ultrarrápidos y un control total sobre el diseño interactivo.

### Frontend (UI/UX)
* **HTML5 Semántico**: Estructura limpia y accesible.
* **Vanilla JavaScript (ES6+)**: Lógica de filtrado dinámico en tiempo real, carrito de compras (en memoria) y renderizado del DOM de forma eficiente sin frameworks adicionales.
* **Vanilla CSS3**: Sistema de diseño personalizado ("Design System") que implementa:
  * **Glassmorphism**: Efectos de cristal esmerilado para los menús y paneles superpuestos.
  * **Micro-interacciones**: Animaciones fluidas al interactuar con productos, botones y filtros.
  * **Sticky Deck of Cards**: Un efecto avanzado de superposición visual para la galería de imágenes destacadas del panel lateral. A medida que se hace scroll, las texturas se apilan elegantemente.
  * **Variables CSS**: Para un manejo de colores primarios y secundarios de estilo "Premium".
  * **Filtros CSS Avanzados**: Uso de `hue-rotate`, `saturate` y `brightness` para renderizar 48 variantes de productos a partir de fotos base, manteniendo el máximo rendimiento de carga.

### Inteligencia Artificial en Assets
* **Procesamiento U-2-Net**: Las fotografías de los polos fueron tratadas con IA para lograr recortes de fondo con precisión milimétrica (conservando bordes suaves y pliegues del algodón), asegurando que el diseño minimalista de la tienda no se vea interrumpido por sombras o fondos de estudio.
* **Texturas Fotográficas**: Se han incorporado texturas de Algodón Pima generadas con IA para enriquecer la galería lateral de detalles.

---

## 💎 Características Principales y Lógica
* **Catálogo Dinámico:** Se presentan 48 variaciones de prendas (Clásicos, Cuello, Princesa, Personalizados).
* **Filtros Avanzados:** El panel lateral permite al usuario afinar su búsqueda por Categoría, Modelo, Talla y Color en tiempo real, adaptando la vista sin recargar la página.
* **Rendimiento Visual (Lazy Rendering):** Emplea un `IntersectionObserver` para cargar los productos de forma escalonada (Infinite Scroll) y mantener la fluidez visual a 60 FPS, independientemente de la cantidad de polos que se muestran en pantalla.

---

## 🎨 Estructura de Elementos

* **`index.html`** - Estructura semántica, diseño del layout principal y panel de filtros.
* **`style.css`** - Todo el sistema visual, paleta de colores de lujo, animaciones y comportamiento responsivo.
* **`main.js`** - La inteligencia en el navegador: manejo de eventos de filtros, carrito de compra flotante y actualización dinámica del grid de productos.
* **`public/images/`** - Carpeta que contiene las fotografías procesadas y listas para la exhibición.

---
*Demostración de Interfaz y Experiencia de Usuario - Skyline SAC 2026.*
