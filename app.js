import './express/expressConfig.js'
import dotenv from "dotenv"
import { app } from './express/expressConfig.js'

dotenv.config()

app.listen(process.env.port,()=>{
    console.log(`serwer słucha na porcie ${process.env.port}`)
})

