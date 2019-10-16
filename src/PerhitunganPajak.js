import React from 'react';
import {
    View,
    Text,
    Button,
    TextInput
} from 'react-native';

class PerhitunganPajak extends React.Component{
    state= {gajiBulanan:0, gajiTahunan: null,  Pajak:null, BayarPajak:null, hasilOutput:null, pajak:null};

    hitungPajak=() =>{
        let gajiBulanan= this.state.gajiBulanan;

        let gajiTahunan= parseInt(gajiBulanan) * 12;
        this.setState({gajiTahunan : gajiTahunan})

        if(gajiTahunan < 50000000){
            pajak= 0
            hasilOutput= "nihil"
        }else if(gajiTahunan >= 50000000 && gajiTahunan <= 250000000){
            pajak=5
            hasilOutput= gajiTahunan * 5/100
        }
        else{
            pajak=15
            hasilOutput= gajiTahunan* 15/100
        }


        this.setState({Pajak:pajak})
        
        this.setState({BayarPajak:hasilOutput})
    }
    render(){
        return(
                <View>
                    <Text>Hitung Perhitungan Pajak</Text>
                  <TextInput
                        style={{heigh: 40}}
                        placeholder= "Masukan Gaji Bulanan"
                        onChangeText={(InputgajiBulanan)=> this.setState(
                            {gajiBulanan: InputgajiBulanan})}
                        value={this.state.gajiBulanan}
                    />
       
                <Button
                    title="Bayar Pajak"
                    onPress={() => {
                        this.hitungPajak()
                }}
                />
                <Text>{this.state.gajiTahunan}</Text> 
                <Text>{this.state.Pajak}</Text> 
                <Text>{this.state.BayarPajak}</Text> 
            </View>
        );

    }
}
export default PerhitunganPajak;