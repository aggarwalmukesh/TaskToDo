import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export default function CardItem({item}) {
    return (
        <TouchableOpacity onPress = {(item) => {
            console.log("item clicked"+item.key)
            
        }}>
            <Text style = {style.card_item}>{item.title}</Text>
            <Text style = {style.card_item}>Thanks</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    card_item: {
        backgroundColor: 'yellow',
        padding: 20,
        color: 'red',
        margin: 5
    }
})