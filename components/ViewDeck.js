import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SubmitButton from "./SubmitButton";
import {cardsCount} from "../utils/decks";
import {gray, purple} from "../utils/colors";

class ViewDeck extends React.Component {
    addCard = () => {
        const {title} = this.props.navigation.state.params
        this.props.navigation.navigate(
            'AddCard', {title})
    }

    startQuiz = () => {
        const {title} = this.props.navigation.state.params
        let args = {}
        cardsCount(title) > 0
            ? args = {title, noCards: false}
            : args = {title, noCards: true}
        this.props.navigation.navigate(
            'Quiz', args)
    }

    deleteDeck = () => {
        this.props.navigation.navigate(
            'ViewDecks')
    }

    static navigationOptions = ({navigation}) => {
        const {title} = navigation.state.params;
        return {
            title
        }
    }

    render() {
        const {title} = this.props.navigation.state.params;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>
                        {title}
                    </Text>
                    <Text style={styles.subHeader}>
                        {cardsCount(title) > 1 ? `${cardsCount(title)} Cards` : `${cardsCount(title)} Card`}
                    </Text>
                    <SubmitButton text='Add Card' onPress={this.addCard}/>
                    <SubmitButton text='Start Quiz' onPress={this.startQuiz}/>
                    <SubmitButton text='Delete Deck' onPress={this.deleteDeck}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {},
    header: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        fontSize: 40,
        color: purple,
        padding: 20,
        marginTop: 20
    },
    subHeader: {
        fontSize: 25,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 200,
        color: gray
    }
})
export default ViewDeck