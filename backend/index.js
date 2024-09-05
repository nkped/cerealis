import express from 'express';
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose';
import { Cereal } from './models/ceralModel.js';

const app = express();

app.use(express.json())


app.get('/', (req, res) => {
    console.log(req)
    return res.status(200).send('Wellcome to my mern ap')
})


app.get('/cereals', async (req, res) => {
    console.log('get all from db requested')

    const data = await Cereal.find({})

    return res.status(200).json(data)
})




app.post('/cereals', async (req, res) => {

    const { title } = req.body
    try {
        const cereal = await Cereal.create({ title })
        res.status(200).json(cereal)
    } catch (error) {
        res.status(400).json({error: error.message})
    }})



mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('connected to database')
     app.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`)
     })
}).catch((error) => {
    console.error(error)
})















