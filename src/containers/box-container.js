import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Box from "../components/box";
import { connect } from "react-redux";
import * as axtionCreators from "../actions/index"
class BoxCon extends Component {
    render() {        
        return (
            <View style={styles.container}>
            <Text>{this.props.color.color}</Text>
                <Box handleClick={this.props.loadColor} color={this.props.color.color} />
            </View>
        );
    }
}

const mapStateToProps=(state)=>{
    return state;
}



export default connect(mapStateToProps, axtionCreators)(BoxCon);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});