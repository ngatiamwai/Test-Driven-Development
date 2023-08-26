import { json } from 'express'
import express from 'express'
import todoRouter from './Routes/todo.router.js'
const app = express()

app.use(json())

app.use('/', todoRouter)

//const port = 4700

app.listen(port, ()=>{
    //console.log(`Listening on port ${port}`)
    console.log(`Listening on port 4900`)
})

export default app
