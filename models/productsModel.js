const connection = require('./connection');

const listProducts = async () => {
  try {
    const [products] = await connection.execute('SELECT * FROM products_data.products');

    return products;
  } catch(e) {
    console.log(e);
    return [];
  }
};

const listProductsById = async (id) => {
  try {
    const [products] = await connection.execute('SELECT * FROM products_data.products WHERE id = ?', [id]);

    if (products.length === 0) {
      return false;
    }

    return products[0];
  } catch(e) {
    console.log(e);
    return false;
  }
};

const createProduct = async ({ nome, descricao, preco }) => {
  try {
    const [product] = await connection.execute('INSERT INTO products_data.products (nome, descricao, preco) VALUES (?, ?, ?)', [nome, descricao, preco]);

    return product;
  } catch(e) {
    console.log(e);
    return false;
  }
};

const editProduct = async ({ id, nome, descricao, preco }) => {
  try {
    const [product] = await connection.execute('UPDATE products_data.products SET nome = ?, descricao = ?, preco = ? WHERE id = ?', [nome, descricao, preco, id]);

    return product
  } catch(e) {
    console.log(e);
    return false;
  }
};

const excludeProduct = async (id) => {
  try {
    const [response] = await connection.execute('DELETE FROM products_data.products WHERE id = ?', [id]);

    return response;
  } catch(e) {
    console.log(e);
    return false;
  }
};

module.exports = {
  listProducts,
  listProductsById,
  createProduct,
  editProduct,
  excludeProduct
}