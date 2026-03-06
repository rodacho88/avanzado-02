const upButton = document.querySelector('.floating button:last-child');
const mailButton = document.querySelector('.floating button:first-child');

if (upButton) {
  upButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (mailButton) {
  mailButton.addEventListener('click', () => {
    window.location.href = 'mailto:contacto@specialtoys.com?subject=Consulta%20de%20productos';
  });
}

const params = new URLSearchParams(window.location.search);
const tema = params.get('tema');

const DATA = {
  pokemon: {
    title: 'Pokémon',
    products: [
      { name: 'Ash Ketchum Figura', sold: '124 vendidos', price: 'de$26.50', oldPrice: '$31.99', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2411/18/products/80e0150d90.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Jessie Rocket Figura', sold: '98 vendidos', price: 'de$28.40', oldPrice: '$33.50', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2411/18/products/ff87a0bac0.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'James Rocket Figura', sold: '201 vendidos', price: 'de$32.00', oldPrice: '$38.20', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2411/18/products/950d8fa1b3.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Meowth Rocket Figura', sold: '72 vendidos', price: 'de$25.90', oldPrice: '$30.00', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2411/18/products/9f4bfe1a7c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
    ]
  },
  ninjago: {
    title: 'Ninjago',
    products: [
      { name: 'Ninjago Maestros del Spinjitzu Jay ZX', sold: '35 vendidos', price: 'de$24.50', oldPrice: '$30.78', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2501/21/products/c88b4dadbc.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Ninjago Maestros del Spinjitzu Zane ZX', sold: '101 vendidos', price: 'de$28.03', oldPrice: '$35.09', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2501/21/products/b0716bc3bb.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Ninjago Maestros del Spinjitzu Kay ZX', sold: '1714 vendidos', price: 'de$26.27', oldPrice: '$32.93', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2501/21/products/788e49827f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Ninjago Maestros del Spinjitzu Cole ZX', sold: '2633 vendidos', price: 'de$24.50', oldPrice: '$30.78', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2501/21/products/15daff4d10.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Ninjago Maestros del Spinjitzu Lloyd ZX', sold: '2633 vendidos', price: 'de$24.50', oldPrice: '$30.78', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2501/21/products/a41bae31df.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
    ]
  },
  'star-wars': {
    title: 'Star Wars',
    products: [
      { name: 'Anakin Skywalker Figura', sold: '240 vendidos', price: 'de$29.90', oldPrice: '$36.00', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2410/29/products/1c16d2206b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Luke Skywalker Figura', sold: '188 vendidos', price: 'de$27.80', oldPrice: '$34.20', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2410/29/products/f12d29d398.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
    ]
  },
  marvel: {
    title: 'Marvel',
    products: [
      { name: 'Spider-Man Figura', sold: '430 vendidos', price: 'de$31.40', oldPrice: '$39.10', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2410/23/products/b9dfe47044.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Captain America Figura', sold: '322 vendidos', price: 'de$29.60', oldPrice: '$35.50', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2410/23/products/eb81408b97.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
    ]
  },
  dc: {
    title: 'DC',
    products: [
      { name: 'Batman Figura', sold: '287 vendidos', price: 'de$30.25', oldPrice: '$36.40', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2602/07/products/b3026fce63.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Superman Figura', sold: '164 vendidos', price: 'de$29.10', oldPrice: '$34.95', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2511/01/products/e8f5a7bbbd.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
    ]
  },
  'demon-slayer': {
    title: 'Demon Slayer',
    products: [
      { name: 'Tanjiro Figura', sold: '289 vendidos', price: 'de$26.70', oldPrice: '$31.00', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2409/12/products/32d0edbcf4.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Nezuko Figura', sold: '147 vendidos', price: 'de$25.90', oldPrice: '$30.80', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2409/12/products/a3d9780984.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
    ]
  },
  'jujutsu-kaisen': {
    title: 'Jujutsu Kaisen',
    products: [
      { name: 'Gojo Figura', sold: '210 vendidos', price: 'de$27.20', oldPrice: '$34.00', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2409/27/products/1f7a33baab.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Sukuna Figura', sold: '174 vendidos', price: 'de$25.80', oldPrice: '$31.90', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2409/27/products/7f4dac6f36.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
    ]
  },
  naruto: {
    title: 'Naruto',
    products: [
      { name: 'Naruto Figura', sold: '410 vendidos', price: 'de$24.95', oldPrice: '$30.10', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2409/27/products/3705d85226.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Sasuke Figura', sold: '260 vendidos', price: 'de$29.60', oldPrice: '$36.20', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2409/27/products/30d6611b2c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
    ]
  },
  'one-piece': {
    title: 'One Piece',
    products: [
      { name: 'Luffy Figura', sold: '365 vendidos', price: 'de$26.40', oldPrice: '$32.20', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2506/19/products/3d1ed92b06.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Zoro Figura', sold: '288 vendidos', price: 'de$30.50', oldPrice: '$37.00', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2506/19/products/99bd70f074.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
    ]
  },
  todos: {
    title: 'Todos los productos',
    products: [
      { name: 'Ash Ketchum Figura', sold: '124 vendidos', price: 'de$26.50', oldPrice: '$31.99', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2411/18/products/80e0150d90.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Jessie Rocket Figura', sold: '98 vendidos', price: 'de$28.40', oldPrice: '$33.50', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2411/18/products/ff87a0bac0.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'James Rocket Figura', sold: '201 vendidos', price: 'de$32.00', oldPrice: '$38.20', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2411/18/products/950d8fa1b3.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Meowth Rocket Figura', sold: '72 vendidos', price: 'de$25.90', oldPrice: '$30.00', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2411/18/products/9f4bfe1a7c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Ninjago Maestros del Spinjitzu Jay ZX', sold: '35 vendidos', price: 'de$24.50', oldPrice: '$30.78', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2501/21/products/c88b4dadbc.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Ninjago Maestros del Spinjitzu Zane ZX', sold: '101 vendidos', price: 'de$28.03', oldPrice: '$35.09', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2501/21/products/b0716bc3bb.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Ninjago Maestros del Spinjitzu Kay ZX', sold: '1714 vendidos', price: 'de$26.27', oldPrice: '$32.93', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2501/21/products/788e49827f.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Ninjago Maestros del Spinjitzu Cole ZX', sold: '2633 vendidos', price: 'de$24.50', oldPrice: '$30.78', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2501/21/products/15daff4d10.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Ninjago Maestros del Spinjitzu Lloyd ZX', sold: '2633 vendidos', price: 'de$24.50', oldPrice: '$30.78', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2501/21/products/a41bae31df.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Anakin Skywalker Figura', sold: '240 vendidos', price: 'de$29.90', oldPrice: '$36.00', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2410/29/products/1c16d2206b.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Luke Skywalker Figura', sold: '188 vendidos', price: 'de$27.80', oldPrice: '$34.20', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2410/29/products/f12d29d398.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Spider-Man Figura', sold: '430 vendidos', price: 'de$31.40', oldPrice: '$39.10', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2410/23/products/b9dfe47044.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Captain America Figura', sold: '322 vendidos', price: 'de$29.60', oldPrice: '$35.50', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2410/23/products/eb81408b97.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Batman Figura', sold: '287 vendidos', price: 'de$30.25', oldPrice: '$36.40', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2602/07/products/b3026fce63.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Superman Figura', sold: '164 vendidos', price: 'de$29.10', oldPrice: '$34.95', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2511/01/products/e8f5a7bbbd.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Tanjiro Figura', sold: '289 vendidos', price: 'de$26.70', oldPrice: '$31.00', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2409/12/products/32d0edbcf4.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Nezuko Figura', sold: '147 vendidos', price: 'de$25.90', oldPrice: '$30.80', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2409/12/products/a3d9780984.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Gojo Figura', sold: '210 vendidos', price: 'de$27.20', oldPrice: '$34.00', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2409/27/products/1f7a33baab.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Sukuna Figura', sold: '174 vendidos', price: 'de$25.80', oldPrice: '$31.90', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2409/27/products/7f4dac6f36.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Naruto Figura', sold: '410 vendidos', price: 'de$24.95', oldPrice: '$30.10', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2409/27/products/3705d85226.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Sasuke Figura', sold: '260 vendidos', price: 'de$29.60', oldPrice: '$36.20', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2409/27/products/30d6611b2c.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Luffy Figura', sold: '365 vendidos', price: 'de$26.40', oldPrice: '$32.20', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2506/19/products/3d1ed92b06.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
      { name: 'Zoro Figura', sold: '288 vendidos', price: 'de$30.50', oldPrice: '$37.00', image: 'https://ueeshop.ly200-cdn.com/u_file/UPBD/UPBD111/2506/19/products/99bd70f074.jpg?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_1000,w_1000' },
    ]
      
  }
};

if (tema) {
  const homeSection = document.getElementById('homeSection');
  const collectionSection = document.getElementById('collectionSection');
  const titleElement = document.getElementById('themeTitle');
  const breadcrumbElement = document.getElementById('breadcrumbTheme');
  const grid = document.getElementById('productGrid');
  const searchInput = document.getElementById('searchInput');
  const homeSearchLabel = document.getElementById('homeSearchLabel');

  const currentData = DATA[tema] || DATA.todos;

  if (homeSection) homeSection.hidden = true;
  if (collectionSection) collectionSection.hidden = false;
  if (homeSearchLabel) homeSearchLabel.hidden = true;
  if (titleElement) titleElement.textContent = currentData.title;
  if (breadcrumbElement) breadcrumbElement.textContent = currentData.title;

  const renderProducts = (products) => {
    if (!grid) return;

    grid.innerHTML = products.map((product) => `
      <article class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="sold">${product.sold}</p>
        <div class="price-row">
          <p class="price">${product.price}</p>
          <p class="old-price">${product.oldPrice}</p>
        </div>
      </article>
    `).join('');
  };

  renderProducts(currentData.products);

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      const query = event.target.value.trim().toLowerCase();
      const filtered = currentData.products.filter((item) => item.name.toLowerCase().includes(query));
      renderProducts(filtered);
    });
  }
}