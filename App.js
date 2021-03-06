import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './src/screen/LoginScreen'
import RegisterScreen from './src/screen/RegisterScreen'
import ListScreen from './src/screen/ListScreen'
import { createStore} from './node_modules/redux'
import {Provider} from 'react-redux'
import reducer from './src/reducer/reducer'



const Stack = createStackNavigator()
const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListScreen" screenOptions={{ headerShown: false, transitionSpec: { open: config, close: config } }} >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
     </Provider>
  )
}
const config = {
  animation: 'spring',
  config: {
    stiffness: 300,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}
export default App