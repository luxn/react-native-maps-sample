import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';

import MapView, { PROVIDER_DEFAULT, Region, Marker, LatLng } from 'react-native-maps';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';

import * as actions from './../store/actions';
import { SampleStore } from './../store/types';



const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

interface MapSceneProps {
    pois: Array<LatLng>
}

interface MapSceneDispatchers {
    loadPOIs: (bbox: Array<number>) => void
}

interface MapSceneState {
    latitude?: number
    longitude?: number
}

class MapScene extends React.Component<MapSceneProps & MapSceneDispatchers, MapSceneState> {

    mapRef: React.RefObject<MapView>
    constructor(props: MapSceneProps & MapSceneDispatchers) {
        super(props);
        this.state = {
            latitude: undefined,
            longitude: undefined            
        };

        this.mapRef = React.createRef();
    }

    getLocation() {
        Geolocation.getCurrentPosition( (info: GeolocationResponse) => {
            if (info.coords) {
                this.setState({ 
                    latitude: info.coords.latitude, 
                    longitude: info.coords.longitude,                  
                });
                this.mapRef.current?.setCamera({center: {longitude: info.coords.longitude, latitude: info.coords.latitude}, zoom: 13});
            } else {
                this.setState({ 
                    latitude: undefined, 
                    longitude: undefined,                    
                });
            }
        });
    }

    onRegionChangeComplete(region: Region) {


        this.mapRef.current?.getMapBoundaries().then(bounds => {
            const bbox = [
                bounds.southWest.longitude,
                bounds.southWest.latitude,
                bounds.northEast.longitude,
                bounds.northEast.latitude,
            ];
    
            this.props.loadPOIs(bbox);
    
        });
        
        
    }

    render() {

        const { pois } = this.props;

        const markers = pois.map(poi => <Marker key={Math.random()} coordinate={poi} />);


        return (
            <View style={styles.container}>                
                <MapView
                    ref={this.mapRef}
                    style={styles.map}
                    provider={PROVIDER_DEFAULT}
                    onRegionChangeComplete={(region) => this.onRegionChangeComplete(region)}
                    initialRegion={{latitude: 53.54058415860257, longitude: 9.964661803096533, latitudeDelta: 0.15, longitudeDelta: 0.15}}
                >
                    {markers}
                </MapView>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Button title="Get Location" onPress={() => this.getLocation()} />                   
                    <Text>Device Longitude: {this.state.longitude}</Text>
                    <Text>Device Latitude: {this.state.latitude}</Text>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state: SampleStore) {
    return {
        pois: state.pois,
    };
}

//function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
//   return bindActionCreators({
//        loadPOIs: actions.loadPOIs
//   }, dispatch);
//}


export default connect(mapStateToProps, { loadPOIs: actions.loadPOIs })(MapScene);