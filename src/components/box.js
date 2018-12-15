import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class Box extends Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={{backgroundColor: `${this.props.color}`}}>
            <Text>{this.props.color}</Text>
                <Button onPress={() => {this.props.handleClick()}} title="click me" />
                </View>
            </View>
        );
    }
}
export default Box;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});