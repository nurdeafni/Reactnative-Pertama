import React from 'react';
import {
    View,
    Text
} from 'react-native';
import ProEx from './PropEx';
import AppStatles from './AppStatles'; // import component dari file AppStatles.js dengan nama alias AppStatles
//cara panggilnya <AppStatles />

class App extends React.Component{
    render(){
        console.log("Hello World")
        return(
            <View>
                {/*
                <Text></Text>
                <ProEx nama = "Randy" alamat= "JKT" telp= "021" email= "RANDY@gmail.com"/>
                <Text></Text>
                <ProEx nama = "Khaiz" alamat= "Kemang" telp= "081911099343" email= "khaiz16@gmail.com"/>
                <Text></Text> 
                <ProEx nama = "Nur De Afni Melani" alamat="Jl.Raya Viktor Gg.Swadaya Rt.03/01" telp="081911099073"
                        email="nurdeafni@gmail.com"/>
                <Text></Text>
                <ProEx nama="Hendri" alamat="Lengkong" telp="081998101870" email="hendri@gmail.com"/>
                <Text></Text>
                <ProEx nama="Gilang" alamat="Bandung" telp="022"
                        email="gilang@gmail.com"/>
                <Text></Text>
                <ProEx nama="Desi Suci R" alamat="Cisauk City" telp="0856745789968" email="desisuci@gmail.com"/>
                <Text></Text>
                <ProEx nama="Riza Pranata" alamat="Kali nya Deres" telp="0816765466678" email="rizap@gmail.com"/>
                <Text></Text>
                 */}

                <Text></Text>
                <AppStatles nama = "Randy" alamat= "JKT" telp= "021" email= "RANDY@gmail.com"/>
                <Text></Text>
                <AppStatles nama="Gilang" alamat="Bandung" telp="022" email="gilang@gmail.com"/>
            </View>
        );
    }
}

export default App;