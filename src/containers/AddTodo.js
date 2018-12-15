import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Button
} from "react-native";
import { connect } from 'react-redux';
class AddTodo extends Component {
    state={
        text:''
    }
    addTodo = (text)=>{
        this.props.dispatch({type: 'ADD_TODO', text})
        this.setState({text: ''})
    }
    render() {
        return (
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                <TextInput 
                value={this.state.text}
                onChangeText ={(text) => this.setState({text})}
                style={{borderWidth: 1, borderColor: '#f2f2e1',
                        backgroundColor: '#eaeaea', height: 50,
                        flex: 1, padding: 5
            }}
                />
                <TouchableOpacity 
                onPress={() => this.addTodo(this.state.text)}
                >
                <View style={{height: 50, 
                    backgroundColor: '#eaeaea',
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}>
                <Text style={{ padding: 10}}>CLICK</Text>
                </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});