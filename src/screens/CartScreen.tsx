import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../config/theme/styles';

export const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Cart</Text>
    </View>
  );
};
