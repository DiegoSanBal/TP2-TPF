import express from "express"
import routes from "./routes/routes.js"
import connections from "./connections/connections.js"
import { SERVER_PORT } from "./config/config.js"
import User from "./models/User.js"
import Curso from "./models/Curso.js"
import { Sequelize } from "sequelize"


const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(routes)

// await User.sync({force:false})
await connections.sync({force:false})

app.listen(SERVER_PORT, ()=>{
     console.log(`🚀 ~ app.listen ~ ${SERVER_PORT}`)
})