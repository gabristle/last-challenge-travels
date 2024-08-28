import Review from '../models/Review'
import { Request, Response } from 'express'
import Tour from '../models/Tour'

export const reviewController = {

    async add(req: Request, res: Response): Promise<Response> {
        try{
            const { tourId, name_user, email_user, services, locations, amenities, prices, food, room, message } = req.body
            const tour = await Tour.findByPk(tourId)
            const grade = (services + locations + amenities + prices + food + room)/6
            if(!tour){
                return res.status(400).json({ message: 'Tour not found!' })
            }
            const review = await Review.create({ tourId, name_user, email_user, services, locations, amenities, prices, food, room, message , averageGrade : grade})
        
            const reviews = await Review.findAll({ where: {tourId}})
            const totalReviews = reviews.length
            const totalAverage = reviews.reduce((sum, review) => {
                return sum + review.averageGrade;
            }, 0) / totalReviews;
            

            await Tour.update(
                { averageGrade: totalAverage},
                { where: {id: tourId}}
            )
            
            return res.status(200).json(review)

        } catch(error) {
            return res.status(400).json({ message: error })
        }
    },

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const reviewId = parseInt(req.params.id, 10)
            const review = await Review.destroy({where: {id: reviewId}})
            if(review) {
                return res.status(200).json({ message: 'Review deleted with success!'})
            }
            return res.status(400).json({ message: 'Review not found' })
        } catch(error: any) {
            return res.status(400).json({ message: error })
        }
    },
}
