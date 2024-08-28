import Category from '../models/Category'
import Review from '../models/Review'
import Tour from '../models/Tour'
import { Request, Response } from 'express'

export const tourController = {
    async list(req: Request, res: Response): Promise<void> {
        try{
            const page = parseInt(req.params.page) || 1
            const limit = parseInt(req.params.limit) || 10
            const offset = (page-1) * limit
            const tours = await Tour.findAll({
                limit: limit,
                offset: offset
            })

            const count = await Tour.count()

            res.status(200).json({tours, count})
        } catch(error) {
            res.status(400).json({ message: error})
        }
    },

    async add(req: Request, res: Response): Promise<Response> {
        try{
            const { name, country, city, start_date, end_date, duration, costPerPerson, categoryId } = req.body
            const category = await Category.findByPk(categoryId)
            if(!category) {
                return res.status(400).json({message: 'Category not found!'})
            }
            const tour = await Tour.create({ name, country, city, start_date, end_date, duration, costPerPerson, averageGrade : 0, categoryId})
            return res.status(200).json(tour)
        } catch(error) {
            return res.status(400).json({ message: error})
        }
    },

    async listById(req: Request, res: Response): Promise<Response> {
        try {
            const tourId = parseInt(req.params.id, 10)
            const tour = await Tour.findByPk(tourId, {
                include: [Review]
            })
            if(tour) {
                return res.status(200).json(tour)
            }
            return res.status(400).json({ message: 'Tour not found'})
        } catch(error) {
            return res.status(400).json({ message: error})
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