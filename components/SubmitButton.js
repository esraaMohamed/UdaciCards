import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import {purple, white} from "../utils/color";

const SubmitButton = ({onPress, text}) => {
    return (
        <TouchableOpacity
            style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iosSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginRight: 40,
        marginLeft: 40,
        alignSelf: 'center'
    },
    androidSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtnText: {
        color: white,
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default SubmitButton