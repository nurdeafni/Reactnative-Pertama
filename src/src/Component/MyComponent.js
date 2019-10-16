import React from 'react';
import{
    View,
    Text
} from 'react-native';

class MyComponent extends React.Component{
    //Life cycle React-native
    constructor(){ //#1
        super()
        this.name = 'My Cool Component'
    }
    componentWillMount(){
        this.name = 'ubah nama komponen'; //#2
    }
    render(){ //#3 view on device
        return(
            <View>
                <Text>{this.name}</Text>
            </View>
        );
    }
}
export default MyComponent;