import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default function Header() {
    return (
        <View style = {style.header}>
            <Text style = {style.text}>Welcome</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        height: 48,
        alignItems:'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});