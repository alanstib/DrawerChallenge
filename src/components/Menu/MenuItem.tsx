import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../../config/theme/styles';

export interface IMenuItem {
  title: string;
  onPress?: () => void;
  screenName?: string;
  selected?: boolean;
}

const MenuItem: FC<IMenuItem> = ({ title, onPress, selected }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.menuItem, selected && styles.menuItemSelected]}
  >
    <Text
      style={[styles.menuItemText, selected && styles.menuItemTextSelected]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export default MenuItem;
