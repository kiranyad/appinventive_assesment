import React from "react";
import { View, Platform, Text, Dimensions, ImageBackground, Image, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const{height, width} = Dimensions.get("screen");

class CustomHeader extends React.Component {
    constructor(props){
        super(props);

        this.state={
            search : ''
        };
    }

    render(){
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/gradient_background.png')} 
                    style={styles.image}
                    >
                        <View style={{paddingHorizontal:10, paddingTop:30, flexDirection:"row",
                            justifyContent:"space-between"}}>
                            <Icon name="menu" size={30} color='#fff' />

                            <Image source={{
                                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}
                                style={{ width: 30, height: 30, borderRadius:20}}
                            />
                        </View>

                        <View style={{
                            alignSelf:'center', 
                            paddingVertical:40, 
                            flexDirection:"row",
                            }}
                            >
                            <TextInput
                                style={{ 
                                    height: 45,
                                    backgroundColor: '#fff',
                                    borderRadius: 20,
                                    width: 290,
                                    marginLeft: 8,
                                }}
                                placeholder="              Search movie title"
                                onChangeText={text => this.setState({search:text})}
                                value={this.state.search}
                            />

                            <View style={{position:"absolute",paddingTop:47, left:20}}>
                                <Icon name="magnify" size={25} color='grey' />
                            </View>
                        </View>

                </ImageBackground>
            </View>
        );
    }
}

const styles = {
    container : {
        flex: 1
    },
    image: {
        width:"100%",
        height: height/6,
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius : 20,
        // borderWidth:5,
        // borderWidthBottomRadius:10
    },
}

export default CustomHeader;
