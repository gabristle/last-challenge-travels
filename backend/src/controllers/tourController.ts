import Category from '../models/Category'
import Tour from '../models/Tour'
import { Request, Response } from 'express'

export const tourController = {
    async list(req: Request, res: Response): Promise<void> {
        try{
            const tours = await Tour.findAll()
            res.status(200).json(tours)
        } catch(error) {
            res.status(400).json({ message: error})
        }
    },

    async add(req: Request, res: Response): Promise<void> {
        try{
            const { name, country, city, start_date, end_date, duration, costPerPerson, categoryId } = req.body
            const tour = await Tour.create({ name, country, city, start_date, end_date, duration, costPerPerson, averageGrade : null })
            if(categoryId && categoryId.length > 0){
                
            }

            const createdTour = await Tour.findByPk(tour.id, {
                include: Category
            })
            res.status(200).json(createdTour)
        } catch(error) {
            res.status(400).json({ message: error})
        }
    },

    async getTourById(req: Request, res: Response): Promise<void> {
        try {
            const tourId = parseInt(req.params.id, 10)
            const tour = await Tour.findByPk(tourId)
            if(tour) {
                res.status(200).json(tour)
            }
            res.status(400).json({ message: 'Tour not found'})
        } catch(error) {
            res.status(400).json({ message: error})
        }
    },

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const tourId = parseInt(req.params.id, 10)
            const deletedTour = await Tour.destroy({ where: {id: tourId}})
            if(deletedTour) {
                res.status(200).json({ message: 'Tour deleted with success!'})
            }
            res.status(400).json({ message: 'Tour not found'})
        } catch(error) {
            res.status(400).json({ message: error})
        }
    },
}