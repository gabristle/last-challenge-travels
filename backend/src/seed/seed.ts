import { QueryInterface, Sequelize } from 'sequelize'
import Tour from '../models/Tour'
import Destination from '../models/Destination'
import Category from '../models/Category'

function seed() {
    try {
    up: (queryInterface: QueryInterface, sequelize: Sequelize) =>  queryInterface.bulkInsert('Category',[
            { name: "Adventure" },
            { name: "Beaches" },
            { name: "Boat Tours"},
            { name: "City Tours" },
            { name: "Food" },
            { name: "Hiking" },
            { name: "Honeymoon" },
            { name: "Museum Tours" }
        ], {})
    }catch(error){
        console.error(error)
    }
}

seed()