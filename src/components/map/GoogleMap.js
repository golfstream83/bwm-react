import React from 'react';
import {Cacher} from '../../services/casher';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Circle,
    InfoWindow
} from "react-google-maps";

const MapComponent = props => {
    const {coordinates, isError, isLocationLoaded} = props;

    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={coordinates}
            center={coordinates}
            options={{disableDefaultUI: !!isError}}
        >
            {isLocationLoaded && !isError &&
                <Circle
                    center={coordinates}
                    radius={200}
                />
            }
            {isLocationLoaded && isError &&
                <InfoWindow position={coordinates} options={{maxWidth: 300}}>
                    <div>
                        Uuuups, there is problem to find location on the map, we are trying to resolve
                        problem as fast as possible. Contact host for additional information's if you are
                        still interested in booking this place. We are sorry for inconvenience.
                    </div>
                </InfoWindow>
            }
        </GoogleMap>
    )
};

const withGeocode = WrappedComponent => {
    return class extends React.Component {
        constructor() {
            super();

            this.cacher = new Cacher();
            this.state = {
                coordinates: {
                    lat: 0,
                    lng: 0
                },
                isError: false,
                isLocationLoaded: false
            }
        }

        componentWillMount() {
            this.getGeocodedLocation();
        }

        componentDidUpdate() {
            if (this.props.isReloading) {
                this.getGeocodedLocation();
            }
        }

        updateCoordinates(coordinates) {
            this.props.mapLoaded();
            this.setState({
                coordinates,
                isLocationLoaded: true
            });
        }

        geocodeLocation(location) {
            const geocoder = new window.google.maps.Geocoder();

            return new Promise((resolve, reject) => {
                geocoder.geocode({address: location}, (result, status) => {
                    if (status === 'OK') {
                        const geometry = result[0].geometry.location;
                        const coordinates = {lat: geometry.lat(), lng: geometry.lng()};

                        this.cacher.cacheValue(location, coordinates);
                        resolve(coordinates);
                    } else {
                        console.log('ERROR')
                    }
                });
            });
        }

        getGeocodedLocation() {
            const location = this.props.location;

            // if location is cached return cached values
            if (this.cacher.isValueCached(location)) {
                this.updateCoordinates(this.cacher.getCachedValue(location));
            // else geocode location
            } else {
                this.geocodeLocation(location).then(
                    (coordinates) => {
                        this.updateCoordinates(coordinates);
                    },
                    (error) => {
                        this.props.mapLoaded();
                        this.setState({
                            isError: true,
                            isLocationLoaded: true
                        });
                    }
                );
            }
        }

        render() {

            return (
                <WrappedComponent {...this.state} />
            );
        }
    }
};

export const MapWithGeocode = withScriptjs(withGoogleMap(withGeocode(MapComponent)));