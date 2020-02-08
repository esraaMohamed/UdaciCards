import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Card extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const {title} = navigation.state.params;
        return {
            title
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Card</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Card