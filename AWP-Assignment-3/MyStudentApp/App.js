import React from 'react';
import { NavigationContainer,StatusBar } from '@react-navigation/native';
import MainStack from './navigation/MainStack';

const App=()=>{
  return(
    <NavigationContainer>
      <MainStack/>
       
    </NavigationContainer>
  )
}
export default App;