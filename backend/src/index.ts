import express from "express";
import { routes } from './routes'
var cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen('8000',() => {
  console.log('Server runing at port 8000')
},)