import express from 'express'
import { reviewController } from '../controllers/reviewController'

const router = express.Router()

router.post('/', reviewController.add)

router.delete('/:id', reviewController.delete)

export default router