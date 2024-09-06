import express from 'express';
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose';
import cerealRoutes from './routes/cerealRoutes.js';

const app = express();

app.use(express.json())

//get home page
app.get('/', (req, res) => {
    console.log(req)
    return res.status(200).send('Wellcome to my mern ap')
})

app.use('/cereals', cerealRoutes)


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















