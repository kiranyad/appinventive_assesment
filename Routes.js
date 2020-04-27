import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DashboardTabRoutes from './screens/Dashboard/Routes';
import CustomHeader from './components/CustomHeader';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Home" component={HomeScreen} navigationOptions={{headerTitle: "Home"}}/> */}
            <Stack.Screen name="Home" component={DashboardTabRoutes} 
                options={{
                    header: props => <CustomHeader {...props} />
                }}
            />
        </Stack.Navigator>
    );
}

export default Routes; 
