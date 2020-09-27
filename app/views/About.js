import React from 'react';
import {StyleSheet, Text, ScrollView, Image} from 'react-native';

const AboutProtonsHub = `We are a team of expert developers and designers based out of the cultural &amp; food capital of India, Indore. We are a versatile team that takes works on everything from design to development, from web development to A.I &amp; Blockchain. We are fuelled by passion and a desire to deliver 110% every time`
const WhatProtonsHubdo = `We specialize in the process of developing for the end user. Whether that's a website, a mobile app, a hybrid or pretty much anything else. We have an integrated design &amp; development team to take care of your frontend and backend requirements and meet your needs no matter what they are. `
const About=()=> {
    return (
        <ScrollView style={styles.container}>
            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', margin:10}}>About Us</Text>
            <Image style={styles.pics} source = {require('../sections/img/about.png')}/>
            <Text style={styles.aboutTitle}>Who we are</Text>
            <Text style={styles.aboutText}>{AboutProtonsHub}</Text>

            <Image style={styles.pics} source = {require('../sections/img/aboutus.jpg')}/>
            <Text style={styles.aboutTitle}>What we do</Text>
            <Text style={styles.aboutText}>{WhatProtonsHubdo}</Text>
        </ScrollView>
    )
}
export default About;
const styles = StyleSheet.create({
    container:{
        paddingTop:1,
        paddingBottom:20,
        backgroundColor:'#ffffff'
        
    },
    pics:{
        height:300
    },
    aboutTitle:{
        paddingTop:10,
        textAlign:'center',
        fontWeight:'bold',
        textDecorationLine:'underline'
    },
    aboutText:{
        textAlign:'center',
        paddingBottom:20,
        margin:3
    }
})