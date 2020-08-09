import React, {useState} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import CardItem from './cardItem'

export default function CardList() {
    const [todos, setTodos] = useState([
        {title: "Buy Coffee", key: "1"},
        {title: "Buy Medicine", key: "2"},
        {title: "Go shopping", key: "3"},
        {title: "Enjoy Tea", key: "4"}
    ])

    return (
        <FlatList 
        data = {todos}
        renderItem = {({item}) => (
            <CardItem style = {style.list} item = {item}/>
        )}
        />
    )
}

const style = StyleSheet.create({
    list: {
        marginTop: 20
    }
})