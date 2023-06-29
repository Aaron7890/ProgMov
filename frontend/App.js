import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Api from './screens/Api';
import Registro from './screens/Registro';

export default function App() {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Api" component={Api} />
        <stack.Screen name="Registro" component={Registro} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

