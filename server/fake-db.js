const Rental = require('./models/rental');
const User = require('./models/user');

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

        this.users = [{
            username: "Test User",
            email: "test@gmail.com",
            password: "testtest"
        }, {
            username: "Test User 99",
            email: "test99@gmail.com",
            password: "testtest99"
        }]
    }

    async cleanDb() {
        await User.remove({});
        await Rental.remove();
    }

    pushDataToDb() {
        const user = new User(this.users[0]);
        const user2 = new User(this.users[1]);

        this.rentals.forEach((rental) => {
            const newRental = new Rental(rental);
            newRental.user = user;
            user.rentals.push(newRental);

            newRental.save();
        });

        user.save();
        user2.save();
    }

    async seedDb() {
        await this.cleanDb();
        this.pushDataToDb();
    }
}

module.exports = FakeDb;