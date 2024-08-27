import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/db-config'

class TourCategory extends Model {
    declare id: number
}

TourCategory.init (
    {
        tourId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Tours',
                key: 'id',
            },
            allowNull: false
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Categories',
                key: 'id',
            },
            allowNull:false
        }
    },
    { 
        tableName: 'TourCategory',
        sequelize 
    }
)

export default TourCategory