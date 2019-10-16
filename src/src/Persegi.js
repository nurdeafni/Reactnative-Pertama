import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput
} from 'react-native';

class Persegi extends React.Component{
    //#1 inisialisasi state
    state= {panjang:0, lebar:null, luas:null};
    //#2 methode untuk merubah state luas
    hitungLuas= () =>{
        let panjang= this.state.panjang; //tampung nilai state akhir pada variable panjang
        let lebar= this.state.lebar; //tampung nilai state akhir pada variable panjang
        let luas = parseInt(panjang) * parseInt(lebar); //menghitung luas persegi dan lebar harus dikonversikan 
        //ke int karena asalnya string
        this.setState({luas : luas}) // set state luas
        
    }
    render(){
        // #3 read  component state
        let currentValue= this.state.currentValue
        return(
            <View>
                <Text>Hitung Luas Persegi Panjang</Text>
              <TextInput
                    style={{heigh: 40}}
                    placeholder= "Masukan Panjang"
                    onChangeText={(InputPanjang)=> this.setState(
                        {panjang: InputPanjang})}
                    value={this.state.panjang}
                />
   
                <TextInput
                    style={{heigh: 40}}
                    placeholder= "Masukan Lebar"
                    onChangeText={(InputLebar)=> this.setState(
                        {lebar: InputLebar})}
                    value={this.state.lebar}
                />

                <Button
                    title="Hitung Luas"
                    onPress={() => {
                        this.hitungLuas()
                }}
                />

                <Text>{this.state.luas}</Text> 

            </View>
        );
    }
}

export default Persegi;