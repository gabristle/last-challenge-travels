import sequelize from './db-config'
import Category from '../models/Category'
import Destination from '../models/Destination'

const addCategory = async() => {
    try {
        await sequelize.sync()

        await Category.bulkCreate([
            { name: 'Adventure'},
            { name: 'Beaches'},
            { name: 'Boat Tours'},
            { name: 'City Tours'},
            { name: 'Food'},
            { name: 'Hiking'},
            { name: 'Honeymoon'},
            { name: 'Museum Tours'}
        ])
    }catch(error){
        console.error(error)
    }
}

const addDestination = async() => {
    try {
        await sequelize.sync()

        await Destination.bulkCreate([
            { name: 'Germany', travelers: '299.976'},
            { name: 'France', travelers: '302.789'},
            { name: 'Italy', travelers: '358.906'},
            { name: 'Romania', travelers: '221.098'},
            { name: 'Egypt', travelers: '302.904'},
            { name: 'England', travelers: '205.908'},
            { name: 'Sweden', travelers: '297.122'},
            { name: 'Bhutan', travelers: '152.567'},
            { name: 'United States', travelers: '215.902'},
            { name: 'Iceland', travelers: '220.107'},
            { name: 'Mexico', travelers: '196.791'},
            { name: 'Brazil', travelers: '389.312'},
            { name: 'Netherlands', travelers: '208.998'}
        ])
    }catch(error){
        console.error(error)
    }
}



const addDatabase = () => {
    addCategory()
    addDestination()
}

export default addDatabase()