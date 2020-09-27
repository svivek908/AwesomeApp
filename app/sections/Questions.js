import React,{Component} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
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

export default Questions;
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:10
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