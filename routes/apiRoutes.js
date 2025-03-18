import express from 'express'
import ApiControllers from '../controllers/apiController.js'

const router = new express.Router()

router.get('/api?',ApiControllers.get)

router.post(`/api?`,ApiControllers.post)

export default router