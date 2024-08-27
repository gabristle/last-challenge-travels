import { Request, Response } from 'express'
import Category from '../models/category'

export const categoryController = {

    async add(req: Request, res: Response): Promise<void> {
        try{
            const { name } = req.body
            const category = await Category.create({ name })
            res.status(200).json(category)
        } catch(error) {
            res.status(400).json({ message: error })
        }
    },

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const categoryId = req.params.id
            const category = await Category.findByPk(categoryId)
            if(category) {
                await Category.destroy({where: {id: categoryId}})
                res.status(200).json({ message: 'Category deleted with success!' })
            }
            res.status(400).json({ message: 'Category not found!' })
        } catch(error) {
            res.status(400).json({ message: error })
        }
    },
}