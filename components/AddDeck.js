import React from 'react'
import {Text, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native'
import SubmitButton from "./SubmitButton";
import {purple} from "../utils/colors";
import {saveDeckTitle} from "../utils/api";
import {connect} from 'react-redux'
import {addDeck} from "../actions";

class AddDeck extends React.Component{
    state = {
        title: ''
    }

    handleTextChange = (input) => {
        this.setState({
            title: input
        })
    }

    submit = () => {
        const {title} = this.state
        const {handleAddingDeck} = this.props
        let deck = {}
        deck = {
            title: title,
            questions: []
        }
        handleAddingDeck(title)
        saveDeckTitle(deck)
        this.props.navigation.navigate(
            'ViewDeck', {deck: deck})
    }

    render() {
        const {title} = this.state
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.text}>What is the title of your new deck?</Text>
                <TextInput
                    placeholder='Deck title'
                    value={title}
                    style={styles.input}
                    onChangeText={this.handleTextChange}
                />
                <SubmitButton onPress={this.submit} text='Create Deck'/>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        alignItems: 'center',
        margin: 20,
        marginLeft: 36,
        padding: 15,
        height: 50,
        width: 300,
        borderColor: '#7a42f4',
        borderWidth: 1,
        color: purple,
        alignSelf: 'center'
    },
    text: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        fontSize: 40,
        color: purple,
        padding: 20,
        marginTop: 20
    }
})

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddingDeck : (title) => dispatch(addDeck(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)