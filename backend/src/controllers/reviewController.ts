import Review from '../models/Review'
import { Request, Response } from 'express'
import Tour from '../models/Tour'

export const reviewController = {

    async add(req: Request, res: Response): Promise<void> {
        try{
            const { tourId, name_user, email_user, services, locations, amenities, prices, food, room, message } = req.body
            const tour = await Tour.findByPk(tourId)
            if(tour){
                const review = await Review.create({ tourId, name_user, email_user, services, locations, amenities, prices, food, room, message })
                res.status(200).json(review)
            }
            res.status(400).json({ message: 'Tour not found!' })
        } catch(error) {
            res.status(400).json({ message: error })
        }
    },

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const reviewId = parseInt(req.params.id, 10)
            const review = await Review.findByPk(reviewId)
            if(review) {
                await Review.destroy({where: {id: reviewId}})
                res.status(200).json({ message: 'Review deleted with success!'})
            }
            res.status(400).json({ message: 'Review not found' })
        } catch(error: any) {
            res.status(400).json({ message: error })
        }
    },
}
