import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/db-config'
import Category from './Category'
import Review from './Review'
import Destination from './Destination'

class Tour extends Model {
  declare id: number
  name!: string
  city!: string
  start_date!: string
  end_date!: string
  averageGrade!: number
  duration!: number
  costPerPerson!: number
  declare Reviews?: Review[]
  declare Category?: Category
  declare Destination?: Destination
}
  
Tour.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      start_date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      end_date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      averageGrade: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      costPerPerson: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { 
      modelName: 'Tour',
      sequelize 
    },
);

Tour.belongsTo(Category, { foreignKey: 'categoryId'})
Category.hasMany(Tour, { foreignKey: 'categoryId'})

Review.belongsTo(Tour, { foreignKey: 'tourId'})
Tour.hasMany(Review, { foreignKey: 'tourId'})

Tour.belongsTo(Destination, { foreignKey: 'destinationId', constraints: true})
Destination.hasMany(Tour, { foreignKey: 'destinationId', constraints: true})

export default Tour