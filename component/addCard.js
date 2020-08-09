import React from 'react'
import {StyleSheet, TextInput, Text, View, Button} from 'react-native'
import {Card} from 'react-native-paper'

class AddCard extends React.Component {
    constructor() {
        super()

        this.state = {
            title:"",
            description:""
        }
    }

    updateDescription = (input) => {
        this.setState({description: input})
    }
    render() {
        return (
            <View>
                <Card style = {{margin: 20, padding: 20, elevation: 10}}>
                <TextInput placeholder = "Enter Card Title" 
                onChangeText = {(input) => this.setState({title:input})}/>
                <TextInput placeholder = "Enter Card Description"
                onChangeText = {(input) => this.setState({description: input})}/>
                <Button title = "Add card" onPress = {() => 
                    alert("Item added"+this.state.description)}></Button>
                    </Card>
            </View>
        )
    }
}

export default AddCard;