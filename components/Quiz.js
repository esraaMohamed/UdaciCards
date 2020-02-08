import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'

class Quiz extends React.Component {

    static navigationOptions = ({navigation}) => {
        const {title} = navigation.state.params;
        return {
            title
        }
    }

    render() {
        const {title, noCards} = this.props.navigation.state.params
        console.log("title ", title, "no cards? ", noCards)
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Text>Card</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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

export default Quiz