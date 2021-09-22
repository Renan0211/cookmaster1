const service = require('../services/recipesService');

const createNewRecipe = async (req, res) => {
  const { authorization: token } = req.headers;
  const { name, ingredients, preparation } = req.body;
  const result = await service.createNewRecipe(name, ingredients, preparation, token);
  if (result.err) {
    return res.status(result.status).json(result.err);
  }
  res.status(201).json(result);
};

const getAllRecipes = async (_req, res) => {
  const allRecipes = await service.getAllRecipes();
  res.status(200).json(allRecipes);
};

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  const result = await service.getRecipeById(id);
  if (result.err) {
    return res.status(result.status).json(result.err);
  }
  res.status(200).json(result);
};

module.exports = {
  createNewRecipe,
  getAllRecipes,
  getRecipeById,
};