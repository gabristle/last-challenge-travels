import Category from "./Category"
import Tour from "./Tour"
import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/db-config'

class TourCategory extends Model {
    declare id: number
}

TourCategory.init (
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    },
    { 
        tableName: 'TourCategory',
        sequelize 
    }
)

export default TourCategory