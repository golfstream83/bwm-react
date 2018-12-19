import {FETCH_RENTALS, FETCH_RENTAL_BY_ID} from "./types";

const rentals = [
    {
        id: "1",
        title: "Central Apartment",
        city: "New York",
        street: "Times Square",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
    },
    {
        id: "2",
        title: "Central Apartment",
        city: "New York",
        street: "Times Square",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
    }
];

export const fetchRentals = () => {
    return {
        type: FETCH_RENTALS,
        rentals
    }
};

export const fetchRentalById = (rentalId) => {
    const rental = rentals.find((rental) => rental.id === rentalId);

    return {
        type: FETCH_RENTAL_BY_ID,
        rental
    }
};