import getData from '../utils/getData';

const Home = async (Products) => {
  const products = await getData();
  const view = `
    <div class="Products">
      ${products.map(product => `
        <article class="Products-item">
          <a href="#/${product._id}/">
            <img src="${product.img.hdUrl}" alt="${product.img.hdUrl}">
            <h2>${product.category}</h2>
            <h2>${product.name}</h2>
           
             
          </a>
        </article>
      `).join('')}
    </div>
  `;
  return view;
};

export default Home;