const Rental = require('./models/rental');

class FakeDb {

    constructor() {
        this.rentals = [
            {
                title: "Central Apartment",
                city: "New York",
                street: "Times Square",
                category: "apartment",
                image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
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
                image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
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