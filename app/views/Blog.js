// import React,{Component} from 'react';
// import { View, Text } from 'react-native';
// export default class Blog extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             blogLoaded:false
//         }
//     }
//     componentDidMount(){
//         this.CallBlogApi();
//     }
//     CallBlogApi = ()=>{
//         fetch('https://public-api.wordpress.com/rest/v1.1/sites/myglobomantics.wordpress.com/posts')
//         .then((response)=>{response.json()})
//         .then((responseJson)=>{
//             this.setState({
//                 blogLoaded:true,
//                 blogList:Array.from(responseJson.posts)
//             });
//         })
//         .catch((error)=>{
//             console.log(error);
//         }

//         )
//     }
//     render() {
//         return (
//             <View><Text>i am Blog Component</Text></View>
//         );
//     }
// }

import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
 
const htmlContent = `
    <h1 style="color:#434343; text-align:center">BLOGS</h1>
    <h2 style="color:#D39C24; text-align:center">PUBLIC BLOGS</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <p style="text-align:center">Look at how happy this native cat is</p>
    <img src="https://i.imgur.com/BX12lTK.jpg" />
   
    <p style="text-align:center">Look at how happy this native cat is</p>
    <img src="https://www.sportindustry.biz/sites/default/files/images/news/ipl-fin-al-all-sizea-press%20copy.jpg" />
    <p style="text-align:center">IPL 2020</p>
    
    
    
`;
 
export default class Blog extends Component {
    render () {
        return (
            <ScrollView style={{ flex: 1 }}>
                <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
            </ScrollView>
        );
    }
}

 