import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions';

export class RentalDetail extends React.Component {

    componentWillMount() {
        const rentalId = this.props.match.params.id;

        this.props.dispatch(actions.fetchRentalById(rentalId));
    }

    render() {
        const rental = this.props.rental;

        if (rental.id) {
            return (
                <div>
                    <h1>I am rental detail component {rental.title}</h1>
                </div>
            );
        } else {
            return (
                <h1>Loading...</h1>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        rental: state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetail)