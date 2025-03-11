import express from 'express'
import router from '../routes/apiRoutes.js'

export const app = express()

app.use(router)

