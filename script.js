/* ============================================
   LIMONI — Interactive Scripts & Translations
   ============================================ */

const translations = {
  es: {
    nav_home: "Inicio",
    nav_products: "Productos",
    nav_process: "Proceso",
    nav_professionals: "Profesionales",
    nav_about: "Sobre mí",
    nav_contact: "Contacto",
    nav_faq: "FAQ",

    about_title: "Soy Agus, <span>la de las lámparas</span>",
    about_desc_1: "Hace un tiempo descubrí que podía transformar hilos simples en algo mágico. Cada lámpara que creo es una expresión de creatividad y cariño, pensada para darle calidez a tu espacio.",
    about_desc_2: "Trabajo desde mi taller, eligiendo cada color y textura para que cada pieza sea verdaderamente única. No hay dos lámparas iguales, porque cada una lleva un poquito de mi corazón.",
    about_feat_1: "Hecho a mano",
    about_feat_2: "Diseños únicos",
    about_feat_3: "Materiales naturales",
    about_feat_4: "Con amor",

    hero_badge: "Hecho a mano con amor",
    hero_title: "Iluminá tu hogar con <span class='highlight'>calidez artesanal</span>",
    hero_subtitle: "Lámparas únicas tejidas a mano. Diseños que cuentan historias y transforman espacios.",
    hero_cta: "Ver colección",
    hero_about_link: "Conocé mi historia &rarr;",
    hero_floating_1: "100% Artesanal",
    hero_floating_2: "Cada pieza es única",
    scroll_text: "Descubrí más",

    cat_title: "Explorá por Categoría",
    cat_subtitle: "Encontrá la iluminación perfecta para cada espacio",
    cat_all: "Todas",
    cat_pendant: "Colgantes",
    cat_table: "De Mesa",
    cat_floor: "De Pie",
    cat_btn: "Ver colección",

    prod_title: "Nuestra Colección",
    prod_subtitle: "Piezas únicas tejidas a mano para darle calidez y personalidad a cada rincón de tu hogar",

    tag_new: "Nuevo",
    tag_popular: "Popular",
    tag_classic: "Clásica",
    loading: "Cargando catálogo...",
    view_details: "Ver detalles",
    btn_whatsapp: "💬 WhatsApp",
    wa_message_prefix: "Hola Limoni! Me interesa la lámpara",

    process_title: "El Proceso",
    process_subtitle: "Cada lámpara nace de un proceso creativo artesanal, con materiales cuidadosamente seleccionados",
    step_1_title: "Diseño & Boceto",
    step_1_desc: "Todo comienza con lápiz y papel, buscando formas orgánicas y armonía visual.",
    step_2_title: "Tejido Artesanal",
    step_2_desc: "Hilo a hilo, a mano, construimos la estructura que dará vida a la luz y sus texturas.",
    step_3_title: "Luz & Alma",
    step_3_desc: "El toque final: la luz cálida que transforma el ambiente y resalta cada detalle.",

    prof_title: "Para Profesionales",
    prof_subtitle: "Iluminación artesanal para proyectos que buscan calidez y personalidad",
    prof_hotels_title: "Hoteles & Restaurantes",
    prof_hotels_desc: "Creamos piezas exclusivas que le dan identidad a tu espacio. Iluminación cálida y única para ambientaciones que tus huéspedes y clientes no olviden.",
    prof_decorators_title: "Decoradores & Arquitectos",
    prof_decorators_desc: "Diseños a medida para tus proyectos. Trabajamos juntos la paleta de colores, formas y tamaños que necesites para cada ambiente.",
    prof_retail_title: "Tiendas & Revendedores",
    prof_retail_desc: "Precios especiales por cantidad. Ofrecé piezas artesanales únicas en tu tienda y diferenciá tu propuesta con productos hechos a mano.",
    prof_events_title: "Eventos & Regalos Corporativos",
    prof_events_desc: "Lámparas personalizadas para eventos especiales, inauguraciones o regalos empresariales con un toque artesanal y cálido.",
    prof_cta_text: "¿Tenés un proyecto en mente? Contame tu idea y armamos una propuesta a medida.",
    prof_btn: "Conversar por proyecto",

    contact_title: " ¿Te gustó algo? Hablemos",
    contact_subtitle: "Cada pieza se puede personalizar en colores y tamaños. Escribime y armamos la lámpara perfecta para vos.",
    contact_btn_whatsapp: "💬 Escribime por WhatsApp",
    contact_btn_instagram: "📸 Seguime en Instagram",

    faq_title: "Preguntas Frecuentes",
    faq_subtitle: "Todo lo que necesitás saber sobre nuestras lámparas artesanales",
    faq_1_q: "¿De qué materiales están hechas las lámparas?",
    faq_1_a: "Cada lámpara está tejida a mano con hilos de algodón y fibras naturales de alta calidad. Las estructuras son de alambre galvanizado resistente, y la parte eléctrica incluye portalámpara E27 con cable textil.",
    faq_2_q: "¿Puedo elegir los colores de mi lámpara?",
    faq_2_a: "¡Sí! Cada lámpara se puede personalizar en colores. Escribime por WhatsApp y te muestro la paleta de hilos disponibles para que armes la combinación que más te guste.",
    faq_3_q: "¿Cuánto tiempo tarda en hacerse una lámpara?",
    faq_3_a: "Dependiendo del modelo y la complejidad del diseño, cada lámpara tarda entre 3 y 7 días en estar lista. Al ser piezas artesanales, cada una requiere dedicación y tiempo para quedar perfecta.",
    faq_4_q: "¿Hacen envíos a todo el país?",
    faq_4_a: "¡Sí! Enviamos a todo el país con embalaje especial para que tu lámpara llegue perfecta. Los envíos se hacen por correo o mensajería, y te pasamos el seguimiento al momento del despacho.",
    faq_care_q: "¿Cómo cuido mi lámpara artesanal?",
    faq_care_a: "Las lámparas son fáciles de cuidar. Solo necesitás limpiarlas con un paño seco o un plumero suave. Evitá mojarlas o exponerlas a la lluvia directa. Usá lamparitas LED para mejor durabilidad.",
    faq_bulb_q: "¿Qué tipo de lamparita usan?",
    faq_bulb_a: "Todas las lámparas usan portalámpara E27 estándar. Recomendamos lamparitas LED cálidas (2700K) para lograr ese brillo acogedor perfecto. La lamparita no viene incluida.",
    faq_wholesale_q: "¿Hacen ventas mayoristas o para proyectos de decoración?",
    faq_wholesale_a: "¡Sí! Trabajamos con hoteles, restaurantes, decoradores, arquitectos y tiendas. Ofrecemos precios especiales por cantidad y desarrollos a medida. Escribinos para coordinar una reunión.",

    insta_title: "Seguinos en Instagram",
    insta_subtitle: "Encontrá inspiración y mirá el proceso detrás de cada pieza",
    footer_copy: "© 2024 Limoni Objetos. Hecho con ❤️ y luz."
  },
  en: {
    nav_home: "Home",
    nav_products: "Products",
    nav_process: "Process",
    nav_professionals: "Professionals",
    nav_about: "About",
    nav_contact: "Contact",
    nav_faq: "FAQ",

    about_title: "I'm Agus, <span>the lamp maker</span>",
    about_desc_1: "Some time ago I discovered I could transform simple threads into something magical. Each lamp I create is an expression of creativity and affection, designed to bring warmth to your space.",
    about_desc_2: "I work from my workshop, choosing every color and texture to make each piece truly unique. There are no two identical lamps, because each one carries a little bit of my heart.",
    about_feat_1: "Handmade",
    about_feat_2: "Unique designs",
    about_feat_3: "Natural materials",
    about_feat_4: "With love",

    hero_badge: "Handmade with love",
    hero_title: "Light up your home with <span class='highlight'>artisanal warmth</span>",
    hero_subtitle: "Unique handmade lamps. Designs that tell stories and transform spaces.",
    hero_cta: "View Collection",
    hero_about_link: "Meet my story &rarr;",
    hero_floating_1: "100% Handmade",
    hero_floating_2: "Each piece is unique",
    scroll_text: "Discover more",

    cat_title: "Explore by Category",
    cat_subtitle: "Find the perfect lighting for every space",
    cat_all: "All",
    cat_pendant: "Pendants",
    cat_table: "Table",
    cat_floor: "Floor",
    cat_btn: "View collection",

    prod_title: "Our Collection",
    prod_subtitle: "Unique hand-woven pieces to bring warmth and personality to every corner of your home",

    tag_new: "New",
    tag_popular: "Popular",
    tag_classic: "Classic",
    loading: "Loading catalog...",
    view_details: "View details",
    btn_whatsapp: "💬 WhatsApp",
    wa_message_prefix: "Hi Limoni! I'm interested in the lamp",

    process_title: "The Process",
    process_subtitle: "Each lamp is born from an artisanal creative process, with carefully selected materials",
    step_1_title: "Design & Sketch",
    step_1_desc: "It all starts with pencil and paper, seeking organic shapes and visual harmony.",
    step_2_title: "Hand Weaving",
    step_2_desc: "Thread by thread, by hand, we build the structure that will bring light and textures to life.",
    step_3_title: "Light & Soul",
    step_3_desc: "The final touch: warm light that transforms the ambiance and highlights every detail.",

    prof_title: "For Professionals",
    prof_subtitle: "Artisanal lighting for projects seeking warmth and personality",
    prof_hotels_title: "Hotels & Restaurants",
    prof_hotels_desc: "We create exclusive pieces that give identity to your space. Warm and unique lighting for ambiances your guests and clients won't forget.",
    prof_decorators_title: "Decorators & Architects",
    prof_decorators_desc: "Custom designs for your projects. We work together on the color palette, shapes, and sizes you need for each environment.",
    prof_retail_title: "Shops & Resellers",
    prof_retail_desc: "Special prices for bulk orders. Offer unique artisanal pieces in your shop and differentiate your proposal with handmade products.",
    prof_events_title: "Events & Corporate Gifts",
    prof_events_desc: "Customized lamps for special events, inaugurations, or corporate gifts with an artisanal and warm touch.",
    prof_cta_text: "Have a project in mind? Tell me your idea and let's craft a custom proposal.",
    prof_btn: "Discuss a Project",

    contact_title: "Liked something? Let's talk",
    contact_subtitle: "Each piece can be customized in colors and sizes. Write to me and let's create the perfect lamp for you.",
    contact_btn_whatsapp: "💬 Chat on WhatsApp",
    contact_btn_instagram: "📸 Follow on Instagram",

    faq_title: "FAQ",
    faq_subtitle: "Everything you need to know about our handmade lamps",
    faq_1_q: "What materials are the lamps made of?",
    faq_1_a: "Each lamp is hand-woven with high-quality cotton threads and natural fibers. The structures are made of resistant galvanized wire, and the electrical part includes an E27 socket with textile cable.",
    faq_2_q: "Can I choose the colors of my lamp?",
    faq_2_a: "Yes! Each lamp can be customized in colors. Write to me on WhatsApp and I'll show you the available thread palette so you can create the combination you like best.",
    faq_3_q: "How long does it take to make a lamp?",
    faq_3_a: "Depending on the model and design complexity, each lamp takes between 3 and 7 days to be ready. Being artisanal pieces, each one requires dedication and time to be perfect.",
    faq_4_q: "Do you ship nationwide?",
    faq_4_a: "Yes! We ship nationwide with special packaging so your lamp arrives perfectly. Shipments are made via mail or courier, and we provide tracking upon dispatch.",
    faq_care_q: "How do I care for my artisanal lamp?",
    faq_care_a: "Lamps are easy to care for. You just need to clean them with a dry cloth or a soft duster. Avoid getting them wet or exposing them to direct rain. Use LED bulbs for better durability.",
    faq_bulb_q: "What type of bulb do they use?",
    faq_bulb_a: "All lamps use a standard E27 socket. We recommend warm LED bulbs (2700K) to achieve that perfect cozy glow. The bulb is not included.",
    faq_wholesale_q: "Do you do wholesale or decoration projects?",
    faq_wholesale_a: "Yes! We work with hotels, restaurants, decorators, architects, and shops. We offer special prices for bulk orders and custom developments. Write to us to coordinate a meeting.",

    insta_title: "Follow us on Instagram",
    insta_subtitle: "Find inspiration and see the process behind each piece",
    footer_copy: "© 2024 Limoni Objetos. Handmade with ❤️ and light."
  }
};

let allProducts = [];
let currentFilter = 'all';

function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  localStorage.setItem('limoni_lang', lang);
  renderProducts(allProducts, lang);

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.textContent = lang === 'es' ? 'EN' : 'ES';
  }
}

async function loadProducts() {
  try {
    // Support inlined data for portable builds
    if (window.productsData) {
      allProducts = window.productsData;
    } else {
      const response = await fetch('products.json');
      allProducts = await response.json();
    }
    const lang = localStorage.getItem('limoni_lang') || 'es';
    renderProducts(allProducts, lang);
  } catch (error) {
    console.error('Error loading products:', error);
    const grid = document.getElementById('productsGrid');
    if (grid) {
      grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem;">Error al cargar el catálogo.</p>';
    }
  }
}

function renderProducts(products, lang) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = currentFilter === 'all'
    ? products
    : products.filter(p => p.category === currentFilter);

  if (filtered.length === 0 && products.length > 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem;">No hay productos en esta categoría.</p>';
    return;
  }

  grid.innerHTML = filtered.map((p, index) => {
    const name = lang === 'es' ? p.name_es : p.name_en;
    const desc = lang === 'es' ? p.desc_es : p.desc_en;
    const tagKey = `tag_${p.tag}`;
    const tagText = (translations[lang] && translations[lang][tagKey]) || p.tag;
    const tag = p.tag ? `<span class="product-tag" data-i18n="${tagKey}">${tagText}</span>` : '';

    const hasDiscount = p.price_original && p.price_original > p.price;
    const priceDisplay = hasDiscount
      ? `<span class="product-price"><small style="text-decoration: line-through; opacity: 0.6; padding-right: 8px;">$ ${p.price_original.toLocaleString('es-AR')}</small> $ ${p.price.toLocaleString('es-AR')}</span>`
      : `<span class="product-price">$ ${p.price.toLocaleString('es-AR')}</span>`;

    const waPrefix = translations[lang].wa_message_prefix || "Hola Limoni! Me interesa la lámpara";
    const waUrl = `https://wa.me/?text=${encodeURIComponent(waPrefix + ' ' + name)}`;

    const imagesJson = JSON.stringify(p.images).replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const multiIndicator = p.images.length > 1
      ? `<span class="product-multi-img">📷 ${p.images.length} fotos</span>`
      : '';

    return `
      <div class="product-card" data-category="${p.category}" style="animation: fadeInUp 0.4s ease forwards ${index * 0.1}s">
        <div class="product-card-image">
          <img src="${p.images[0]}" alt="${name}" loading="lazy" onclick="openLightbox(${imagesJson}, '${name.replace(/'/g, "\\'")}')" style="cursor: zoom-in;">
          ${tag}
          ${multiIndicator}
        </div>
        <div class="product-card-body">
          <h3>${name}</h3>
          <p class="product-desc">${desc}</p>
          <div class="product-dimensions">${p.dimensions}</div>
          <div class="product-card-footer">
            ${priceDisplay}
            <a href="${waUrl}" target="_blank" class="btn-consult">
              ${translations[lang].btn_whatsapp || '💬 WhatsApp'}
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(images, alt, startIndex) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxCounter = document.getElementById('lightboxCounter');

  if (!lightbox || !lightboxImg) return;

  // Support both string (single image) and array
  if (typeof images === 'string') {
    lightboxImages = [images];
  } else {
    lightboxImages = images;
  }
  lightboxIndex = startIndex || 0;

  updateLightboxImage();

  // Show/hide nav arrows based on image count
  const hasMultiple = lightboxImages.length > 1;
  if (lightboxPrev) lightboxPrev.style.display = hasMultiple ? 'flex' : 'none';
  if (lightboxNext) lightboxNext.style.display = hasMultiple ? 'flex' : 'none';
  if (lightboxCounter) lightboxCounter.style.display = hasMultiple ? 'block' : 'none';

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateLightboxImage() {
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCounter = document.getElementById('lightboxCounter');
  if (lightboxImg && lightboxImages[lightboxIndex]) {
    lightboxImg.src = lightboxImages[lightboxIndex];
  }
  if (lightboxCounter && lightboxImages.length > 1) {
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
  }
}

function lightboxPrev() {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage();
}

function lightboxNext() {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  updateLightboxImage();
}

// Main logic
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('limoni_lang') || 'es';
  if (savedLang !== 'es') setLanguage(savedLang);

  loadProducts();

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const currentLang = localStorage.getItem('limoni_lang') || 'es';
      const newLang = currentLang === 'es' ? 'en' : 'es';
      setLanguage(newLang);
    });
    toggle.textContent = savedLang === 'es' ? 'EN' : 'ES';
  }

  // Mobile Navigation
  const hamburger = document.getElementById('hamburger');
  const navGroups = document.querySelectorAll('.nav-group');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navGroups.forEach(group => group.classList.toggle('active'));
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navGroups.forEach(group => group.classList.remove('active'));
    });
  });

  // Header scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }, { passive: true });

  // Reveal Animations
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // Parallax
  const parallaxElements = document.querySelectorAll('.parallax-element');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 0.05;
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const offset = (window.innerHeight / 2 - centerY) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
  }, { passive: true });

  // Filters
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      const lang = localStorage.getItem('limoni_lang') || 'es';
      renderProducts(allProducts, lang);
    });
  });

  // FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(other => other.classList.remove('active'));
      item.classList.toggle('active', !isActive);
    });
  });

  // Lightbox close
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const closeLightbox = () => {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  };
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  // Lightbox gallery navigation
  const lightboxPrevBtn = document.getElementById('lightboxPrev');
  const lightboxNextBtn = document.getElementById('lightboxNext');
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); lightboxPrev(); });
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', (e) => { e.stopPropagation(); lightboxNext(); });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrev();
    if (e.key === 'ArrowRight') lightboxNext();
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const h = header ? header.offsetHeight : 0;
        const pos = target.getBoundingClientRect().top + window.scrollY - h;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    });
  });

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop - (header ? header.offsetHeight : 0);
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) link.classList.add('active');
        else link.classList.remove('active');
      }
    });
  }, { passive: true });
});

// Dynamic styles
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

window.filterAndScroll = (category) => {
  const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
  const section = document.getElementById('productos');
  const header = document.getElementById('header');
  if (section) {
    const h = header ? header.offsetHeight : 0;
    const top = section.getBoundingClientRect().top + window.scrollY - h;
    window.scrollTo({ top: top, behavior: 'smooth' });
    if (filterBtn) setTimeout(() => filterBtn.click(), 800);
  }
};
