import React from 'react';
import {connect} from 'react-redux';
import {MapWithGeocode} from "../../map/GoogleMap";
import * as actions from '../../../actions';

class RentalMap extends React.Component {

    reloadMapFinish() {
        this.props.dispatch(actions.reloadMapFinish());
    }

    render() {
        const {location, map: {isReloading}} = this.props;

        return (
            <MapWithGeocode
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCcKI2M_JWPaHptSiiAsmtVemgvGv6SSM&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `337px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                location={location}
                isReloading={isReloading}
                mapLoaded={() => this.reloadMapFinish()}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        map: state.map
    }
}

export default connect(mapStateToProps)(RentalMap);