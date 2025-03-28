const express = require('express');
const { fectchAllMeals, addMeal, EditMeal, deleteMeal, getRandomMeal } = require('../controller/meals');
const router = express.Router();


router.get('/get-all', fectchAllMeals)
router.get('/get-aggregate/random', getRandomMeal)
router.post('/add', addMeal)
router.put('/edit/:id', EditMeal )
router.delete('/delete/:id',deleteMeal )
module.exports = router;