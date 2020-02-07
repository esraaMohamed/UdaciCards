import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Quiz extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Quiz</Text>
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
export default Quiz