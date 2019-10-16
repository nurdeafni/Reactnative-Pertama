import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Picker
} from 'react-native';

class Persegi extends React.Component{
    //#1 inisialisasi state
    state= {panjang:0, lebar:null, formula:null, rumus: null, keliling: null};
    //#2 methode untuk merubah state luas
    hitungLuas= () =>{
        let panjang= this.state.panjang; //tampung nilai state akhir pada variable panjang
        let lebar= this.state.lebar; //tampung nilai state akhir pada variable panjang
        
        if(this.state.rumus=="luas"){
            let luas = parseInt(panjang) * parseInt(lebar) 
            this.setState({formula : luas})
            
        }else if(this.state.rumus== 'keliling'){
            let keliling = (parseInt(panjang) + parseInt(lebar)) * 2
            this.setState({formula : keliling})

            
        }

        
        console.log(this.state)
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
                <Picker
                selectedValue={this.state.rumus}
                style={{heigh:100, width: 300}}
                onValueChange={(itemValue, itemIndex)=>
                    this.setState({rumus: itemValue})}>

                <Picker.Item label="Pilihan Tipe" value=""/>
                <Picker.Item label="Luas" value="luas"/>
                <Picker.Item label= "Keliling" value="keliling"/>
                </Picker>
                <Button
                    title="Hitung Luas"
                    onPress={() => {
                        this.hitungLuas()
                }}
                />

                <Text>{this.state.formula}</Text> 

            </View>
        );
    }
}

export default Persegi;