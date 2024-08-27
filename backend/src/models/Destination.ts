import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/db-config'

class Destination extends Model {
  declare id: number;
  name!: string
  travelers!: number
}
  
Destination.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      travelers: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { 
      modelName: 'Destination',
      sequelize },
);

export default Destination
