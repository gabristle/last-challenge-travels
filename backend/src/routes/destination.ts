import express from 'express'
import { destinationController } from '../controllers/destinationController'

const router = express.Router()

router.get('/:id', destinationController.listById)

router.get('/', destinationController.list)

router.post('/', destinationController.add)

router.delete('/:id', destinationController.delete)

export default router