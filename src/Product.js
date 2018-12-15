import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Product extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Product</Text>
            </View>
        );
    }
}
export default Product;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});