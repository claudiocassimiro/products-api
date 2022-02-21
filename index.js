const express = require('express');
const productsRouter = require('./controllers/productsController');

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/products', productsRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));