import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreens/LoginScreen';
import ForgotPasswordScreen from '../screens/LoginScreens/ForgotPasswordScreen';
import RegisterScreen from '../screens/LoginScreens/RegisterScreen';
import { themedHeaderOptions } from '../theme/theme';

const Stack = createNativeStackNavigator();

export default function LoginStack() {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={themedHeaderOptions}
        />
        <Stack.Screen
          name="Recuperar senha"
          component={ForgotPasswordScreen}
          options={themedHeaderOptions}
        />
        <Stack.Screen
          name="Cadastre-se"
          component={RegisterScreen}
          options={themedHeaderOptions}
        />
      </Stack.Navigator >
    </NavigationContainer >
  )
}
