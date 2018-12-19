import React from 'react';
import {RentalCard} from "./RentalCard";

export class RentalList extends React.Component {
    constructor() {
        super();

        this.state = {
            rentals: [1, 2, 3]
        };
    }

    renderRentals() {
        return this.state.rentals.map((rental, index) =>{
            return (
                <RentalCard key={index} colNum='col-md-3 col-xs-6' />
            )
        });
    }

    render() {
        return (
            <section id="rentalListing">
                <h1 className="page-title">Your Home All Around the World</h1>
                <div className="row">
                    {this.renderRentals()}
                </div>
            </section>
        )
    }
}