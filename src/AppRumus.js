import React from 'react';
import {
    View,
    Text
} from 'react-native';
import ProEx from './Rumus';
//import component Prof Ex

class AppRumus extends React.Component{
    render(){
        return(
            <View>
                <ProEx namaRuang= "Persegi" luas= " sisi x sisi" keliling="4 X sisi"/>
                <Text></Text>
                <ProEx namaRuang= "Persegi Panjang" luas= " Pajang x Lebar" keliling="2 X (Panjang X Lebar)"/>
                <Text></Text>
                <ProEx namaRuang= "Segitiga" luas= " 1/2 (Alas X Tinggi)" keliling="Sisi A + Sisi B + Sisi C"/>
                <Text></Text>
                <ProEx namaRuang= "Jajar Genjang" luas= " Alas X Tinggi" keliling="2 X (Sisi A + Sisi B)"/>
                <Text></Text>
                <ProEx namaRuang= "Layang-Layang" luas= " 1/2 (d1 X d2)" keliling="4 X Sisi"/>
            </View>
        );
    }
}
export default AppRumus;