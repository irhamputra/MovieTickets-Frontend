import React, { Component } from 'react';
import CustomComponents from 'react-native-deprecated-custom-components';
import Movies from './Movies';

const RouteMapper = (route, navigator) => {
    if (route.name === 'movies'){
        return <Movies navigator={navigator}/>
    }
};

export default class App extends Component {
    render() {
        return (
            <CustomComponents.Navigator
                // Default to movies route
                initialRoute={{ name: 'movies' }}
                // Use FloatFromBottom transition between screens
                configureScene={(route, routeStack) => CustomComponents.Navigator.SceneConfigs.FloatFromBottom}
                // Pass a route mapper functions
                renderScene={RouteMapper}
            />
        )
    }
}
