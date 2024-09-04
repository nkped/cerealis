import express from 'express';
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose';

const app = express();

app.get('/', (req, res) => {
    console.log(req)
    return res.status(200).send('Wellcome to my mern ap')
})  

app.post('/', (req, res) => {
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















