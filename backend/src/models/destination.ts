import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/db-config'

class Destination extends Model {
    declare id: number;
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
        type: DataTypes.NUMBER,
        allowNull: false
      }
    },
    { 
        tableName: 'Destination',
        sequelize },
);

export default Destination