import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class ViewDeck extends React.Component{
    render() {
        const {id} = this.props
        return (
            <View style={styles.container}>
                <Text>View Deck</Text>
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
    img: {
        width: 200,
        height: 200
    }
})
export default ViewDeck