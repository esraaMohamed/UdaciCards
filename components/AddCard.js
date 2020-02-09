import React from 'react'
import {StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native'
import SubmitButton from "./SubmitButton";
import {purple} from "../utils/colors";
import {connect} from 'react-redux'
import {addCard} from "../utils/api";
import {addCardToDeck} from "../actions";

class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    }

    static navigationOptions = ({ navigation }) => {
        const {deck} = navigation.state.params;
        return {
            title: deck.title
        }
    }

    handleQuestionTextChange = (question) => {
        this.setState({
            question: question
        })
    }

    handleAnswerTextChange = (answer) => {
        this.setState({
            answer: answer
        })
    }

    submit = () => {
        const {deck} = this.props.navigation.state.params;
        const {question, answer} = this.state
        const {handleAddCard} = this.props
        const card = {
            "question": question,
            "answer": answer
        }
        handleAddCard(deck.title, card)
        addCard(deck.title, card)
        this.props.navigation.navigate(
            'ViewDeck', {deck: deck})
    }

    render() {
        const {question, answer} = this.state
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TextInput
                    placeholder='Question'
                    value={question}
                    style={styles.input}
                    onChangeText={this.handleQuestionTextChange}
                />
                <TextInput
                    placeholder='Answer'
                    value={answer}
                    style={styles.input}
                    onChangeText={this.handleAnswerTextChange}
                />
                <SubmitButton onPress={this.submit} text='Submit'/>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        margin: 15,
        padding: 15,
        paddingTop: 10,
        height: 40,
        width: 300,
        borderColor: '#7a42f4',
        borderWidth: 1,
        color: purple
    },
})

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddCard: (title, card) => dispatch(addCardToDeck(title, card))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)