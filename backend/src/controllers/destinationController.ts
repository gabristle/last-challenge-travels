import { Request, Response } from 'express'
import Destination from '../models/Destination'

export const destinationController = {
    async list(req: Request, res: Response): Promise<void> {
        try{
            const destinations = await Destination.findAll()
            res.status(200).json(destinations)
        }catch(error){
            res.status(400).json({ message: error })
        }
    },

    async add(req: Request, res: Response): Promise<void> {
        try{
            const { name, travelers } = req.body
            const destination = await Destination.create({ name, travelers })
            res.status(200).json(destination)
        }catch(error){
            res.status(400).json({ message: error })
        }
    },

    async delete(req: Request, res: Response): Promise<Response> {
        try{
            const destinationId = parseInt(req.params.id, 10)
            const destination = await Destination.destroy({where: {id: destinationId}})
            if(destination) {
                return res.status(200).json({ message: 'Destination deleted with success!' })
            }
            return res.status(400).json({ message: 'Destination not found!' })
        }catch(error){
            return res.status(400).json({ message: error })
        } 
    }
}