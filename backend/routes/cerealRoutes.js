import express from 'express'
import { Cereal } from '../models/ceralModel.js'

const router = express.Router()

//get all cereals
router.get('/', async (req, res) => {
    console.log('get all from db requested')

    const data = await Cereal.find({})

    return res.status(200).json(data)
})

//get cereal by id
router.get('/:id', async (req, res) => {
    console.log('get by id from db requested')

    const { id } = req.params

    const cereal = await Cereal.findById(id)

    return res.status(200).json(cereal)
})

//post one cereal
router.post('/', async (req, res) => {

    const { title } = req.body
    try {
        const cereal = await Cereal.create({ title })
        res.status(200).json(cereal)
    } catch (error) {
        res.status(400).json({error: error.message})
    }})

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