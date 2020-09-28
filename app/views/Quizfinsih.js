import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const Quizfinsh = (props) => {
    const score = props.route.params.score;
    const totalAnswered = props.route.params.questionAnswered;
    const incorrect = props.route.params.incorrect
    return (
        <View style={styles.container}>
           <View style={styles.scoreContainer}>
            <Text style={styles.title}>Score Card</Text>
           <Text style={styles.text}>Total Score is: {score}</Text>
            <Text style={styles.text}>Total Answered: {totalAnswered}</Text>
            <Text style={styles.text}>Total Incorrect: {incorrect}</Text>
            <Text style={styles.thankyou}>Thank You</Text>
            <Button  title="Back to home" color="#434343" onPress={()=>props.navigation.navigate('Home')}/>
            
           </View>
        </View>
    )
}
export default Quizfinsh;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        textAlign:'center'
    },
    scoreContainer:{
        marginTop:10,
        padding:20
        
    },
    title:{
        marginBottom:20,
        fontSize:25,
        fontWeight:'bold',
        textDecorationLine:'underline'
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    }, 
    thankyou:{
        marginTop:45,
        fontSize:30,
    }
})