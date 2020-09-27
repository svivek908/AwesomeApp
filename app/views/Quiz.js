import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList,TouchableHighlight } from 'react-native';

import { QuizData } from '../data/QuizQuestions';

export default class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questLoaded: false,
            totalScore: 100,
            completedQuiz: false
        }
    }
    componentDidMount() {
        let numQuestions = Array.from(QuizData.questions).length
        this.setState({
            questionList: Array.from(QuizData.questions),
            questLoaded: true,
            numberofQuestions: numQuestions,
            incorrect: 0,
            questionAnswered: 0
        })
    }
    
    // updateScore = (penalty) => {
    //     let tempScore = this.state.totalScore;
    //     let missed = this.state.incorrect;
    //     let questionsTotal = this.state.numQuestions;
    //     let questionsDone = this.state.questionAnswered;
    //     let newScore = tempScore - penalty;
    //     let totalAnswered = questionsDone + 1;
    //     let totalMissed = penalty ? missed + 1 : missed;
    //     this.setState({
    //         totalScore: newScore,
    //         incorrect: totalMissed,
    //         questionAnswered: totalAnswered
    //     })
    //     if (totalAnswered === questionsTotal) {
    //         this.setState({
    //             completedQuiz: true
    //         })
    //     }
    // }
    // finishQuiz = () => {
    //     this.props.navigation.navigate('Finish', {
    //         score: this.state.totalScore,
    //         missed: this.state.incorrect,
    //         questions: this.state.numberofQuestions
    //     })
    // }
    render() {
         console.log(`yes i am`, this.state.questionList)
         console.log(this.state.questLoaded)
        return (
            <View style={styles.container}>
                <Text>yes i am quiz</Text>
                {this.state.questLoaded && (
                    <FlatList
                        data={this.state.questList}
                renderItem={({ item }) => <Text>{item.answer1}</Text>
   
                        }
                    />
                )}
                {!this.state.completedQuiz && (
                    <TouchableHighlight style={styles.disabled}>
                        <Text>Answer all the questions</Text>
                    </TouchableHighlight>
                )}

                    {this.state.completedQuiz && (
                    <TouchableHighlight onPress={this.finishQuiz} style={styles.enabled}>
                        <Text>Finished</Text>
                    </TouchableHighlight>
                )}
                {!this.state.questLoaded && (
                    <Text>LOADING</Text>
                )

                }
            </View>
        );
    }
}
class Questions extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected:false,
            correct:false
        }
    }

    chooseAnswer = (ans)=>{
        let worth = 25;
        if(ans===this.props.correctAnswer){
            this.setState({
                selected:true,
                correct:true
            });
            this.props.scoreUpdate(0); 
        }
        else{
            this.setState({
                selected:true
            });
            this.props.scoreUpdate(worth);
        }

    }
     
    render() {
        console.log(`i am coming`, this.props.question)
        return (
            <View style={styles.container}>
                 {!this.state.selected && (
                     <View style={styles.container}>
                        <Text style={styles.questionText}>{this.props.question}</Text>
                        <TouchableHighlight onPress={()=>this.chooseAnswer('answer1')}>
                            <Text style={styles.answerText}>{this.props.answer1}</Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={()=>this.chooseAnswer('answer2')}>
                            <Text style={styles.answerText}>{this.props.answer2}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={()=>this.chooseAnswer('answer3')}>
                            <Text style={styles.answerText}>{this.props.answer3}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={()=>this.chooseAnswer('answer4')}>
                            <Text style={styles.answerText}>{this.props.answer4}</Text>
                        </TouchableHighlight>
                     </View>
                 )}
                 { this.state.selected && this.state.correct && (
                     <View style={styles.correctContainer}>
                         <Text style={styles.questionText}>{this.props.question}</Text>
                            <Text style={styles.answerText}>{this.props.answer1}</Text>
                            <Text style={styles.answerText}>{this.props.answer2}</Text>
                            <Text style={styles.answerText}>{this.props.answer3}</Text>
                            <Text style={styles.answerText}>{this.props.answer4}</Text>
                            <Text style={styles.answerText}>CORRECT</Text>

                    </View>
                 )}

                    { this.state.selected && !this.state.correct && (
                     <View style={styles.wrongContainer}>
                         <Text style={styles.questionText}>{this.props.question}</Text>
                            <Text style={styles.answerText}>{this.props.answer1}</Text>
                            <Text style={styles.answerText}>{this.props.answer2}</Text>
                            <Text style={styles.answerText}>{this.props.answer3}</Text>
                            <Text style={styles.answerText}>{this.props.answer4}</Text>
                            <Text style={styles.answerText}>INCORRECT</Text>

                    </View>
                 )

                 }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:30
    },
    disabled:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d3d3d3',
        height:'10%'
    },

    enabled:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d3d3d3',
        height:'10%'
    },
    correctContainer:{
        flex:1,
        paddingTop:20,
        backgroundColor:'#008000'
    },
    wrongContainer:{
        flex:1,
        paddingTop:20,
        backgroundColor:'#ff0000'
    },
    questionText:{
        flex:2,
        padding:15,
        fontSize:20
    },
    answerText:{
        flex:2,
        padding:15,
        fontSize:20,
        textAlign:'center'
    }
}) 