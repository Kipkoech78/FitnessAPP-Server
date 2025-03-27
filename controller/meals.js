const Meal= require('../models/MEalModel')
const addMeal = async (req,res) =>{
    try{
        const { name, category,calories, protein,carbs,fat,goal } = req.body
        if(!name || !category ||!calories ||!protein|| !carbs ||!goal ||!fat){
            res.json({
                success: false,
                message:"All fields are required"
            })
        }
        const newMeal = new Meal({
            name, category, calories, protein, carbs, fat , goal
        })
        await newMeal.save()
        res.status(201).json({
             success : true,
            message: "Meals saved Successfuly"
        })


    }catch(err){
        console.log("error in Add meal" + err)
        res.json({
            success: false,
            message: "Error Occured adding new meal"
        })
    }
}
const deleteMeal = async(req,res) =>{
    try{
        const {id} = req.params
        const meal = await Meal.findByIdAndDelete(id)

        if(!meal){
            res.status(404).json({
                success: false,
                message:"MEal not found"
            })
        }else{
            res.status(200).json({
                success: false,
                message:"Meal Item successfuly deleted"
            })
        }

    }catch(err){
        console.log(err)
        res.status(400).json({
            success: false,
            message:"Error occuured deleting meal"
        })
    }
}
const fectchAllMeals = async(req, res) =>{
    try{
        const listOfMeals = await Meal.find({});
        res.status(200).json({
            success: false,
            message:"data fetched successfuly",
            data: listOfMeals
        })

    }catch(err){
        console.log("Error fetch All meals" + err)
        res.json({
            success: false,
            messsage: "Error fetching meals"
        })
    }
}
const EditMeal = async(req, res) =>{
    try{
        const {id} = req.params
        const { name, category,calories, protein,carbs,fat,goal } = req.body
        let findMealId = await Meal.findById(id)
        if(!findMealId){
            res.status(404).json({
                success: false,
                message:"Meal not Found"
            })
        }
        findMealId.name = name || findMealId.name
        findMealId.category = category || findMealId.category
        findMealId.calories = calories ==='' ? 100 : calories || findMealId.calories
        findMealId.protein = protein ==='' ? 0 : protein || findMealId.protein
        findMealId.carbs = carbs ==='' ? 0 : carbs || findMealId.carbs
        findMealId.fat = fat ==='' ? 0 : fat || findMealId.fat
        findMealId.goal = goal || findMealId.goal
        

        await findMealId.save()
        res.status(201).json({
            success: true,
            message:"Meal Edited successfuly.",
            data: findMealId
        })

    }catch(err){
        console.log(err + "error editing meal")
        res.json({
            success: false,
            message:"Error editing meal"
        })
    }
}




module.exports = {addMeal, deleteMeal , fectchAllMeals, EditMeal}