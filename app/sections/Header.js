import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, AsyncStorage, Alert } from 'react-native';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: false,
            loggedUser: false
        }

    }

componentDidMount(){
    AsyncStorage.getItem('userLoggedIn', (err, result)=>{
        if(result==='none'){
            console.log('NONE');
        }
        else if(result===null){
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result)=>{
                console.log('set user to NONE');
            })
        }
        else{
            this.setState({
                isLoggedin:true,
                loggedUser:result
            })
        }
    })
}

    toggleUser = () => {
        if (this.state.isLoggedin) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isLoggedin: false,
                    loggedUser: false
                });
                Alert.alert('User logged out');
            })
        }
        else{
            this.props.navigation.navigate('Login')
        }
    }
    render() {

        return (
            <View style={styles.headerStyle}>
                <Image style={styles.logoStyle} source={require('../sections/img/Logo.jpg')} />
                <Text style={styles.headerText} onPress={this.toggleUser}>{this.state.isLoggedin ?  this.state.loggedUser : this.props.message}</Text>

            </View>
        )

    }
}

export default Header;

const styles = StyleSheet.create({
    headerText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },
    headerStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: Platform.OS === 'android' ? '#4F4D50' : '#31e991',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000'
    },
    logoStyle: {
        flex: 1,
        margin: 5,
        width: undefined,
        height: undefined

    }
})