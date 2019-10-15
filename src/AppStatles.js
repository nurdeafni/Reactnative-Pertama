import React from 'react';
import{
    View,
    Text
} from 'react-native';

const AppStatles = (props) => (
    <View>
        <Text>Component Stateles</Text>
        <Text>Nama     : {props.nama}</Text>
        <Text>Almat    : {props.alamat}</Text>
        <Text>Telepon  : {props.telp}</Text>
        <Text>email    : {props.email}</Text>
    </View>
)
export default AppStatles;