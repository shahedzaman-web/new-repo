import React, { useContext } from "react";
import { NavigationContainer, DefaultTheme, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/screens/signin";
import Scan from "./src/screens/scan";
import ProductDetails from "./src/screens/productDetails";
import Sale from "./src/screens/sale";
import { SimpleLineIcons } from "@expo/vector-icons";
import authStorage from "./src/utils/authStorage";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import DataProvider, { DataContext } from "./src/context/DataContext";
import Home from "./src/screens/home";

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

const Stack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

export default function App() {
  const Root = () => {
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState(false);
    const { logged, userInfo, setUserInfo } = React.useContext(DataContext);

    React.useEffect(() => {
      async function getUser() {
        setLoading(true);
        const token = await authStorage.getAuthToken();

        const parsedToken = JSON.parse(token);

        if (token !== null) {
          setUserInfo(parsedToken);
          setUser(true);
          setLoading(false);
        } else {
          setLoading(false);
          setUser(false);
        }
      }

      getUser();
    }, []);

    if (loading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      );
    }

    const AppNavigator = () => {
      const { setLogged, logged, setUserInfo } = React.useContext(DataContext);
      const navigation =useNavigation()
      const handleSignOut = async () => {
        await setUserInfo({});
        await authStorage.removeAuthToken();
        navigation.replace("Login");
      };
      return (
        <AppStack.Navigator
          screenOptions={{
            headerRight: () => (
              <TouchableOpacity onPress={handleSignOut}>
                <SimpleLineIcons name="logout" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        >
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Sale" component={Sale} />
          <AppStack.Screen name="Scan" component={Scan} />
          <AppStack.Screen name="Product" component={ProductDetails} />
        </AppStack.Navigator>
      );
    };

    return (
      <NavigationContainer theme={appTheme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={user ? "App" : "Login"}
        >
          <Stack.Screen name="App" component={AppNavigator} />
          <Stack.Screen
            name="Login"
            component={SignIn}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <DataProvider>
      <StatusBar barStyle="dark-content" />
      <Root />
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
