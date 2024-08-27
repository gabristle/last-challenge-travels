import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/db-config'
import Tour from './tour';

class Review extends Model {
    declare id: number
    name_user!: string
    name_email!: string
    services!: number
    locations!: number
    amenities!: number
    prices!: number
    food!: number
    room!: number
    message!: string
}
  
Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        services: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        locations: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        amenities: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        prices: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        food: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        room: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { 
        tableName: 'Review',
        sequelize },
);

Review.belongsTo(Tour, { foreignKey: 'tourId' });

export default Review