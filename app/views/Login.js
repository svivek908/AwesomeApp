import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, Image, AsyncStorage } from 'react-native';


export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      loggedIN:''
    };
  }
  
  onLogin() {
    const { username, password } = this.state;
     
    if(!this.state.username){
        Alert.alert('Enter userName');
    }
    else if(!this.state.password){
        Alert.alert('Enter Password');
    }

    else{
 
          AsyncStorage.getItem(this.state.username, (err, result)=>{
              if(result==password){
                AsyncStorage.setItem('username', username);
                this.props.navigation.navigate('Home')
                Alert.alert('Loggedin Successfully')
              }
              else{
                Alert.alert('Invalid Credentials')
              }
          })
           
        
           
         
 
         
    }
  }
  cancelLogin = () => {
            Alert.alert('Logged in Cancel');
            this.props.navigation.navigate('Home');
        }
    

  render() {
    return (
      <View style={styles.container}>
          
          <Text style={{textAlign:'center', fontWeight:'bold', marginBottom:'10%'}}>Login</Text>
          <Image style={styles.logo} source={require('../sections/img/protonshub-squarelogo.png')}/>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <View style={{flexDirection:'row'}}>
        <Button
          title={'Login'}
          style={styles.buttons}
          onPress={this.onLogin.bind(this)}
          color="#434343"
        />
        <Text style={{marginLeft:5}}></Text>
        <Button
          title={'Cancel'}
          style={styles.buttons2}
          onPress={this.cancelLogin}
          color="#434343"
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
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
     
},
  logo:{
      height:110,
      borderRadius:5,
      marginBottom:'8%'
  }
});

// import React from 'react'
// import { Component } from 'react';
// import { StyleSheet, View, Text, Alert, TextInput, AsyncStorage, TouchableHighlight } from 'react-native';
// export default class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: ''
//         }
//     }

//     cancelLogin = () => {
//         Alert.alert('Logged in Cancel');
//         this.props.navigation.navigate('Home');
//     }

//     loginUser = () => {
//         //first check the null value & show alert
//         if (!this.state.username) {
//             Alert.alert('Enter UserName');
//         }
//         else if (!this.state.password) {
//             Alert.alert('Enter Password')
//         }
//         else{
//             this.props.navigation.navigate('Home');
//         }

         
//         //check user Already loggedIn or not
//         else {
//             AsyncStorage.getItem('userLoggedIn', (err, result) => {
//                 if (result !== 'none') {
//                     Alert.alert('Some One Already LoggedIn');
//                     this.props.navigation.navigate('Home');
//                 }

//                 else {
//                     AsyncStorage.getItem(this.state.username, (err, result) => {
//                         if (result !== null) {
//                             if (result !== this.state.password) {
//                                 Alert.alert('Password Incorrect');
//                             }
//                             else {
//                                 AsyncStorage.setItem(this.state.username, (err, result) => {
//                                     Alert.alert(`${this.state.username} LoggedIn`);
//                                     this.props.navigation.navigate('Home')
//                                 })
//                             }
//                         }
//                         else {
//                             Alert.alert(`No account for  ${this.state.username}`)
//                         }
//                     })
//                 }
//             })
//         }



//     }
//     render() {
//         return (
//             <View style={styles.container}>
                  
//                 <Text style={styles.header}>Login </Text>
//                 <Text style={{fontSize:20, fontWeight:'bold', color:'#5CD200'}}>Login into Protonshub technologies</Text>
//                 <TextInput
//                     placeholder='Enter UserName'
//                     style={styles.Input}
//                     onChangeText={(text) => this.setState({ username: text })}
//                     value={this.state.username} />

                 

//                 <TextInput
//                     placeholder='Enter Password'
//                      secureTextEntry={true}                 
//                     style={styles.Input}
//                     onChangeText={(text) => this.setState({ password: text })}
//                     value={this.state.password} />

                

//                 <TouchableHighlight onPress={this.loginUser}>
//                     <Text style={styles.buttons}>Login</Text>
//                 </TouchableHighlight>

//                 <TouchableHighlight onPress={this.cancelLogin}>
//                     <Text style={styles.buttons}>Cancel</Text>
//                 </TouchableHighlight>
//             </View>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         flexDirection:'column',
//         marginBottom:'40%'
//     },
//     header: {
//         flex: 1,
//         fontSize: 16,
//         fontWeight: 'bold'

//     },
//     Input: {
//         flex: 1,
//         width: '80%',
//         padding: 3,
//         borderBottomWidth:1,
//         borderBottomColor:'#C59015'
//     },
     
//     buttons: {
//         marginTop: 5,
//         fontSize: 16
//     },
//     lable:{
//         paddingBottom:5
//     }})