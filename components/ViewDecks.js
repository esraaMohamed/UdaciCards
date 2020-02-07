import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import ViewDeck from "./ViewDeck";

class ViewDecks extends React.Component{
    renderItem = ({id}) => {
        return <ViewDeck id={id}/>
    }
    render() {
        const decks = [{
            'id': '1',
            'question' : 'Q1',
            'answer': 'A1'
        }]
        return (
            <View style={styles.container}>
                <FlatList data={decks} renderItem={this.renderItem}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
export default ViewDecks