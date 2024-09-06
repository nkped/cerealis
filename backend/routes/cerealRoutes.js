import express from 'express'
import { Cereal } from '../models/ceralModel.js'

const router = express.Router()


//all paths are 'predefined with "cereal" i express-router middleware

//get all cereals
router.get('/', async (req, res) => {
    try {
        const cereals = await Cereal.find({})
        return res.status(200).send(cereals)
    } catch (error) {
        res.status(400). send({message: error.message})        
    }
})



//get cereal by id
/* 
  UNDER CONSTRUCTION
router.get('/:id', async (req, res) => {
   try {
    const { id } = req.params
    const cereal = await Cereal.findById(id)

    return res.status(200).json(cereal)    
   } catch (error) {
    res.status(400).send({message: `Cereal with id of ${id} not found`})
   }

    
}) */

router.get('/:id', async (req, res) => {
    console.log('get by id from db requested')

    const { id } = req.params

    const cereal = await Cereal.findById(id)

    return res.status(200).json(cereal)
})

//post one cereal
router.post('/', async (req, res) => {
    try {
        const { title } = req.body
        if (!title) {
        return res.status(400).send({message: 'please provide all requested field'})
        }
        //create cereal obj
        const cereal = await Cereal.create({ title })
        res.status(200).json(cereal)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//update new cereal
router.put('/:id', async (req,res) => {
    const { id } = req.params
    const result = await Cereal.findByIdAndUpdate(id, req.body)

    return res.status(200).send({message: 'was updated'})

})

//delete one cereal
router.delete('/:id', async (req,res) => {
    const { id } = req.params
    const cereal = await Cereal.findByIdAndDelete(id)    

    return res.status(200).send({message: 'cereal was deleted'})
})



export default router