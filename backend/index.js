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

app.post('/cereals', async (req, res) => {

    try {
        if (
            !req.body.title || 
            !req.body.publishYear
        ) {
            return res.status(400).send({message: 'please send all required fields'})
        }
        const newCereal = {
            title: req.body.title,
            publishYear: req.body.publishYear
        }

        const cereal = await Cereal(newCereal) 
        
        return res.status(201).send(cereal)

    } catch (err) {
        console.error(err)
        res.status(500).send({message: err.message})        
    }


    res.send('got a post req...')
    return res.status(200).send('Wellcome to my mern app')
})


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















