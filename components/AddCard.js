import React from 'react'
import {StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native'
import SubmitButton from "./SubmitButton";
import {purple} from "../utils/colors";
import {addCardToDeck} from "../utils/decks";

class AddCard extends React.Component {
    state = {
        question: '',
        answer: '',
        showInput: false
    }

    static navigationOptions = ({ navigation }) => {
        const {title} = navigation.state.params;
        return {
            title
        }
    }

    handleQuestionTextChange = (input) => {
        this.setState({
            question: input
        })
    }

    handleAnswerTextChange = (input) => {
        this.setState({
            answer: input
        })
    }

    submit = () => {
        const {title} = this.props.navigation.state.params;
        const {question, answer} = this.state
        const card = {question, answer}
        addCardToDeck(title, card)
        this.props.navigation.navigate(
            'ViewDecks')
    }

    render() {
        const {input} = this.state
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TextInput
                    placeholder='Question'
                    value={input}
                    style={styles.input}
                    onChangeText={this.handleQuestionTextChange}
                />
                <TextInput
                    placeholder='Answer'
                    value={input}
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

export default AddCard