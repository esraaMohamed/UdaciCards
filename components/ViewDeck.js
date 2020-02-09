import React from 'react'
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native'
import SubmitButton from "./SubmitButton";
import {gray, purple} from "../utils/colors";
import {deleteDeck} from "../actions";
import {connect} from 'react-redux'
import {getDeck, getDecks, removeDeck} from "../utils/api";
import {AppLoading} from "expo";

class ViewDeck extends React.Component {
    state = {
        deck: {},
        ready: false,
        refreshing: false
    }

    componentDidMount() {
        const {deck} = this.props.navigation.state.params
        console.log("deck title ", deck.title)
        getDeck(deck.title).then((deck) => {
            this.setState({deck})
        }).then(() => this.setState(() => ({ready: true})))
    }

    addCard = () => {
        const {deck} = this.props.navigation.state.params
        this.props.navigation.navigate(
            'AddCard', {deck: deck})
    }

    startQuiz = () => {
        const {deck} = this.props.navigation.state.params
        let args = {}
        deck.questions.length > 0
            ? args = {deck, noCards: false}
            : args = {deck, noCards: true}
        this.props.navigation.navigate(
            'Quiz', args)
    }

    deleteDeck = () => {
        const {deck} = this.props.navigation.state.params
        const {handleDeleteDeck} = this.props
        const deckTitle = deck.title
        handleDeleteDeck()
        removeDeck(deckTitle)
        this.props.navigation.navigate(
            'ViewDecks')
    }

    static navigationOptions = ({navigation}) => {
        const {deck} = navigation.state.params;
        return {
            title: deck.title
        }
    }

    _onRefresh = () => {
        const {deck} = this.props.navigation.state.params
        this.setState({refreshing: true});
        getDeck(deck.title).then((deck) => {
            this.setState({deck})
        }).then(() => this.setState(() => ({ready: true, refreshing: false})))
    }

    render() {
        const {deck} = this.props.navigation.state.params;
        if (!this.state.ready) {
            return (<AppLoading/>)
        }
        return (
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                />
            }>
                <View style={styles.container}>
                    <Text style={styles.header}>
                        {deck.title}
                    </Text>
                    <Text style={styles.subHeader}>
                        {deck.questions.length > 1 || deck.questions.length === 0
                            ? `${deck.questions.length} Cards`
                            : `${deck.questions.length} Card`}
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

const mapStateToProps = () => {
    return {
    }
}
const mapDispatchToProps = (dispatch, {navigation}) => {
    const {deck} = navigation.state.params
    const deckTitle = deck.title
    return {
        handleDeleteDeck: () => getDecks().then((decks) => dispatch(deleteDeck({deckTitle})))
            .catch(error => console.log("Error deleting deck => ", error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewDeck)