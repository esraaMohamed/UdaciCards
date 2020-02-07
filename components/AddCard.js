import React from 'react'
import {StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native'
import SubmitButton from "./SubmitButton";
import {purple} from "../utils/color";

class AddCard extends React.Component {
    state = {
        input: '',
        showInput: false
    }

    handleTextChange = (input) => {
        this.setState({
            input
        })
    }

    submit = () => {
        console.log('submit')
    }

    render() {
        const {input} = this.state
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TextInput
                    placeholder='Question'
                    value={input}
                    style={styles.input}
                    onChangeText={this.handleTextChange}
                />
                <TextInput
                    placeholder='Answer'
                    value={input}
                    style={styles.input}
                    onChangeText={this.handleTextChange}
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