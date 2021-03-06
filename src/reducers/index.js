import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {rentalReducer, selectedRentalReducer} from './rental-reducer';
import {authReducer} from './auth-reducer';
import {userBookingsReducer} from './booking-reducer';
import {rentalMapReducer} from './map-reducer';

export const init = () => {
    const reducer = combineReducers({
        rentals: rentalReducer,
        rental: selectedRentalReducer,
        form: formReducer,
        auth: authReducer,
        userBookings: userBookingsReducer,
        map: rentalMapReducer
    });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

return createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
};