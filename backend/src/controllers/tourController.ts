import Category from '../models/Category'
import Destination from '../models/Destination'
import Review from '../models/Review'
import Tour from '../models/Tour'
import { Request, Response } from 'express'
import { Op, WhereOptions } from 'sequelize'
import { SearchParams } from '../interfaces/searchParams'

export const tourController = {
    async list(req: Request, res: Response): Promise<void> {
        try{
            const page = parseInt(req.params.page) || 1
            const limit = parseInt(req.params.limit) || 10
            const offset = (page-1) * limit
            const tours = await Tour.findAll({
                order: ['name'],
                limit: limit,
                offset: offset,
                include: [Review, Category, Destination]
            })
            const toursReviews = tours.map(tour => ({
                ...tour.toJSON(),
                reviewCount: tour.Reviews?.length || 0
            }))

            const count = await Tour.count()

            const totalPages = Math.ceil(count / limit)

            res.status(200).json({tours: toursReviews, count, totalPages})
        } catch(error) {
            res.status(400).json({ message: error})
        }
    },

    async listAll(req: Request, res: Response) {
        try{
            const allTours = await Tour.findAll({
                order: ['name']
            })
            res.status(200).json(allTours)
        }catch(error){
            res.status(400).json({ message: error})
        }
    },

    async listPopular(req: Request, res: Response): Promise<void> {
        try{
            const tours = await Tour.findAll({ where: {id: [1, 2, 3, 4, 5, 6, 7, 8]}, include: [Review, Category, Destination]})
            const toursReviews = tours.map(tour => ({
                ...tour.toJSON(),
                reviewCount: tour.Reviews?.length || 0
            }))
            res.status(200).json(toursReviews)
        }catch(error){
            res.status(400).json({message: error})
        }
    },

    async add(req: Request, res: Response): Promise<Response> {
        try{
            const { name, city, start_date, end_date, duration, costPerPerson, categoryId, destinationId } = req.body
            const category = await Category.findByPk(categoryId)
            const destination = await Category.findByPk(destinationId)
            if(!category) {
                return res.status(400).json({message: 'Category not found!'})
            }
            if(!destination) {
                return res.status(400).json({message: 'Destination not found!'})
            }
            const tour = await Tour.create({ name, city, start_date, end_date, duration, costPerPerson, averageGrade : 0, categoryId, destinationId})
            return res.status(200).json(tour)
        } catch(error) {
            return res.status(400).json({ message: error})
        }
    },

    async listById(req: Request, res: Response): Promise<Response> {
        try {
            const tourId = parseInt(req.params.id, 10)
            const tour = await Tour.findByPk(tourId, {
                include: [Review, Category, Destination]
            })
            if(tour) {
                return res.status(200).json(tour)
            }
            return res.status(400).json({ message: 'Tour not found'})
        } catch(error) {
            return res.status(400).json({ message: error})
        }
    },

    async findTours(req: Request, res: Response): Promise<Response> {
        try{
            const { name, categoriesId, maxCost, destinationsId, grades, sort } = req.query as SearchParams

            const filters: WhereOptions[] = []

            if(name){
                filters.push({name: {[Op.like]: `%${name}%`}})
            }

            if(categoriesId && categoriesId.length > 0) {
                filters.push({ categoryId: { [Op.in]: categoriesId } });
            }

            if(maxCost) {
                filters.push({costPerPerson: {[Op.lte]: maxCost}})
            }

            if(destinationsId && destinationsId.length > 0) {
                filters.push({destinationId: {[Op.like]: destinationsId}})
            }

            if(grades) {
                filters.push({averageGrade: {[Op.between]: [Number(grades), Number(grades)+0.9]}})
            }

            if(name || maxCost || categoriesId || destinationsId || grades){
                const whereFilters = filters.length > 0 ? { [Op.and]: filters } : {}

                const result = await Tour.findAll({
                    where: whereFilters,
                    include: [Review, Category, Destination], 
                })
                return res.status(200).json(result) 
            }
            const result = await Tour.findAll({ include: [Review, Category, Destination]})
            return res.status(200).json(result)
        }catch(error) {
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
