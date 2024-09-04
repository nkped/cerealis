import express from 'express';
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose';

const app = express();

app.get('/', (request, reponse) => {
    console.log(request)
    return reponse.status(234).send('Wellcome to my mern app')
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












