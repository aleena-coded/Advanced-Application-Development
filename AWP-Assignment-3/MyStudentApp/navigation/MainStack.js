import React from 'react';
import{createNativeStackNavigator} from '@react-navigation/native-stack';

import AddStudentScreen from '../Screens/AddStudentScreen';
import HomeScreen from '../Screens/HomeScreen';
import ScrollScreen from '../Screens/ScrollScreenInfo';
import StudentDetails from '../Screens/StudentDetailScreen';

const Stack=createNativeStackNavigator();
const MainStack=()=>{
    return(
        <Stack.Navigator 
        initialRouteName="Home">
            <Stack.Screen
            name="Home"
            component={HomeScreen}/>

            <Stack.Screen
            name="AddStudent"
            component={AddStudentScreen} 
/>

            <Stack.Screen
            name="Details"
            component={StudentDetails}
            options={{ title: 'Student Details' }}/>

            <Stack.Screen
            name="Scroll"
            component={ScrollScreen}/>
        </Stack.Navigator>
    )
}
export default MainStack;