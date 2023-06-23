// *Template given ref: Activity 14--Complete 

const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `locahost:3001/api/categories` endpoint

// find all categories
// be sure to include its associated Products

router.get('/', async (req, res) => {
  try {
  const categoryData = await Category.findAll({
  include: [{ model: Product }],
  });
  res.status(200).json(categoryData);
  } catch (err) {
  res.status(500).json(err);
  }
  });

// find one category by its `id` value
// be sure to include its associated Products

router.get('/:id', async (req, res) => {
  try {
  const categoryData = await Category.findByPk(req.params.id, {
  include: [{ model: Product }],
  });
  res.status(200).json(categoryData);
  } catch (err) {
  res.status(500).json(err);
  }
  });

// create a new category defined the necessary middleware to parse the request body,
//  such as body-parser or Express's built-in json() middleware.
router.post('/', async (req, res) => {
  try {
  const categoryData = await Category.create({
  category_name: req.body.category_name
  });
  res.status(200).json(categoryData);
  } catch (err) {
  res.status(500).json(err);
  }
  });

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
  const categoryData = await Category.update(
  { category_name: req.body.category_name }, // update the category_name column
  { where: { category_id: req.params.id } } // where category_id matches the id in the request
  );
  res.status(200).json(categoryData);
  } catch (err) {
  res.status(500).json(err);
  }
  });

// delete a category by its `id` value   
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
