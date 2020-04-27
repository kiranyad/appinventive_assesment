import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../Dashboard/Tabs/HomeScreen';
const themecolor = '#ef9c2b';

export default function Demo() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Demo Screen</Text>
      </View>
    );
}

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View>
            {/* <ImageBackground source={image} style={styles.image}> */}
                <View style={styles.container}>
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label = (options.tabBarLabel !== undefined)
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;

                        const isFocused = state.index === index;

                        const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };

                        let name = '';
                        if((route.name).toLowerCase() == "home"){
                            name='home-outline';
                        } else if((route.name).toLowerCase() == "tickets"){
                            name='ticket-outline';
                        } else if((route.name).toLowerCase() == "movies"){
                            name='play-circle-outline';
                        }

                        return (
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityStates={isFocused ? ['selected'] : []}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={{ flex: 1 }}
                            >
                                {route.name == 'Offers' ?
                                    (<View style={styles.actionButton}>
                                        <Icon name="ticket-percent" size={30} color={ isFocused ? '#ef592b' : '#fff'} style={{paddingHorizontal:10}}/>
                                    </View>)
                                    :        
                                    route.name == 'CINEMAS' ?
                                    (<View style={{paddingVertical:10, justifyContent:'center', left:15, flexDirection:'column'}}>
                                    <MaterialIcons name="theaters" size={25} color={ isFocused ? themecolor : '#222'} />
                                    <Text style={{ color: isFocused ? themecolor : '#222' , fontSize:7}}>
                                        {label}
                                    </Text>
                                    </View>)
                                    :
                                    (<View style={{paddingVertical:10, justifyContent:'center', left:15, flexDirection:'column'}}>
                                    <Icon name={name} size={25} color={ isFocused ? themecolor : '#222'} />
                                    <Text style={{ color: isFocused ? themecolor : '#222' , fontSize:7}}>
                                        {label}
                                    </Text>
                                    </View>)
                                }
                            </TouchableOpacity>
                        );
                    })}
                </View>
            {/* </ImageBackground> */}
        </View>
    );
}

const Tab = createBottomTabNavigator();
const Routes = () => {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="HOME" component={HomeScreen} />
            <Tab.Screen name="TICKETS" component={Demo} />
            <Tab.Screen name="Offers" component={Demo} />
            <Tab.Screen name="MOVIES" component={Demo} />
            <Tab.Screen name="CINEMAS" component={Demo} />
        </Tab.Navigator>
    );
}

const styles = {
    container: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        shadowOpacity: 0.75,
        elevation: 1,
        height: 55,
        width:"100%",
        borderRadius:5,
        borderWidth: 0.3,
        borderColor: 'black'
    },
    actionButton: {
        backgroundColor: "#febb2f",
        justifyContent:"center",
        width: 50,
        height: 50,
        borderRadius: 50/2,
        position: "absolute",
        bottom : 25,
        left: 6,
        zIndex: 999,
    },
    buttonIcon: {
        textAlign: "center",
    },
    image: {
        height: 40,
        width:"100%",
    },
}

export default Routes;