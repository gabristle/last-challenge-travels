import { Request, Response } from 'express'
import Category from '../models/Category'
import Tour from '../models/Tour'

export const categoryController = {
    async list(req: Request, res: Response): Promise<void> {
        try{
            const categories = await Category.findAll()
            res.status(200).json(categories)
        } catch(error) {
            res.status(400).json({ message: error })
        }
    },

    async details(req: Request, res: Response): Promise<void>{
        try{
            const categories = await Category.findAll({
                include: [{
                    model: Tour,
                    attributes: [
                        'id', 'name', 'costPerPerson'
                    ]
                }]
            })
            const categoriesDetails = categories.map(category => {
                const tourCosts = category.Tours ? category.Tours.map(tour => tour.costPerPerson) : []
                const cheapestCost = Math.min(...tourCosts)
                return {name: category.name, totalTours: category.Tours?.length, cheapestCost: cheapestCost}
            })
            res.status(200).json(categoriesDetails)
        }catch(error){
            res.status(400).json({ message: error})
        }   
    },

    async listById(req: Request, res: Response): Promise<Response>{
        try {
            const categoryId = parseInt(req.params.id, 10)
            const category = await Category.findByPk(categoryId, {
                include: [Tour]
            })
            if(category) {
                return res.status(200).json(category)
            }
            return res.status(400).json({message: 'Category not found!'})
        }catch(error){
            return res.status(400).json({message: error})
        }
    },

    async add(req: Request, res: Response): Promise<void> {
        try{
            const { name } = req.body
            const category = await Category.create({ name })
            res.status(200).json(category)
        } catch(error) {
            res.status(400).json({ message: error })
        }
    },

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const categoryId = req.params.id
            const category = await Category.destroy({where: {id: categoryId}})
            if(category) {
                return res.status(200).json({ message: 'Category deleted with success!' })
            }
            return res.status(400).json({ message: 'Category not found!' })
        } catch(error) {
            return res.status(400).json({ message: error })
        }
    },
}