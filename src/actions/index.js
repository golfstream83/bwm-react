import axios from 'axios';
import {
    FETCH_RENTALS_SUCCESS,
    FETCH_RENTAL_BY_ID_SUCCESS,
    FETCH_RENTAL_BY_ID_INIT
} from "./types";

const fetchRentalByIdInit = () => {
    return {
        type: FETCH_RENTAL_BY_ID_INIT
    }
};

const fetchRentalByIdSuccess = (rental) => {
    return {
        type: FETCH_RENTAL_BY_ID_SUCCESS,
        rental
    }
};

const fetchRentalSuccess = (rentals) => {
    return {
        type: FETCH_RENTALS_SUCCESS,
        rentals
    }
};

export const fetchRentals = () => {
    return dispatch => {
        axios.get('/api/v1/rentals')
            .then(res => res.data)
            .then(rentals => dispatch(fetchRentalSuccess(rentals)))
    };
};

export const fetchRentalById = (rentalId) => {
    return function(dispatch) {
        dispatch(fetchRentalByIdInit());
        axios.get(`/api/v1/rentals/${rentalId}`)
            .then(res => res.data)
            .then(rental => dispatch(fetchRentalByIdSuccess(rental)))
    };
};