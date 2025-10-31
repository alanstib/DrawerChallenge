import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuContent from '../components/Menu/MenuContent';
import NavigationHeader from '../components/NavigationHeader';
import { MainTab } from './MainTab';
import { colors } from '../config/theme/colors';
import { CartScreen } from '../screens/CartScreen';
import { FavouritesScreen } from '../screens/FavouritesScreen';
import { OrdersScreen } from '../screens/OrdersScreen';

const DrawerStack = createDrawerNavigator();

export function Router() {
  return (
    <DrawerStack.Navigator
      initialRouteName="MainTab"
      screenOptions={{
        header: props => <NavigationHeader navigation={props.navigation} />,
        swipeEnabled: true,
        overlayColor: 'transparent',
        drawerType: 'slide',
        sceneStyle: {
          backgroundColor: colors.mirage,
        },
        drawerStyle: {
          backgroundColor: colors.white,
          width: '65%',
        },
      }}
      drawerContent={props => <MenuContent {...props} />}
    >
      <DrawerStack.Screen
        name="MainTab"
        component={MainTab}
        options={{ headerShown: false }}
      />
      <DrawerStack.Screen
        name="CartScreen"
        component={CartScreen}
      />
      <DrawerStack.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
      />
      <DrawerStack.Screen
        name="OrdersScreen"
        component={OrdersScreen}
      />
    </DrawerStack.Navigator>
  );
}
