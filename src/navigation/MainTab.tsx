import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack';
import { ContactScreen } from '../screens/ContactScreen';
import DrawerSceneWrapper from '../components/DrawerSceneWrapper';
import NavigationHeader from '../components/NavigationHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config/theme/colors';

const Tab = createBottomTabNavigator();

export function MainTab() {
  return (
    <DrawerSceneWrapper>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: props => <NavigationHeader navigation={props.navigation} />,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="home" size={30} color={colors.gray} />
            ),
            tabBarActiveTintColor: colors.mirage,
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="users" size={30} color={colors.gray} />
            ),
            tabBarActiveTintColor: colors.mirage,
          }}
        />
      </Tab.Navigator>
    </DrawerSceneWrapper>
  );
}
