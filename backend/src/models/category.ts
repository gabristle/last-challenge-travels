import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/db-config'
import Tour from './tour';

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

Category.belongsToMany(Tour, { through: 'PostCategory', as: 'posts', foreignKey: 'categoryId'});

export default Category