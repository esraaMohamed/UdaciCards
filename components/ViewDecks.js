import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native'
import ViewDeck from "./ViewDeck";
import {cardsCount, getDecks} from "../utils/decks";
import {gray, purple} from "../utils/colors";

class ViewDecks extends React.Component {
    render() {
        const decks = getDecks()
        console.log("decks ", decks)
        return (
            <ScrollView>
                <View style={styles.container}>
                    {
                        Object.values(decks).map(deck => (
                            <TouchableOpacity
                                key={deck.title}
                                style={styles.container}
                                onPress={() => this.props.navigation.navigate(
                                    'ViewDeck', {title: deck.title})}>
                                <Text style={styles.header}>
                                    {deck.title}
                                </Text>
                                <Text style={styles.subHeader}>
                                    {cardsCount(deck.title) > 1 ? `${cardsCount(deck.title)} Cards` : `${cardsCount(deck.title)} Card`}
                                </Text>
                            </TouchableOpacity>
                        ))
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
export default ViewDecks