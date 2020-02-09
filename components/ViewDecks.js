import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, RefreshControl} from 'react-native'
import ViewDeck from "./ViewDeck";
import {gray, purple} from "../utils/colors";
import {connect} from 'react-redux'
import {retrieveDecks} from "../actions";
import {getDecks} from "../utils/api";
import {AppLoading} from "expo";

class ViewDecks extends React.Component {
    state = {
        ready: false,
        decks: {},
        refreshing: false,
    }

    componentDidMount() {
        const {handleRetrieveDecks} = this.props
        console.log("component did mount ")
        getDecks().then((decks) => {
            handleRetrieveDecks(decks)
            this.setState({decks})
        }).then(() => this.setState(() => ({ready: true})))
        console.log("decks from state ", this.state.decks)
    }

    _onRefresh = () => {
        const {handleRetrieveDecks} = this.props
        this.setState({refreshing: true});
        getDecks().then((decks) => {
            handleRetrieveDecks()
            this.setState({decks})
        }).then(() => this.setState(() => ({ready: true, refreshing: false})))

    }

    shouldComponentUpdate(nextProps) {
        return nextProps.decks !== this.props.decks
    }

    render() {
        const {decks} = this.props
        const decksList = Object.values(decks)
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
                    {
                        decksList.map(deck => (
                                <TouchableOpacity
                                    key={deck.title}
                                    accessibilityRole="button"
                                    style={styles.container}
                                    onPress={() => this.props.navigation.navigate(
                                        'ViewDeck', {deck: deck})}>
                                    <Text style={styles.header}>
                                        {deck.title}
                                    </Text>
                                    <Text style={styles.subHeader}>
                                        {deck.questions.length > 1 || deck.questions.length === 0
                                            ? `${deck.questions.length} Cards`
                                            : `${deck.questions.length} Card`}
                                    </Text>
                                </TouchableOpacity>
                            )
                        )
                    }
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
        marginTop: 5,
        color: gray
    }
})

const mapStateToProps = (state) => {
    return {
        decks: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleRetrieveDecks: () => getDecks().then((decks) => {
            dispatch(retrieveDecks(decks))
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewDecks)