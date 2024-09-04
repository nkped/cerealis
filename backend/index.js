import express from 'express';
import { PORT, mongoDBURL } from './config.js'

const app = express();

app.get('/', (request, reponse) => {
    console.log(request)
    return reponse.status(234).send('Wellcome to my mern app')
})


app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})