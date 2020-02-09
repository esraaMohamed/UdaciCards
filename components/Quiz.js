import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native'
import {clearLocalNotification, noCards, setLocalNotification} from "../utils/helpers";
import {connect} from 'react-redux'
import Card from "./Card";
import {green, red, white, black, lightGray, purple} from "../utils/colors";

class Quiz extends React.Component {
    state = {
        correctAnswers: 0,
        incorrectAnswers: 0,
        currentQuestionIndex: 0
    }

    static navigationOptions = ({navigation}) => {
        const {deck} = navigation.state.params;
        return {
            title: deck.title
        }
    }

    componentDidMount() {
        clearLocalNotification().then(setLocalNotification)
    }

    hasClickedCorrectBtn() {
        this.setState((state) => {
            return {
                ...state,
                currentQuestionIndex: state['currentQuestionIndex'] + 1,
                correctAnswers: state['correctAnswers'] + 1
            }
        })
    }

    hasClickedIncorrectBtn() {
        this.setState((state) => {
            return {
                ...state,
                currentQuestionIndex: state['currentQuestionIndex'] + 1,
                incorrectAnswers: state['incorrectAnswers'] + 1
            }
        })
    }

    reset() {
        this.setState({currentQuestionIndex: 0, correctAnswers: 0, incorrectAnswers: 0})
    }

    render() {
        const {deck} = this.props.navigation.state.params
        const {correctAnswers, currentQuestionIndex} = this.state
        const { goBack } = this.props
        const questions = deck.questions
        const card = questions[currentQuestionIndex]
        if (currentQuestionIndex > 0 && currentQuestionIndex === questions.length) {
            return (
                <View style={styles.container}>
                    <View style={styles.scoreContainer}>
                        <Text style={styles.scoreLbl}>Your Score is: </Text>
                        <Text style={styles.score}>{(correctAnswers / questions.length) * 100}
                            %</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={[styles.btn, styles.goBackToDeckBtn]} onPress={() => goBack()}>
                            <Text style={[styles.btnText, styles.goBackToDeckBtnText]}>Back to Deck</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn, styles.restartQuizBtn]} onPress={() => this.reset()}>
                            <Text style={[styles.btnText, styles.restartQuizBtnText]}>Restart Quiz</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return ( questions.length > 0 ?
            (
                <View style={styles.container}>
                <Text style={styles.pagination}>{currentQuestionIndex + 1}/{questions.length}</Text>
                <View style={styles.card}><Card card={card}/></View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={[styles.btn, styles.greenBtn]} onPress={() => this.hasClickedCorrectBtn()}>
                        <Text style={[styles.btnText]}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.redBtn]} onPress={() => this.hasClickedIncorrectBtn()}>
                        <Text style={[styles.btnText]}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ) : (
            <View style={[styles.container]}>
                <Text style={styles.content}>{noCards().noQuiz}</Text>
            </View>
            )
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pagination: {
        flex: 1,
        alignItems: 'flex-start',
        fontSize: 24,
        color: purple
    },
    card: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        backgroundColor: lightGray
    },
    btnContainer: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'stretch'
    },
    btn: {
        padding: 10,
        height: 45,
        margin: 10,
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                borderRadius: 7
            },
            android: {
                paddingLeft: 30,
                paddingRight: 30,
                borderRadius: 2
            }
        })
    },
    greenBtn: {
        backgroundColor: green
    },
    redBtn: {
        backgroundColor: red
    },
    btnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    scoreContainer: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreLbl: {
        fontSize: 36,
        color: black
    },
    score: {
        fontSize: 48,
        color: green
    },
    goBackToDeckBtn: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: black
    },
    goBackToDeckBtnText: {
        color: black
    },
    restartQuizBtn: {
        backgroundColor: black
    },
    restartQuizBtnText: {
        color: white
    },
    content: {
        color: black,
        fontSize: 45,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})

const mapStateToProps = (state, {navigation}) => {
    const {deck} = navigation.state.params
    return {
        deck: state[deck.title] || {}
    }
}

const mapDispatchToProps = (dispatch, {navigation}) =>{
    const {deck} = navigation.state.params

    return {
        goBack: () => navigation.goBack()
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
