import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/db-config'

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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        locations: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amenities: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        prices: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        food: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        room: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { 
        modelName: 'Review',
        sequelize },
);

export default Review
