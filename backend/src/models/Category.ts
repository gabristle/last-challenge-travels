import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/db-config'
import TourCategory from './TourCategory';
import Tour from './Tour';

class Category extends Model {
  declare id: number;
  name!: string
}
  
Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { 
        tableName: 'Category',
        sequelize },
)

Category.belongsToMany(Tour, { through: TourCategory, foreignKey: 'categoryId'})
Tour.belongsToMany(Category, { through: TourCategory, foreignKey: 'tourId'})

export default Category