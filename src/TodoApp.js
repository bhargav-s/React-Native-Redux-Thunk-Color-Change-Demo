import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import AddTodo from "./containers/AddTodo";
import VisibleTodos from "./containers/VisibleTodos";
import CounterApp from "./CounterApp";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from "./reducers/counter";


const storeCounter = createStore(reducers);



class TodoApp extends Component {
    state = {
        todos: [],
        visibility: 'SHOW_ALL',
    }

    render() {
        return (
            <View style={styles.container}>
                <AddTodo />
                <View>
                    <VisibleTodos />
                </View>
                <Provider store={storeCounter}>
              <CounterApp />
              </Provider>
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    }
});