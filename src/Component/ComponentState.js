import React from 'react';
import{
    View,
    Text,
    TouchableOpacity
} from 'react-native';

class ComponentState extends React.Component{
    constructor(){
        super()
        this.state = { name : "Rico" } //inisialisasi state
    }
    componentWillMount(){
        this.setState({name :'Denis'});
    }
        //#3 read component state menggunakan tis.state.<nama.state>
        render(){
        return(
            <View>
                <TouchableOpacity>
                <Text>{this.state.name}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default ComponentState;