import express from 'express'
import { tourRatingController } from '../controllers/ratingController'
const router = express.Router()

router.get('/:id', tourRatingController.getTourWithAverages)

export default router