
const products = [
  {
    "id": "SKU-001",
    "name": "Polo Cuello Premium Rojo",
    "brand": "Skyline SAC de",
    "price": 85,
    "image": "/images/polo_cuello_rojo.png",
    "category": "Polos de Cuello",
    "description": "Diseño minimalista y elegante. Sin estampados grandes. Incluye únicamente la letra 'S' bordada sutilmente en el pecho izquierdo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "rojo",
    "colorHex": "#8B0000",
    "featured": true
  },
  {
    "id": "SKU-002",
    "name": "Polo Cuello Premium Azul",
    "brand": "Skyline SAC de",
    "price": 85,
    "image": "/images/polo_cuello_azul.png",
    "category": "Polos de Cuello",
    "description": "Diseño minimalista y elegante. Sin estampados grandes. Incluye únicamente la letra 'S' bordada sutilmente en el pecho izquierdo.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "azul",
    "colorHex": "#001F3F",
    "featured": false
  },
  {
    "id": "SKU-003",
    "name": "Polo Cuello Premium Verde",
    "brand": "Skyline SAC de",
    "price": 85,
    "image": "/images/polo_cuello_blanco.png",
    "category": "Polos de Cuello",
    "description": "Diseño minimalista y elegante. Sin estampados grandes. Incluye únicamente la letra 'S' bordada sutilmente en el pecho izquierdo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "verde",
    "colorHex": "#228B22",
    "featured": false
  },
  {
    "id": "SKU-004",
    "name": "Polo Cuello Premium Amarillo",
    "brand": "Skyline SAC de",
    "price": 85,
    "image": "/images/polo_cuello_blanco.png",
    "category": "Polos de Cuello",
    "description": "Diseño minimalista y elegante. Sin estampados grandes. Incluye únicamente la letra 'S' bordada sutilmente en el pecho izquierdo.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "amarillo",
    "colorHex": "#FFD700",
    "featured": false
  },
  {
    "id": "SKU-005",
    "name": "Polo Cuello Premium Morado",
    "brand": "Skyline SAC de",
    "price": 85,
    "image": "/images/polo_cuello_blanco.png",
    "category": "Polos de Cuello",
    "description": "Diseño minimalista y elegante. Sin estampados grandes. Incluye únicamente la letra 'S' bordada sutilmente en el pecho izquierdo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "morado",
    "colorHex": "#4B0082",
    "featured": false
  },
  {
    "id": "SKU-006",
    "name": "Polo Cuello Premium Naranja",
    "brand": "Skyline SAC de",
    "price": 85,
    "image": "/images/polo_cuello_blanco.png",
    "category": "Polos de Cuello",
    "description": "Diseño minimalista y elegante. Sin estampados grandes. Incluye únicamente la letra 'S' bordada sutilmente en el pecho izquierdo.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "naranja",
    "colorHex": "#FF8C00",
    "featured": false
  },
  {
    "id": "SKU-007",
    "name": "Polo Cuello Premium Dorado",
    "brand": "Skyline SAC de",
    "price": 85,
    "image": "/images/polo_cuello_blanco.png",
    "category": "Polos de Cuello",
    "description": "Diseño minimalista y elegante. Sin estampados grandes. Incluye únicamente la letra 'S' bordada sutilmente en el pecho izquierdo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "dorado",
    "colorHex": "#D4AF37",
    "featured": false
  },
  {
    "id": "SKU-008",
    "name": "Polo Cuello Premium Plomo",
    "brand": "Skyline SAC de",
    "price": 85,
    "image": "/images/polo_cuello_blanco.png",
    "category": "Polos de Cuello",
    "description": "Diseño minimalista y elegante. Sin estampados grandes. Incluye únicamente la letra 'S' bordada sutilmente en el pecho izquierdo.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "plomo",
    "colorHex": "#808080",
    "featured": false
  },
  {
    "id": "SKU-009",
    "name": "Polo Cuello Premium Azul Oscuro",
    "brand": "Skyline SAC de",
    "price": 85,
    "image": "/images/polo_cuello_azul.png",
    "category": "Polos de Cuello",
    "description": "Diseño minimalista y elegante. Sin estampados grandes. Incluye únicamente la letra 'S' bordada sutilmente en el pecho izquierdo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "azul oscuro",
    "colorHex": "#000033",
    "featured": false
  },
  {
    "id": "SKU-010",
    "name": "Polo Cuello Premium Rojo Oscuro",
    "brand": "Skyline SAC de",
    "price": 85,
    "image": "/images/polo_cuello_rojo.png",
    "category": "Polos de Cuello",
    "description": "Diseño minimalista y elegante. Sin estampados grandes. Incluye únicamente la letra 'S' bordada sutilmente en el pecho izquierdo.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "rojo oscuro",
    "colorHex": "#4d0000",
    "featured": false
  },
  {
    "id": "SKU-011",
    "name": "Polo Cuello Premium Negro",
    "brand": "Skyline SAC de",
    "price": 85,
    "image": "/images/polo_cuello_azul.png",
    "category": "Polos de Cuello",
    "description": "Diseño minimalista y elegante. Sin estampados grandes. Incluye únicamente la letra 'S' bordada sutilmente en el pecho izquierdo.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "negro",
    "colorHex": "#000000",
    "featured": false
  },
  {
    "id": "SKU-012",
    "name": "Polo Cuello Premium Blanco",
    "brand": "Skyline SAC de",
    "price": 85,
    "image": "/images/polo_cuello_blanco.png",
    "category": "Polos de Cuello",
    "description": "Diseño minimalista y elegante. Sin estampados grandes. Incluye únicamente la letra 'S' bordada sutilmente en el pecho izquierdo.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "blanco",
    "colorHex": "#ffffff",
    "featured": false
  },
  {
    "id": "SKU-013",
    "name": "Polo Clásico Básico Rojo",
    "brand": "Skyline SAC Clásicos",
    "price": 30,
    "image": "/images/polo_rojo.png",
    "category": "Polos Clásicos",
    "description": "Corte clásico sin cuello, cómodo para uso diario. Texto Sky centrado en el pecho.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "rojo",
    "colorHex": "#8B0000",
    "featured": false
  },
  {
    "id": "SKU-014",
    "name": "Polo Clásico Básico Azul",
    "brand": "Skyline SAC Clásicos",
    "price": 30,
    "image": "/images/polo_gris.png",
    "category": "Polos Clásicos",
    "description": "Corte clásico sin cuello, cómodo para uso diario. Texto Kyle en la parte superior de la espalda.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "azul",
    "colorHex": "#001F3F",
    "featured": true
  },
  {
    "id": "SKU-015",
    "name": "Polo Clásico Básico Verde",
    "brand": "Skyline SAC Clásicos",
    "price": 30,
    "image": "/images/polo_verde.png",
    "category": "Polos Clásicos",
    "description": "Corte clásico sin cuello, cómodo para uso diario. Texto Sky centrado en el pecho.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "verde",
    "colorHex": "#228B22",
    "featured": false
  },
  {
    "id": "SKU-016",
    "name": "Polo Clásico Básico Amarillo",
    "brand": "Skyline SAC Clásicos",
    "price": 30,
    "image": "/images/polo_amarillo.png",
    "category": "Polos Clásicos",
    "description": "Corte clásico sin cuello, cómodo para uso diario. Texto Kyle en la parte superior de la espalda.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "amarillo",
    "colorHex": "#FFD700",
    "featured": false
  },
  {
    "id": "SKU-017",
    "name": "Polo Clásico Básico Morado",
    "brand": "Skyline SAC Clásicos",
    "price": 30,
    "image": "/images/polo_morado.png",
    "category": "Polos Clásicos",
    "description": "Corte clásico sin cuello, cómodo para uso diario. Texto Sky centrado en el pecho.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "morado",
    "colorHex": "#4B0082",
    "featured": false
  },
  {
    "id": "SKU-018",
    "name": "Polo Clásico Básico Naranja",
    "brand": "Skyline SAC Clásicos",
    "price": 30,
    "image": "/images/polo_naranja.png",
    "category": "Polos Clásicos",
    "description": "Corte clásico sin cuello, cómodo para uso diario. Texto Kyle en la parte superior de la espalda.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "naranja",
    "colorHex": "#FF8C00",
    "featured": false
  },
  {
    "id": "SKU-019",
    "name": "Polo Clásico Básico Dorado",
    "brand": "Skyline SAC Clásicos",
    "price": 30,
    "image": "/images/polo_amarillo.png",
    "category": "Polos Clásicos",
    "description": "Corte clásico sin cuello, cómodo para uso diario. Texto Sky centrado en el pecho.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "dorado",
    "colorHex": "#D4AF37",
    "featured": false
  },
  {
    "id": "SKU-020",
    "name": "Polo Clásico Básico Plomo",
    "brand": "Skyline SAC Clásicos",
    "price": 30,
    "image": "/images/polo_gris.png",
    "category": "Polos Clásicos",
    "description": "Corte clásico sin cuello, cómodo para uso diario. Texto Kyle en la parte superior de la espalda.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "plomo",
    "colorHex": "#808080",
    "featured": false
  },
  {
    "id": "SKU-021",
    "name": "Polo Clásico Básico Azul Oscuro",
    "brand": "Skyline SAC Clásicos",
    "price": 30,
    "image": "/images/polo_gris.png",
    "category": "Polos Clásicos",
    "description": "Corte clásico sin cuello, cómodo para uso diario. Texto Sky centrado en el pecho.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "azul oscuro",
    "colorHex": "#000033",
    "featured": false
  },
  {
    "id": "SKU-022",
    "name": "Polo Clásico Básico Rojo Oscuro",
    "brand": "Skyline SAC Clásicos",
    "price": 30,
    "image": "/images/polo_rojo.png",
    "category": "Polos Clásicos",
    "description": "Corte clásico sin cuello, cómodo para uso diario. Texto Kyle en la parte superior de la espalda.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "rojo oscuro",
    "colorHex": "#4d0000",
    "featured": false
  },
  {
    "id": "SKU-023",
    "name": "Polo Clásico Básico Negro",
    "brand": "Skyline SAC Clásicos",
    "price": 30,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Clásicos",
    "description": "Corte clásico sin cuello, cómodo para uso diario. Texto Sky centrado en el pecho.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "negro",
    "colorHex": "#000000",
    "featured": false
  },
  {
    "id": "SKU-024",
    "name": "Polo Clásico Básico Blanco",
    "brand": "Skyline SAC Clásicos",
    "price": 30,
    "image": "/images/polo_blanco.png",
    "category": "Polos Clásicos",
    "description": "Corte clásico sin cuello, cómodo para uso diario. Texto Kyle en la parte superior de la espalda.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "blanco",
    "colorHex": "#ffffff",
    "featured": false
  },
  {
    "id": "SKU-025",
    "name": "Polo Estampado Arte Urbano",
    "brand": "Skyline SAC Estampados",
    "price": 45,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Estampados",
    "description": "Estampado de alta resolución y durabilidad con temática de Arte Urbano en la parte frontal.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "rojo",
    "colorHex": "#8B0000",
    "featured": true
  },
  {
    "id": "SKU-026",
    "name": "Polo Estampado Líneas Geométricas",
    "brand": "Skyline SAC Estampados",
    "price": 45,
    "image": "/images/polo_estampado_verde.png",
    "category": "Polos Estampados",
    "description": "Estampado de alta resolución y durabilidad con temática de Líneas Geométricas en la parte frontal.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "azul",
    "colorHex": "#001F3F",
    "featured": false
  },
  {
    "id": "SKU-027",
    "name": "Polo Estampado Minimalismo",
    "brand": "Skyline SAC Estampados",
    "price": 45,
    "image": "/images/polo_estampado_verde.png",
    "category": "Polos Estampados",
    "description": "Estampado de alta resolución y durabilidad con temática de Minimalismo en la parte frontal.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "verde",
    "colorHex": "#228B22",
    "featured": false
  },
  {
    "id": "SKU-028",
    "name": "Polo Estampado Tipografía Moderna",
    "brand": "Skyline SAC Estampados",
    "price": 45,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Estampados",
    "description": "Estampado de alta resolución y durabilidad con temática de Tipografía Moderna en la parte frontal.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "amarillo",
    "colorHex": "#FFD700",
    "featured": false
  },
  {
    "id": "SKU-029",
    "name": "Polo Estampado Ilustración Abstracta",
    "brand": "Skyline SAC Estampados",
    "price": 45,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Estampados",
    "description": "Estampado de alta resolución y durabilidad con temática de Ilustración Abstracta en la parte frontal.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "morado",
    "colorHex": "#4B0082",
    "featured": false
  },
  {
    "id": "SKU-030",
    "name": "Polo Estampado Patrón Vintage",
    "brand": "Skyline SAC Estampados",
    "price": 45,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Estampados",
    "description": "Estampado de alta resolución y durabilidad con temática de Patrón Vintage en la parte frontal.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "naranja",
    "colorHex": "#FF8C00",
    "featured": false
  },
  {
    "id": "SKU-031",
    "name": "Polo Estampado Arte Urbano",
    "brand": "Skyline SAC Estampados",
    "price": 45,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Estampados",
    "description": "Estampado de alta resolución y durabilidad con temática de Arte Urbano en la parte frontal.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "dorado",
    "colorHex": "#D4AF37",
    "featured": false
  },
  {
    "id": "SKU-032",
    "name": "Polo Estampado Líneas Geométricas",
    "brand": "Skyline SAC Estampados",
    "price": 45,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Estampados",
    "description": "Estampado de alta resolución y durabilidad con temática de Líneas Geométricas en la parte frontal.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "plomo",
    "colorHex": "#808080",
    "featured": false
  },
  {
    "id": "SKU-033",
    "name": "Polo Estampado Minimalismo",
    "brand": "Skyline SAC Estampados",
    "price": 45,
    "image": "/images/polo_estampado_verde.png",
    "category": "Polos Estampados",
    "description": "Estampado de alta resolución y durabilidad con temática de Minimalismo en la parte frontal.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "azul oscuro",
    "colorHex": "#000033",
    "featured": false
  },
  {
    "id": "SKU-034",
    "name": "Polo Estampado Tipografía Moderna",
    "brand": "Skyline SAC Estampados",
    "price": 45,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Estampados",
    "description": "Estampado de alta resolución y durabilidad con temática de Tipografía Moderna en la parte frontal.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "rojo oscuro",
    "colorHex": "#4d0000",
    "featured": false
  },
  {
    "id": "SKU-035",
    "name": "Polo Estampado Ilustración Abstracta",
    "brand": "Skyline SAC Estampados",
    "price": 45,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Estampados",
    "description": "Estampado de alta resolución y durabilidad con temática de Ilustración Abstracta en la parte frontal.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "negro",
    "colorHex": "#000000",
    "featured": false
  },
  {
    "id": "SKU-036",
    "name": "Polo Estampado Patrón Vintage",
    "brand": "Skyline SAC Estampados",
    "price": 45,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Estampados",
    "description": "Estampado de alta resolución y durabilidad con temática de Patrón Vintage en la parte frontal.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "blanco",
    "colorHex": "#ffffff",
    "featured": false
  },
  {
    "id": "SKU-037",
    "name": "Polo Custom Edition Rojo",
    "brand": "Skyline SAC Personalizados",
    "price": 50,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Personalizados",
    "description": "Diseño a pedido del cliente: Estilo urbano oversized con parche reflectivo. Ideal para pedidos únicos.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "rojo",
    "colorHex": "#8B0000",
    "featured": false
  },
  {
    "id": "SKU-038",
    "name": "Polo Custom Edition Azul",
    "brand": "Skyline SAC Personalizados",
    "price": 50,
    "image": "/images/polo_corte_princesa.png",
    "category": "Polos Personalizados",
    "description": "Diseño a pedido del cliente: Corte deportivo sin mangas tipo jersey. Ideal para pedidos únicos.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "azul",
    "colorHex": "#001F3F",
    "featured": false
  },
  {
    "id": "SKU-039",
    "name": "Polo Custom Edition Verde",
    "brand": "Skyline SAC Personalizados",
    "price": 50,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Personalizados",
    "description": "Diseño a pedido del cliente: Degradado exclusivo con iniciales bordadas. Ideal para pedidos únicos.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "verde",
    "colorHex": "#228B22",
    "featured": false
  },
  {
    "id": "SKU-040",
    "name": "Polo Custom Edition Amarillo",
    "brand": "Skyline SAC Personalizados",
    "price": 50,
    "image": "/images/polo_corte_princesa.png",
    "category": "Polos Personalizados",
    "description": "Diseño a pedido del cliente: Combinación bicolor con costuras expuestas. Ideal para pedidos únicos.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "amarillo",
    "colorHex": "#FFD700",
    "featured": false
  },
  {
    "id": "SKU-041",
    "name": "Polo Custom Edition Morado",
    "brand": "Skyline SAC Personalizados",
    "price": 50,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Personalizados",
    "description": "Diseño a pedido del cliente: Diseño asimétrico con logo en la manga. Ideal para pedidos únicos.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "morado",
    "colorHex": "#4B0082",
    "featured": false
  },
  {
    "id": "SKU-042",
    "name": "Polo Custom Edition Naranja",
    "brand": "Skyline SAC Personalizados",
    "price": 50,
    "image": "/images/polo_corte_princesa.png",
    "category": "Polos Personalizados",
    "description": "Diseño a pedido del cliente: Edición especial con tipografía dorada personalizada. Ideal para pedidos únicos.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "naranja",
    "colorHex": "#FF8C00",
    "featured": false
  },
  {
    "id": "SKU-043",
    "name": "Polo Custom Edition Dorado",
    "brand": "Skyline SAC Personalizados",
    "price": 50,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Personalizados",
    "description": "Diseño a pedido del cliente: Estilo urbano oversized con parche reflectivo. Ideal para pedidos únicos.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "dorado",
    "colorHex": "#D4AF37",
    "featured": false
  },
  {
    "id": "SKU-044",
    "name": "Polo Custom Edition Plomo",
    "brand": "Skyline SAC Personalizados",
    "price": 50,
    "image": "/images/polo_corte_princesa.png",
    "category": "Polos Personalizados",
    "description": "Diseño a pedido del cliente: Corte deportivo sin mangas tipo jersey. Ideal para pedidos únicos.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "plomo",
    "colorHex": "#808080",
    "featured": false
  },
  {
    "id": "SKU-045",
    "name": "Polo Custom Edition Azul Oscuro",
    "brand": "Skyline SAC Personalizados",
    "price": 50,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Personalizados",
    "description": "Diseño a pedido del cliente: Degradado exclusivo con iniciales bordadas. Ideal para pedidos únicos.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "azul oscuro",
    "colorHex": "#000033",
    "featured": false
  },
  {
    "id": "SKU-046",
    "name": "Polo Custom Edition Rojo Oscuro",
    "brand": "Skyline SAC Personalizados",
    "price": 50,
    "image": "/images/polo_corte_princesa.png",
    "category": "Polos Personalizados",
    "description": "Diseño a pedido del cliente: Combinación bicolor con costuras expuestas. Ideal para pedidos únicos.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "rojo oscuro",
    "colorHex": "#4d0000",
    "featured": false
  },
  {
    "id": "SKU-047",
    "name": "Polo Custom Edition Negro",
    "brand": "Skyline SAC Personalizados",
    "price": 50,
    "image": "/images/polo_estampado_negro.png",
    "category": "Polos Personalizados",
    "description": "Diseño a pedido del cliente: Diseño asimétrico con logo en la manga. Ideal para pedidos únicos.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colorName": "negro",
    "colorHex": "#000000",
    "featured": false
  },
  {
    "id": "SKU-048",
    "name": "Polo Custom Edition Blanco",
    "brand": "Skyline SAC Personalizados",
    "price": 50,
    "image": "/images/polo_corte_princesa.png",
    "category": "Polos Personalizados",
    "description": "Diseño a pedido del cliente: Edición especial con tipografía dorada personalizada. Ideal para pedidos únicos.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colorName": "blanco",
    "colorHex": "#ffffff",
    "featured": false
  }
];

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
  count.textContent = `${num} artículo${num !== 1 ? 's' : ''}`;
}

function createProductCardHTML(product, index) {
  const card = document.createElement('article');
  card.className = 'product-card fade-in';
  card.style.animationDelay = `${(index % 12) * 0.05}s`;
  
  const colorsHtml = `<div style="width:12px; height:12px; border-radius:50%; background-color:${product.colorHex}; border:1px solid rgba(0,0,0,0.1);" title="${product.colorName}"></div>`;
  const pricePrefix = product.category === 'Polos Personalizados' ? 'Desde ' : '';

  let badgeHtml = '';
  let graphicOverlayHtml = '';

  // Dynamic visual overlays based on exact Excel descriptions!
  if (product.category === 'Polos de Cuello') {
    badgeHtml = `<div style="font-size:0.75rem; color:var(--text-light); font-style:italic; margin-bottom:0.3rem; font-family:'Inter', sans-serif;">Bordado minimalista 'S'</div>`;
    // Tiny golden 'S' on the left chest
    graphicOverlayHtml = `<div style="position:absolute; top:35%; left:62%; font-family:'Playfair Display', serif; font-size:0.8rem; font-weight:bold; color:#D4AF37; text-shadow:1px 1px 2px rgba(0,0,0,0.3);">S</div>`;
  } else if (product.category === 'Polos Clásicos') {
    if (product.description.includes('Sky')) {
      badgeHtml = `<div style="font-size:0.7rem; font-weight:600; color:var(--primary-color); margin-bottom:0.4rem; background:#f0f0f0; display:inline-block; padding:0.2rem 0.5rem; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">Diseño: Sky (Centro)</div>`;
      graphicOverlayHtml = `<div style="position:absolute; top:45%; left:50%; transform:translate(-50%, -50%); font-family:'Inter', sans-serif; font-size:1.2rem; font-weight:800; color:rgba(255,255,255,0.7); mix-blend-mode:overlay; letter-spacing:3px;">SKY</div>`;
    } else if (product.description.includes('Kyle')) {
      badgeHtml = `<div style="font-size:0.7rem; font-weight:600; color:var(--primary-color); margin-bottom:0.4rem; background:#f0f0f0; display:inline-block; padding:0.2rem 0.5rem; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">Diseño: Kyle (Espalda)</div>`;
      graphicOverlayHtml = `<div style="position:absolute; top:20%; left:50%; transform:translate(-50%, -50%); font-family:'Inter', sans-serif; font-size:0.9rem; font-weight:800; color:rgba(255,255,255,0.6); mix-blend-mode:overlay; letter-spacing:2px;">KYLE</div>`;
    }
  } else if (product.category === 'Polos Estampados') {
     graphicOverlayHtml = `<svg style="position:absolute; top:45%; left:50%; transform:translate(-50%, -50%); width:60px; height:60px; opacity:0.6; mix-blend-mode:overlay;" viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-width="4"><circle cx="50" cy="50" r="40"/><path d="M 30 50 L 70 50 M 50 30 L 50 70"/></svg>`;
  } else if (product.category === 'Polos Personalizados') {
     graphicOverlayHtml = `<div style="position:absolute; top:80%; right:15%; border:2px dashed rgba(255,255,255,0.5); padding:0.2rem 0.5rem; font-size:0.6rem; color:white; font-weight:bold;">CUSTOM</div>`;
  }

  // Multiply filter for missing colors to tint white images
  // Let's only apply tint if we use polo_cuello_blanco.png for a non-white color
  let tintHtml = '';
  if (product.image.includes('blanco') && product.colorName !== 'blanco') {
     tintHtml = `<div style="position:absolute; top:0; left:0; width:100%; height:100%; background-color:${product.colorHex}; mix-blend-mode:multiply; opacity:0.85; pointer-events:none;"></div>`;
  }

  card.innerHTML = `
    <div class="product-image-container" style="position:relative;">
      <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
      ${tintHtml}
      ${graphicOverlayHtml}
      <div class="card-overlay">
        <button class="add-to-cart-btn" data-id="${product.id}">Añadir al Carrito</button>
      </div>
    </div>
    <div class="product-info">
      <div class="product-brand">${product.brand}</div>
      <div style="color:var(--accent-color); font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; margin-bottom:0.5rem; font-family:'Inter', sans-serif;">100% Algodón Pima</div>
      ${badgeHtml}
      <h3 class="product-name">${product.name}</h3>
      <div class="product-price">
        ${pricePrefix}S/. ${product.price.toFixed(2)} 
        <span class="usd-price">| $ ${(product.price / 3.80).toFixed(2)}</span>
      </div>
      <div class="product-colors" style="display:flex; justify-content:center; gap:0.5rem; margin-top:0.5rem;">
        ${colorsHtml}
      </div>
    </div>
  `;
  
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
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 4rem; background:#fff; border-radius:12px;">
        <h3 style="font-family:'Playfair Display', serif; color:var(--primary-color); font-size:1.5rem; margin-bottom:1rem;">No se encontraron polos</h3>
        <p style="color:var(--text-light);">Intenta ajustar tus filtros para ver más resultados.</p>
      </div>`;
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
    tag.innerHTML = `${filter} <span style="cursor:pointer; color:var(--text-light);" title="Quitar filtro">×</span>`;
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
    html += `<div class="cart-item">
      <img src="${item.image}" class="cart-item-img" style="mix-blend-mode:multiply;">
      <div style="flex-grow:1; display:flex; flex-direction:column; justify-content:space-between;">
        <div><div class="cart-item-title">${item.name}</div><div style="font-size:0.8rem; color:var(--text-light); font-family:'Inter', sans-serif;">Talla: ${item.sizes[0]} | Color: ${item.colorName}</div></div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.5rem;">
          <div style="font-weight:700; color:var(--accent-color);">S/. ${item.price.toFixed(2)}</div>
          <span style="color:#ff3333; font-size:0.8rem; cursor:pointer; text-decoration:underline;" onclick="window.removeCartItem(${item.cartId})">Quitar</span>
        </div>
      </div>
    </div>`;
  });
  cartItemsContainer.innerHTML = html;
  cartTotalPrice.innerHTML = `<span>Total:</span> <span style="text-align:right;">S/. ${total.toFixed(2)}<br><span style="font-size:0.85rem; color:var(--text-light); font-weight:400;">$ ${(total / 3.8).toFixed(2)}</span></span>`;
}
window.removeCartItem = removeFromCart;
