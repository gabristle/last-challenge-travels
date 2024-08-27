import express from 'express'
import { categoryController } from '../controllers/categoryController'

const router = express.Router()

router.post('/', categoryController.add)

router.delete('/:id', categoryController.delete)

export default router