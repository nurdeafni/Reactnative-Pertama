import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Rumus from './Persegi'
import Pajak from './PerhitunganPajak'

class Menu extends React.Component{
    state= { tipe: 'rumus'};

    componentWillMount(){
        this.setState({
            tipe: 'rumus'
        })
    }

    SlidePindah(){
        if(this.state.tipe == 'rumus'){
            return(
                <Rumus/>
            );
        }else if(this.state.tipe == 'pajak'){
            return(
                <Pajak/>
            );
        }
    }
    render(){
        let type= this.state.tipe;
        
        return(
            <View>
                <Text>Menu Pilihan : {type}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setState({tipe: 'rumus'})}>
                    <Text style={{ color: '#00CED1' }}>HitungPersegi</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setState({tipe: 'pajak'})}>
                    <Text style={{ color: '#00CED1' }}>Hitungan Pajak</Text>
                </TouchableOpacity>

                {this.SlidePindah()}

            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#808080',
        padding: 20,
        margin: 4,
    },
});
export default Menu;