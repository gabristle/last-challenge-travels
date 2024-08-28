import express from 'express'
import { tourController } from '../controllers/tourController'

const router = express.Router()

router.get('/:page/:limit', tourController.list)

router.get('/popular', tourController.listPopular)

router.get('/:id', tourController.listById)

router.post('/', tourController.add)

router.delete('/:id', tourController.delete)

export default router