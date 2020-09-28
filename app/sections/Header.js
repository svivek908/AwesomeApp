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
    this.getUserinfo();
}
getUserinfo = ()=>{
    AsyncStorage.getItem('username', (err, result)=>{
        console.log(`yes confirm`, result);
        if(result=='Ajay'){
            this.setState({
                isLoggedin:true,
                loggedUser:result
            })
        }
         
        else{
            console.log(`there is no user`,'none')
        }
    })
}
 

    toggleUser = () => {
        if (this.state.isLoggedin) {
           AsyncStorage.removeItem('username', (err, result)=>{
               console.log('yes i can to', result)
               if(result==undefined){
                   this.setState({
                       isLoggedin:false,
                       loggedUser:''
                   })
               }
           });

            }
            
        

          else{this.props.navigation.navigate('Login')}  
    
    }
    render() {

        return (
            <View style={styles.headerStyle}>
                 <Text style={styles.LogoTitle}>PROTONSHUB</Text>
                
                <Text style={styles.headerText} onPress={this.toggleUser}>{this.state.isLoggedin ? `Welcome ${this.state.loggedUser}` : this.props.message}</Text>
                
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

    },
    LogoTitle:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',
         textAlign:'center',
         marginLeft:3,
        textDecorationColor:'green',
        textShadowColor:'green',
    
    }
})