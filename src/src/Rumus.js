import React from 'react';
import{
    View,
    Text
} from 'react-native';

class Rumus extends React.Component{
    render(){
        return(
            <View>
                <Text>Nama Ruang    : {this.props.namaRuang}</Text>
                <Text>Rumus Luas    : {this.props.luas}</Text>
                <Text>Rumus Keliling    :{this.props.keliling}</Text>
            </View>
        );
    }
}
export default Rumus;