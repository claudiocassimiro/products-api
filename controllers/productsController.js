const express = require('express');
const ProductsServices = require('../services/productsServices');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const products = await ProductsServices.listProducts();

    return res.status(200).json(products);
  } catch(e) {
    console.log(e);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductsServices.listProductsById(Number(id));

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(product);
  } catch(e) {
    console.log(e);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  const { nome, descricao, preco } = req.body;
  try {
    const product = await ProductsServices.createProduct({ nome, descricao, preco });

    return res.status(201).json(product);
  } catch(e) {
    console.log(e);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco } = req.body;
  try {
    const product = await ProductsServices.editProduct({ id: Number(id), nome, descricao, preco });

    if (!product.affectedRows) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product successfully updated' });
  } catch(e) {
    console.log(e);
    return res.status(500).json({ message: 'Internal server error'});
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await ProductsServices.excludeProduct(Number(id));

    if (!response.affectedRows) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).end();
  } catch(e) {
    console.log(e);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
