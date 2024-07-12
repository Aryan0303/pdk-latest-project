const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'petdailykit'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Get all products
app.get('/shop', (req, res) => {
  const sql = 'SELECT * FROM products ORDER BY id DESC';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
});

// Get a single product by ID
app.get('/shop/:id', (req, res) => {
  const sql = 'SELECT * FROM products WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(result[0]); // Return the first (and only) object
    }
  });
});

app.get('/api/shop/title/:title', (req, res) => {
  // Replace hyphens with spaces
  const title = req.params.title.replace(/-/g, ' ');
  const productQuery = 'SELECT * FROM products WHERE product_title = ?';
  const subcategoryQuery = 'SELECT name AS subcategory_name FROM subcategories WHERE id = ?';
  const categoryQuery = 'SELECT name AS category_name FROM categories WHERE id = ?';

  db.query(productQuery, [title], (errProduct, resultProduct) => {
    if (errProduct) {
      return res.status(500).json({ error: errProduct.message });
    }
    if (resultProduct.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const product = resultProduct[0];
    const productId = product.id;

    const sizesQuery = 'SELECT id, size FROM sizes WHERE product_id = ?';
    const colorsQuery = `
      SELECT c.id AS color_id, c.color, c.image_url
      FROM variations v
      JOIN colors c ON v.color_id = c.id
      WHERE v.product_id = ? AND v.size_id = ?
    `;
    const variationsQuery = `
      SELECT v.size_id, v.color_id, v.price, v.stock
      FROM variations v
      WHERE v.product_id = ?
    `;
    const priceQuery = `
      SELECT MIN(price) AS min_price, MAX(price) AS max_price
      FROM variations
      WHERE product_id = ?
    `;

    db.query(sizesQuery, [productId], (errSizes, resultSizes) => {
      if (errSizes) {
        return res.status(500).json({ error: errSizes.message });
      }

      const sizes = resultSizes;

      const colorPromises = sizes.map(size => {
        return new Promise((resolve, reject) => {
          db.query(colorsQuery, [productId, size.id], (errColors, resultColors) => {
            if (errColors) {
              return reject(errColors);
            }
            db.query(variationsQuery, [productId], (errVariations, resultVariations) => {
              if (errVariations) {
                return reject(errVariations);
              }
              const sizeColors = resultColors.map(color => {
                const variation = resultVariations.find(v => v.size_id === size.id && v.color_id === color.color_id);
                return {
                  color: color.color,
                  image_url: color.image_url,
                  price: variation ? variation.price : null,
                  stock: variation ? variation.stock : 'Out of Stock'
                };
              });
              resolve({
                size: size.size,
                colors: sizeColors
              });
            });
          });
        });
      });

      db.query(priceQuery, [productId], (errPrice, resultPrice) => {
        if (errPrice) {
          return res.status(500).json({ error: errPrice.message });
        }

        const { min_price, max_price } = resultPrice[0];

        Promise.all(colorPromises)
          .then(sizesWithColors => {
            const mainImage = sizesWithColors[0]?.colors[0]?.image_url || null;
            const galleryImages = sizesWithColors.flatMap(size => size.colors.map(color => color.image_url));

            // Fetch subcategory name
            db.query(subcategoryQuery, [product.subcategory_id], (errSubcategory, resultSubcategory) => {
              if (errSubcategory) {
                return res.status(500).json({ error: errSubcategory.message });
              }
              const subcategory_name = resultSubcategory[0]?.subcategory_name || null;

              // Fetch category name
              db.query(categoryQuery, [product.category_id], (errCategory, resultCategory) => {
                if (errCategory) {
                  return res.status(500).json({ error: errCategory.message });
                }
                const category_name = resultCategory[0]?.category_name || null;

                // Construct the final response object
                const response = {
                  ...product,
                  price_min: min_price,
                  price_max: max_price,
                  mainImage,
                  galleryImages,
                  sizes: sizesWithColors,
                  subcategory_name,
                  category_name
                };
                res.json(response);
              });
            });
          })
          .catch(err => res.status(500).json({ error: err.message }));
      });
    });
  });
});


// Add a product
app.post('/shop', (req, res) => {
  const sql = 'INSERT INTO products SET ?';
  db.query(sql, req.body, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(201).json({ id: result.insertId });
    }
  });
});

// Update a product
app.put('/shop/:id', (req, res) => {
  const sql = 'UPDATE products SET ? WHERE id = ?';
  db.query(sql, [req.body, req.params.id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(result);
    }
  });
});

// Delete a product
app.delete('/shop/:id', (req, res) => {
  const sql = 'DELETE FROM products WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(204).json(result);
    }
  });
});

// Get product details along with sizes, colors, prices, and stock
app.get('/api/shop/:id/details', (req, res) => {
  const productId = req.params.id;

  const productDetailsQuery = 'SELECT id, product_title, category_id, subcategory_id, SKU, short_description, long_description FROM products WHERE id = ?';
  const sizesQuery = 'SELECT id, size FROM sizes WHERE product_id = ?';
  const colorsQuery = `
    SELECT c.id AS color_id, c.color, c.image_url
    FROM variations v
    JOIN colors c ON v.color_id = c.id
    WHERE v.product_id = ? AND v.size_id = ?
  `;
  const variationsQuery = `
    SELECT v.size_id, v.color_id, v.price, v.stock
    FROM variations v
    WHERE v.product_id = ?
  `;
  const priceQuery = `
    SELECT MIN(price) AS min_price, MAX(price) AS max_price
    FROM variations
    WHERE product_id = ?
  `;

  // Fetch product details
  db.query(productDetailsQuery, [productId], (errProduct, resultProduct) => {
    if (errProduct) {
      return res.status(500).json({ error: errProduct.message });
    }
    if (resultProduct.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const product = resultProduct[0];

    // Fetch sizes
    db.query(sizesQuery, [productId], (errSizes, resultSizes) => {
      if (errSizes) {
        return res.status(500).json({ error: errSizes.message });
      }

      const sizes = resultSizes;

      // Fetch colors, prices, and stock for each size
      const colorPromises = sizes.map(size => {
        return new Promise((resolve, reject) => {
          db.query(colorsQuery, [productId, size.id], (errColors, resultColors) => {
            if (errColors) {
              return reject(errColors);
            }
            db.query(variationsQuery, [productId], (errVariations, resultVariations) => {
              if (errVariations) {
                return reject(errVariations);
              }
              const sizeColors = resultColors.map(color => {
                const variation = resultVariations.find(v => v.size_id === size.id && v.color_id === color.color_id);
                return {
                  color: color.color,
                  image_url: color.image_url,
                  price: variation ? variation.price : null,
                  stock: variation ? variation.stock : 'Out of Stock'
                };
              });
              resolve({
                size: size.size,
                colors: sizeColors
              });
            });
          });
        });
      });

      // Fetch min and max price
      db.query(priceQuery, [productId], (errPrice, resultPrice) => {
        if (errPrice) {
          return res.status(500).json({ error: errPrice.message });
        }

        const { min_price, max_price } = resultPrice[0];

        Promise.all(colorPromises)
          .then(sizesWithColors => {
            const mainImage = sizesWithColors[0]?.colors[0]?.image_url || null;
            const galleryImages = sizesWithColors.flatMap(size => size.colors.map(color => color.image_url));
            const response = {
              title: product.product_title,
              minPrice: min_price,
              maxPrice: max_price,
              mainImage,
              galleryImages,
              sizes: sizesWithColors
            };
            res.json(response);
          })
          .catch(err => res.status(500).json({ error: err.message }));
      });
    });
  });
});

const port = 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
