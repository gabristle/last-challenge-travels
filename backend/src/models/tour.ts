import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/db-config'

class Tour extends Model {
  declare id: number
  name!: string
  country!: string
  city!: string
  start_date!: string
  end_date!: string
  averageGrade!: number
  duration!: number
  costPerPerson!: number
}
  
Tour.init(
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
      country: {
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
        type: DataTypes.NUMBER,
        allowNull: false
      },
      duration: {
        type: DataTypes.NUMBER,
        allowNull: false
      },
      costPerPerson: {
        type: DataTypes.NUMBER,
        allowNull: true
      }
    },
    { 
      tableName: 'Tour',
      sequelize 
    },
);

export default Tour
