import express from 'express'
import { categoryController } from '../controllers/categoryController'

const router = express.Router()

router.get('/', categoryController.list)

router.get('/:id', categoryController.listById)

router.post('/', categoryController.add)

router.delete('/:id', categoryController.delete)

export default router