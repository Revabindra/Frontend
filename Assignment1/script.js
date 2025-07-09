  async function fetchData() {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
     // console.log(data);
      return data.products; 
    }

    async function renderProducts() {
      const container = document.getElementById("container");
      const products = await fetchData();

      products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <img src="${product.thumbnail}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p class="price">₹${product.price}</p>
        `;

        container.appendChild(card);
      });
    }
    renderProducts();