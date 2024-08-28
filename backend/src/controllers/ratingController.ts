import { Request, Response } from 'express'
import Tour from '../models/Tour'
import Review from '../models/Review'

export const tourRatingController = {
    async getTourWithAverages(req: Request, res: Response): Promise<Response> {
        try {
          const tourId = parseInt(req.params.id, 10);
          const tour = await Tour.findByPk(tourId, {
            include: [Review]
          })
    
          if (!tour) {
            return res.status(404).json({ message: 'Tour not found' })
          }

          const reviews = tour.Reviews || []
          const totalReviews = reviews.length
    
          const averageService = totalReviews > 0 ? reviews.reduce((sum, r) => sum + r.services, 0) / totalReviews : 0
          const averageFood = totalReviews > 0 ? reviews.reduce((sum, r) => sum + r.food, 0) / totalReviews : 0
          const averageRoom = totalReviews > 0 ? reviews.reduce((sum, r) => sum + r.room, 0) / totalReviews : 0
          const averageLocations = totalReviews > 0 ? reviews.reduce((sum, r) => sum + r.locations, 0) / totalReviews : 0
          const averageAmenities = totalReviews > 0 ? reviews.reduce((sum, r) => sum + r.amenities, 0) / totalReviews : 0
    
          return res.status(200).json({
            ...tour.toJSON(),
            averageService,
            averageFood,
            averageRoom,
            averageLocations,
            averageAmenities
          })
        } catch (error) {
          return res.status(500).json({ message: error })
        }
    }
}