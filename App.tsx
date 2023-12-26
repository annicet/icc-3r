/* import Login from './src/screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' */
import React, { type ReactElement } from "react";
/* import Home from './src/screens/Home'
import { type User } from './src/models/User' */
import Main from "./src/screens/Main";

/* const Stack = createNativeStackNavigator()
export const AuthContext = React.createContext({
  user: {},
  setUser: (user: any) => {}
}) */

export default function App(): ReactElement {
  // const [user, setUser] = useState()
  return (
    /*    <AuthContext.Provider value={{ user:
       user as any, setUser: setUser as any }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider> */
    <Main />
  );
}
