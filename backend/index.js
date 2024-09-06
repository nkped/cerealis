import express from 'express';
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose';
import cerealRoutes from './routes/cerealRoutes.js';

//server-instance
const app = express();

//middleware
app.use(express.json())
app.use('/cereals', cerealRoutes)

//home page-route
app.get('/', (req, res) => {
    console.log(req)
    return res.status(200).send('Wellcome to my mern ap')
})


//Connect to db and spin up server
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















