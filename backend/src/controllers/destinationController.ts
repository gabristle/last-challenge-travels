import { Request, Response } from 'express'
import Destination from '../models/destination'

export const DestinationController = {
    async add(req: Request, res: Response): Promise<void> {
        try{
            const { name, travelers } = req.body
            const destination = await Destination.create({ name, travelers })
            res.status(200).json(destination)
        }catch(error){
            res.status(400).json({ message: error })
        }
    },

    async delete(req: Request, res: Response): Promise<void> {
        try{
            const destinationId = parseInt(req.params.id, 10)
            const destination = await Destination.findByPk(destinationId)
            if(destination) {
                await Destination.destroy({where: {id: destinationId}})
                res.status(200).json({ message: 'Destination deleted with success!' })
            }
            res.status(400).json({ message: 'Destination not found' })
        }catch(error){
            res.status(400).json({ message: error })
        } 
    }
}