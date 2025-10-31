import { CommonActions, useNavigationState } from '@react-navigation/native';
import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { MenuHeader } from './MenuHeader';
import MenuItem from './MenuItem';
import { MenuItems } from './constants';
import { styles } from '../../config/theme/styles';
import { noop } from '../../helpers/utils';

interface IMenuItem {
  title: string;
  screenName: string;
}

const getActiveRouteName = (state: any): string | undefined => {
  if (!state) return 'Screen1';
  
  const activeRoute = state.routes[state.index];
  
  if (activeRoute.state) {
    return getActiveRouteName(activeRoute.state);
  }

  if (activeRoute.name === 'MainTab' || activeRoute.name === 'Screen2') {
    return 'Screen1';
  }
  
  return activeRoute.name;
};

const MenuContent = ({ navigation }: any) => {
  let items = MenuItems.items as IMenuItem[];

  const activeScreenName = useNavigationState(getActiveRouteName);

  const renderItem: ListRenderItem<IMenuItem> = ({ item }) => (
    <MenuItem
      title={item.title}
      onPress={() => handleItemClick(item)}
      selected={item.screenName === activeScreenName}
    />
  );

  const handleItemClick = (item: IMenuItem) => {
    if (item.screenName === 'Screen1') {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'MainTab',
          params: {
            screen: 'Home',
            params: {
              screen: 'Screen1',
            },
          },
        }),
      );
    } else {
      navigation.dispatch(
        CommonActions.navigate({
          name: item.screenName,
        }),
      );
    }
  };

  return (
    <View style={styles.menuContainer}>
      <MenuHeader />
      <FlatList
        data={items}
        scrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        style={styles.menuList}
      />
      <View style={styles.menuSeparator} />
      <MenuItem title="Sign Out" onPress={noop} selected={false} />
    </View>
  );
};

export default MenuContent;
