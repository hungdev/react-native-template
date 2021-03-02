import React from 'react';
import { Button, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import Login from '../screens/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewFeed"
        component={Home}
        options={({ route }) => ({
          title: `Article by ${route.params?.author ?? 'Unknown'}`,
        })}
        initialParams={{ author: 'Gandalf' }}
      />
      <Stack.Screen
        name="PostScreen"
        component={Profile}
        options={{ title: 'Feed' }}
      />
      <Stack.Screen
        name="Albums"
        component={Profile}
        options={{ title: 'Albums' }}
      />
    </Stack.Navigator>
  );
}
function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bookmark"
        component={Setting}
        options={({ route }) => ({
          title: `Article by ${route.params?.author ?? 'Unknown'}`,
        })}
        initialParams={{ author: 'Gandalf' }}
      />
    </Stack.Navigator>
  );
}

function TabHome() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'beer' : 'beer-outline';
          } else if (route.name === 'Bookmark') {
            iconName = focused ? 'beer' : 'beer-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Bookmark" component={SettingStack} />
    </Tab.Navigator>
  );
}

function ContainerStack() {
  const store = useSelector(store => store);
  const isAuth = store.auth.user
  return (
    <Stack.Navigator>
      {!isAuth ? (
        <>
          <Stack.Screen name="SignIn" component={Login} options={{ headerShown: false }} />
          {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
          {/* <Stack.Screen name="ResetPassword" component={ResetPassword} /> */}
        </>
      ) :
        (
          <>
            <Stack.Screen
              name="Home"
              component={TabHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Profile" component={Profile} />
            {/* <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} /> */}
          </>
        )
      }
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <ContainerStack />
    </NavigationContainer>
  );
}

export default App;
