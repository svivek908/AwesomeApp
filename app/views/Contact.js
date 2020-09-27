
import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Header from '../sections/Header';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            name: '',
            email: ''
        }
    }

    clearFileds = () => this.setState({ msg: '', name: '', email: '' })
    sendMessage = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.state.name){
            Alert.alert('Please Enter name');
        }
        else if(!this.state.msg){
            Alert.alert('Please Enter message')
        }
        else if (reg.test(this.state.email) === false) {
            Alert.alert('Enter right Email')
             
        }
        else{
            Alert.alert(`Name: ${this.state.name} and message ${this.state.msg} and ${this.state.email}`);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header message='please login' />
                <Text style={styles.header}>Contact Us</Text>

                <TextInput
                    placeholder={'Enter Name'}
                    style={styles.Input}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name} />
                {/* <Text>Name</Text> */}
                <TextInput
                    placeholder={'Enter Message'}
                    style={styles.multiInput}
                    onChangeText={(text) => this.setState({ msg: text })}
                    multiline={true}
                    numberOfLines={3}
                    value={this.state.msg} />
                {/* <Text>Message</Text> */}
                <TextInput
                    placeholder={'Enter Email'}
                    style={styles.Input}
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email} />
                {/* <Text>Email</Text> */}
                {/* <TouchableHighlight onPress={this.sendMessage}>
                    <Text style={styles.buttons}>Send Message</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.clearFileds}>
                    <Text style={styles.buttons}>Reset Form</Text>
                </TouchableHighlight> */}

                <View style={{ flexDirection: 'row' }}>
                    <Button
                        title={'Send Message'}
                        style={styles.buttons}
                        onPress={this.sendMessage}
                        color="#434343"
                    />
                    <Text style={{ marginLeft: 5 }}></Text>
                    <Button
                        title={'Reset Form'}
                        style={styles.buttons2}
                        onPress={this.clearFileds}
                        color="#434343"
                    />
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '50%',
    },
    header: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: '20%',


    },
    Input: {
        width: 300,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: '#5FD202',
        marginBottom: 15,
    },
    multiInput: {
        width: 300,
        height: 60,
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
       
  },
})