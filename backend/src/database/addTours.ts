import Tour from '../models/Tour'
import sequelize from './db-config'

const addTour = async() => {
    try {
        await sequelize.sync()
        
        await Tour.bulkCreate([
            { name: `Dracula's Castle`, city: 'Bran', start_date:'', end_date:'', averageGrade: 0, duration: 2, costPerPerson: 200, categoryId: 1, destinationId: 4 },
            { name: `Salem Witch Museum`, city: 'Salem', start_date:'', end_date:'', averageGrade: 0, duration: 1, costPerPerson: 120, categoryId: 8, destinationId: 9 },
            { name: `Catacombs of Paris`, city: 'Paris', start_date:'', end_date:'', averageGrade: 0, duration: 2, costPerPerson: 250, categoryId: 8, destinationId: 2 },
            { name: `Alcatraz Island`, city: 'San Francisco', start_date: '', end_date: '', averageGrade: 0, duration: 1, costPerPerson: '280', categoryId: 1, destinationId: 9 },
            { name: `Cologne Cathedral`, city: 'Cologne', start_date:'', end_date:'', averageGrade: 0, duration: 1, costPerPerson: 100, categoryId: 4, destinationId: 1 },
            { name: `Poveglia Island`, city: 'Venice', start_date: '', end_date: '', averageGrade: 0, duration: 3, costPerPerson: '600', categoryId: 4, destinationId: 3 },
            { name: `Barbacena Psychiatric Hospital`, city: 'Barbacena', start_date: '', end_date: '', averageGrade: 0, duration: 2, costPerPerson: '120', categoryId: 4, destinationId: 12 },
            { name: `Hiking the Devil's Kettle`, city: 'Minnesota', start_date:'', end_date:'', averageGrade: 0, duration: 2, costPerPerson: 160, categoryId: 6, destinationId: 9 },
            { name: `Chuck E. Cheese`, city: 'Colorado', start_date:'', end_date:'', averageGrade: 0, duration: 2, costPerPerson: 100, categoryId: 5, destinationId: 9 },
            { name: `Glasnevin Cemetery`, city: 'Dublin', start_date:'', end_date:'', averageGrade: 0, duration: 1, costPerPerson: 80, categoryId: 4, destinationId: 4 },
            { name: `Milan Cathedral`, city: 'Milan', start_date:'', end_date:'', averageGrade: 0, duration: 1, costPerPerson: 100, categoryId: 4, destinationId: 3 },
            { name: `Dans Le Noir`, city: 'Paris', start_date:'', end_date:'', averageGrade: 0, duration: 1, costPerPerson: 280, categoryId: 5, destinationId: 2 },
            { name: `The Witch Village`, city: 'Salem', start_date:'', end_date:'', averageGrade: 0, duration: 3, costPerPerson: 120, categoryId: 5, destinationId: 9 },
            { name: 'The Haunted Honeymoon Hotel', city: 'New Orleans', start_date:'', end_date:'', averageGrade: 0, duration: 2, costPerPerson: 160, categoryId: 7, destinationId: 9 },
            { name: 'Ghost Ship Tour in Stockholm', city: 'Stockholm', start_date:'', end_date:'', averageGrade: 0, duration: 2, costPerPerson: 160, categoryId: 3, destinationId: 7 },
            { name: 'Land of the Thunder Dragon', city: 'Thimphu', start_date:'', end_date:'', averageGrade: 0, duration: 2, costPerPerson: 160, categoryId: 1, destinationId: 8 },
            { name: 'Playa de los Muertos', city: 'Colima', start_date:'', end_date:'', averageGrade: 0, duration: 5, costPerPerson: 200, categoryId: 2, destinationId: 11},
            { name: 'The Black Sand Beach', city: 'Reykjavik', start_date:'', end_date:'', averageGrade: 0, duration: 3, costPerPerson: 250, categoryId: 2, destinationId: 10 },
            { name: 'Catacombs of Kom El Shoqafa', city: 'Alexandria', start_date:'', end_date:'', averageGrade: 0, duration: 5, costPerPerson: 250, categoryId: 2, destinationId: 5 },
            { name: 'Mummification Museum', city: 'Luxor', start_date:'', end_date:'', averageGrade: 0, duration: 5, costPerPerson: 250, categoryId: 2, destinationId: 5 },
            { name: `Neuschwanstein Castle`, city: 'Hohenschwangau', start_date: '', end_date: '', averageGrade: 0, duration: 2, costPerPerson: '180', categoryId: 1, destinationId: 1 },
            { name: `Mont Saint-Michel`, city: 'Normandy', start_date: '', end_date: '', averageGrade: 0, duration: 3, costPerPerson: '300', categoryId: 4, destinationId: 2 },
            { name: `Vasa Museum`, city: 'Stockholm', start_date: '', end_date: '', averageGrade: 0, duration: 1, costPerPerson: '160', categoryId: 8, destinationId: 7 },
            { name: `Tiger's Nest Monastery`, city: 'Paro', start_date: '', end_date: '', averageGrade: 0, duration: 3, costPerPerson: '280', categoryId: 4, destinationId: 8 },
            { name: `Transylvania Gothic Tour`, city: 'Brasov', start_date: '', end_date: '', averageGrade: 0, duration: 2, costPerPerson: '300', categoryId: 4, destinationId: 4},
            { name: `Winchester Mistery House`, city: 'Califórnia', start_date: '', end_date: '', averageGrade: 0, duration: 5, costPerPerson: '540', categoryId: 8, destinationId: 9 },
            { name: `The Black Castle`, city: 'Gothenburg', start_date: '', end_date: '', averageGrade: 0, duration: 1, costPerPerson: '200', categoryId: 4, destinationId: 7},
            { name: `The Island of the Dolls`, city: 'Xochimilco', start_date: '', end_date: '', averageGrade: 0, duration: 2, costPerPerson: '400', categoryId: 1, destinationId: 11},
            { name: `Ca'Dario`, city: 'Venice', start_date: '', end_date: '', averageGrade: 0, duration: 3, costPerPerson: '400', categoryId: 4, destinationId: 3},
            { name: `Passagem Mine`, city: 'Mariana', start_date: '', end_date: '', averageGrade: 0, duration: 2, costPerPerson: '400', categoryId: 1, destinationId: 12},
            { name: `Hell Fire Club`, city: 'Dublin', start_date: '', end_date: '', averageGrade: 0, duration: 2, costPerPerson: '400', categoryId: 4, destinationId: 4},
            { name: `The Beatles Story`, city: 'Liverpool', start_date: '', end_date: '', averageGrade: 0, duration: 2, costPerPerson: '400', categoryId: 8, destinationId: 6},
            { name: `British Music Experience`, city: 'Liverpool', start_date: '', end_date: '', averageGrade: 0, duration: 2, costPerPerson: '400', categoryId: 4, destinationId: 6},
            { name: `Amsterdam Canal`, city: 'Amsterdam', start_date: '', end_date: '', averageGrade: 0, duration: 2, costPerPerson: '400', categoryId: 3, destinationId: 13},
            { name: `Old Salem Jail`, city: 'Salem', start_date:'', end_date:'', averageGrade: 0, duration: 2, costPerPerson: 350, categoryId: 8, destinationId: 9 },
        ])
    }catch(error){
        console.error(error)
    }
}

export default addTour()