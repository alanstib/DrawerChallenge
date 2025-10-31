import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../navigation/types';
import { styles } from '../config/theme/styles';
import CustomButton from '../components/CustomButton';

type NavigationProp = StackNavigationProp<HomeStackParamList>;

export const Screen2 = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Screen 2</Text>
      <CustomButton
        text="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
