const Rental = require('./models/rental');

class FakeDb {

    constructor() {
        this.rentals = [
            {
                title: "Central Apartment",
                city: "New York",
                street: "Times Square",
                category: "apartment",
                image: "http://via.placeholder.com/350x250",
                bedrooms: 3,
                shared: true,
                description: "Very nice apartment",
                dailyRate: 34
            },
            {
                title: "Great Apartment",
                city: "San Francisco",
                street: "5 avenue",
                category: "condo",
                image: "http://via.placeholder.com/350x250",
                bedrooms: 4,
                shared: false,
                description: "Great apartment",
                dailyRate: 48
            }
        ];
    }

    async cleanDb() {
        await Rental.remove();
    }

    pushRentalsToDb() {
        this.rentals.forEach((rental) => {
            const newRental = new Rental(rental);

            newRental.save();
        })
    }

    seedDb() {
        this.cleanDb();
        this.pushRentalsToDb();
    }
}

module.exports = FakeDb;