const express = require('express');
const Workout = require('../models/workoutModel')

const router  = express.Router();




///get all workouts
router.get('/', (req, res)=>{
    res.json({mssg: "Get All workouts"})
})


//het a signle workout

router.get('/:id', (req, res)=>{
    res.json({mssg: "get a single workout"})
})

//post a new workout 

router.post('/', async (req, res)=>{
    const {title, load, reps} = req.body;
    try{

        const workout =await Workout.create({title, load, reps})
        res.status(200).json(workout)

    }catch (error){

        res.status(400).json({error: error.message})
    }
    //  res.json({mssg: "POST a new workout"})
})


//delete workout

router.delete('/:id', (req, res)=>{
     res.json({mssg: "delete a workout"})
})

//update workout 

router.patch('/:id', (req, res)=>{
     res.json({mssg: "update a workout"})
})




module.exports = router