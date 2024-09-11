import express from 'express'
import { Cereal } from '../models/ceralModel.js'

const router = express.Router()


//all paths are 'predefined with "/cereals" in express-router middleware

//get all cereals (Home)
router.get('/', async (req, res) => {
    try {
        const cereals = await Cereal.find({})
        //consider sending cereals
        return res.status(200).json({count: cereals.length, data: cereals})
    } catch (error) {
        res.status(400).send({message: error.message})        
    }
})


//post one cereal
router.post('/', async (req, res) => {
    try {
        const { title } = req.body
        if (!title) {
        return res.status(400).send({message: 'please provide all requested fields'})
        }
        //create cereal obj
        const cereal = await Cereal.create({ title })
        res.status(200).json(cereal)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


//get one cereal by id
router.get('/:id', async (req, res) => {
   try {
    const { id } = req.params
    const cereal = await Cereal.findById(id)
    return res.status(200).json(cereal)    
   } catch (error) {
    res.status(400).send({message: `Cereal with id of ${id} not found`})
   }    
})


//update new cereal
router.put('/:id', async (req,res) => {
    try {
        const { id } = req.params        
        if (!req.body.title) {
            return res.status(400).send({message: 'please provide all requested fields'})
        }
        const result = await Cereal.findByIdAndUpdate(id, req.body)             
        return res.status(200).send({message: 'was updated'})
    } catch (error) {
        res.status(500).send({message: error.message})
    }

})


//delete one cereal
router.delete('/:id', async (req,res) => {
    try {
        const { id } = req.params
        const cereal = await Cereal.findByIdAndDelete(id)        
        if(!cereal) {
            return res.status(404).send({message: `Cereal with id of ${id} not found`})
        }    
        return res.status(200).send({message: `Cereal with id of ${id} was deleted`})
    } catch (error) {
        
    }
})



export default router