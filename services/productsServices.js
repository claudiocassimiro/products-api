const ProductsModel = require('../models/productsModel');

const listProducts = async () => {
  const products = await ProductsModel.listProducts();

  return products;
};

const listProductsById = async (id) => {
  const products = await ProductsModel.listProductsById(id);

  return products;
}

const createProduct = async ({ nome, descricao, preco }) => {
  const product = await ProductsModel.createProduct({ nome, descricao, preco });

  return product;
}

const editProduct = async ({ id, nome, descricao, preco }) => {
  const product = await ProductsModel.editProduct({ id, nome, descricao, preco});

  return product;
};

const excludeProduct = async (id) => {
  const response = await ProductsModel.excludeProduct(id);

  return response;
};

module.exports = {
  listProducts,
  listProductsById,
  createProduct,
  editProduct,
  excludeProduct
}