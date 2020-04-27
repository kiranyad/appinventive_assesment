import * as React from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    TouchableOpacity, 
    Image, 
    ScrollView,
    Alert
} from 'react-native';
import {HorizontalList} from 'react-native-horizontal-list'; 
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
    {
    id: 1,
    category: "advertisement",
    title: "Please subscribe to view more exclusive contents.", 
    image: { uri: "https://i.imgur.com/L68FtMA.jpg" },
    },
    {
    id: 2,
    category: "SCIENCE FICTION", title: "Blade Runner Future 2049.",
    image: { uri: "https://i.imgur.com/L68FtMA.jpg" }, rating: 4.0,
    },
    {
    id: 3,
    category: "advertisement",
    title: "2 months for only Rm15.90 for offline movies.", 
    image: { uri: "https://i.imgur.com/L68FtMA.jpg" },
    },
    {
    id: 4,
    category: "SUPERHERO ACTION",
    title: "Captain America Civil War.",
    image: { uri: "https://i.imgur.com/tAui2H7.jpg" }, rating: 3.5,
    },
    {
    id: 5,
    category: "ROMANCE",
    title: "Beauty and the Beast.",
    image: { uri: "https://i.imgur.com/J5pgFyr.jpg" }, rating: 2.5,
    },
    {
    id: 6,
    category: "DRAMA",
    title: "Shawshank Redemption.",
    image: { uri: "https://i.imgur.com/7YGXDbM.jpg" }, rating: 3.0,
    },
];

const imageWidth = 60;
class HomeScreen extends React.Component {
    showItems = ( item ) => {
        return(
            <View key={item.id} style={{marginLeft: 15, width: imageWidth+20}}>
                <TouchableOpacity onPress={() => {
                    Alert.alert('', item.image.uri);
                }}>
                    <Image style={styles.imgProp} source={{uri: item.image.uri}} />
                    
                    <Text style={{
                        fontWeight:"bold", 
                        fontSize:12, 
                        marginTop: 15, 
                        position:"absolute",
                        color:"#fff",
                        textAlign : 'center'
                    }} 
                        numberOfLines={2}>
                        {item.category}
                    </Text>
                </TouchableOpacity>

                
            </View>
        );
    }


    render(){
        return (
            <SafeAreaView style={{ flex:1, marginTop:90, backgroundColor:'#fff'}}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Text style={{fontWeight:"bold", marginVertical:10, marginLeft: 15}}>
                        Cinema around your area
                    </Text>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            this.showItems(item)
                        )}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        ListFooterComponent={()=> (<View style={{marginRight:15}}/>)}
                    />

                    <HorizontalList 
                        data={data}
                        titleOfList='New Release' 
                        viewProps={{marginTop:10}}
                    />

                    <HorizontalList 
                        data={data}
                        titleOfList='New Release' 
                        viewProps={{marginTop:20 }}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
    
}


const styles = {
    imgProp: {
        width: imageWidth+20,
        height: imageWidth,
        borderRadius: 15,
        opacity:1
    },
    StarImage: {
        width: 15,
        height: 15,
        resizeMode: 'cover',
    },
    childView: {
        flexDirection: 'row',
        marginTop: 7,
    },
    contentContainer: {
        paddingTop: 70,
        paddingBottom:20
    }
};

export default HomeScreen;