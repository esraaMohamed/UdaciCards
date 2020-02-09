import React from 'react'
import {Text, TouchableOpacity, StyleSheet, Platform} from 'react-native'
import {purple, white} from "../utils/colors";


const SubmitButton = ({onPress, text}) => {
    return (
        <TouchableOpacity
            accessibilityRole="button"
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
        marginBottom: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    androidSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 40,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'flex-end'
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