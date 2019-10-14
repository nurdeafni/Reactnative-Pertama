import React from 'react';
import {
    View,
    Text
} from 'react-native';
import ProEx from './PropEx';
//import component Prof Ex

class App extends React.Component{
    render(){
        console.log("Hello World")
        return(
            <View>
                <Text></Text>
                <ProEx nama = "Ameng" alamat= "Gg.Swadaya Rt.03/01" telp= "081911099073" email= "ameng15@gmail.com"/>
                <Text></Text>
                <ProEx nama = "Khaiz" alamat= "Kemang" telp= "081911099343" email= "khaiz16@gmail.com"/>
                <Text></Text> 
                <ProEx nama = "Nur De Afni Melani" alamat="Jl.Raya Viktor Gg.Swadaya Rt.03/01" telp="081911099073"
                        email="nurdeafni@gmail.com"/>
                <Text></Text>
                <ProEx nama="Hendri" alamat="Lengkong" telp="081998101870" email="hendri@gmail.com"/>
                <Text></Text>
                <ProEx nama="Denta Alkahfi Setiawan" alamat="Jl.Raya Viktor Gg.Swadaya Rt.03/01" telp="083451327907"
                        email="kahfiden@gmail.com"/>
                <Text></Text>
                <ProEx nama="Desi Suci R" alamat="Cisauk City" telp="0856745789968" email="desisuci@gmail.com"/>
                <Text></Text>
                <ProEx nama="Riza Pranata" alamat="Kali nya Deres" telp="0816765466678" email="rizap@gmail.com"/>
                <Text></Text>
            </View>
        );
    }
}

export default App;