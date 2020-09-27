import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

class Hero extends Component {
    render() {
        return (
            <Image style={styles.heroImage} source={require('../sections/img/background.jpg')} />
        )
    }
}

export default Hero;
// css for Heor file
const styles = StyleSheet.create({
    heroImage: {
        width: undefined,
        height: undefined,
        flex: 8
    }

})