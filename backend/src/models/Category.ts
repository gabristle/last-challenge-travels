import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/db-config'
import Tour from './Tour';

class Category extends Model {
  declare id: number;
  name!: string
  declare Tours?: Tour[]
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
      modelName: 'Category',
      sequelize },
)

export default Category