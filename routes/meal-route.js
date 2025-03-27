const express = require('express');
const { fectchAllMeals, addMeal, EditMeal, deleteMeal } = require('../controller/meals');
const router = express.Router();


router.get('/get-all', fectchAllMeals)
router.post('/add', addMeal)
router.put('/edit/:id', EditMeal )
router.delete('/delete/:id',deleteMeal )


module.exports = router;