import { Category } from "./Category"
import { Destination } from "./Destination"
import { Review } from "./Review"

export interface Tour{
    id?: number
    name: string
    city: string
    start_date: string
    end_date: string
    averageGrade: number
    duration: number
    costPerPerson: number
    reviewCount: number
    reviews?: Review[]
    category?: Category
    Destination?: Destination
}