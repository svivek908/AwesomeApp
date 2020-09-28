
import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, Button, AsyncStorage, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../sections/Header';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: ''
        }
    }

    cancelRegister = () => {
        Alert.alert('Registration Cancelled')
        this.props.navigation.navigate('Home');
    }

    registerAccount = () => {
        if (!this.state.username) {
            Alert.alert('Please Enter username');
        }
        else if(!this.state.password){
            Alert.alert('Enter password')
        }
        else if(!this.state.passwordConfirm){
            Alert.alert('Enter Confirm password')
        }
        else if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert('password did not matched');
           
        }
        else {
            AsyncStorage.getItem(this.state.username, (err, result) => {
                if (result !== null) {
                    Alert.alert('user Already Exitst you can login directly');
                    this.props.navigation.navigate('Login');
                }

                else {
                    AsyncStorage.setItem(this.state.username, this.state.password, (err, result) => {
                        Alert.alert(`${this.state.username} account created`);
                        this.props.navigation.navigate('Home');
                    })
                }
            })
        }

    }

    render() {
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={styles.inner}>
                <Header message='please login' />
                 
                <Text style={styles.header}>Register Account</Text>

                <TextInput
                    placeholder="Enter UserName"
                    style={styles.Input}
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.state.username} />

                {/* <Text style={styles.lable}>UserName</Text> */}

                <TextInput
                    placeholder="Enter Password"
                     secureTextEntry={true} 
                    style={styles.Input}
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password} />

                {/* <Text style={styles.lable}>Password</Text> */}
                <TextInput
                    placeholder="Enter Confirm Password"
                    secureTextEntry={true}
                    style={styles.Input}
                    onChangeText={(text) => this.setState({ passwordConfirm: text })}
                    value={this.state.passwordConfirm} />
                {/* <Text style={styles.lable}>Confirm Password</Text> */}

                {/* <TouchableHighlight onPress={this.registerAccount}>
                    <Text style={styles.buttons}>Register</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelRegister}>
                    <Text style={styles.buttons}>Cancel</Text>
                </TouchableHighlight> */}

                    <View style={{ flexDirection: 'row' }}>
                    <Button
                        title={'Register'}
                        style={styles.buttons}
                        onPress={this.registerAccount}
                        color="#434343"
                    />
                    <Text style={{ marginLeft: 5 }}></Text>
                    <Button
                        title={'Cancel'}
                        style={styles.buttons2}
                        onPress={this.cancelRegister}
                        color="#434343"
                    />
                </View>
            </View>
            </KeyboardAvoidingView>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: '30%',
 
    },
    inner: {
         
        flex: 1,
         alignItems:'center',
         marginBottom:'20%'
      },
    header: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: '25%',

    },
    Input: {
        width: 300,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: '#5FD202',
        marginBottom: 15,
      },
     
      buttons2:{
        width:600,
        backgroundColor:'black',
        color:'#ffffff',
        marginLeft:5
    },
    buttons:{
      width:600,
      backgroundColor:'black',
      color:'#ffffff',
    }
     
})