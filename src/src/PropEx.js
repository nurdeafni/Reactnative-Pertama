import React from 'react';
import{
    View,
    Text
} from 'react-native';

// class PropEx extends React.Component{
//     render(){

//         return(
//             <View>
//                 <Text>Nama      : {this.props.nama}</Text>
//                 <Text>Alamat    : {this.props.alamat}</Text>
//                 <Text>Telp      : {this.props.telp}</Text>
//                 <Text>Email     : {this.props.email}</Text>
//             </View>
//         )
//     }
// }


function PropEx(props){
    return(
        <View>
                <Text>Nama      : {props.nama}</Text>
                <Text>Alamat    : {props.alamat}</Text>
                <Text>Telp      : {props.telp}</Text>
                <Text>Email     : {props.email}</Text>
            </View>
    )
}

export default PropEx;