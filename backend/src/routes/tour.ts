import express from 'express'
import { tourController } from '../controllers/tourController'

const router = express.Router()

router.get('/', tourController.list)

router.get('/:id', tourController.getTourById)

router.post('/', tourController.add)

router.delete('/:id', tourController.delete)

export default router