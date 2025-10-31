import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../navigation/types';
import { styles } from '../config/theme/styles';
import CustomButton from '../components/CustomButton';

type NavigationProp = StackNavigationProp<HomeStackParamList>;

export const Screen1 = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Screen 1</Text>
      <CustomButton
        text="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};
