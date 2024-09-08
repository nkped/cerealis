import express from 'express';
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose';
import cerealRoutes from './routes/cerealRoutes.js';
import cors from 'cors';

//server-instance
const app = express();

//middleware
app.use(express.json())
//option 1: allow all origing with default of cors(*)
app.use(cors())
//option 2: controlled access with custom cors obj
/* app.use(cors({
    origin: 'localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Conten-Type']
})) */

//base-path for ceral routes is '/cereals'
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















