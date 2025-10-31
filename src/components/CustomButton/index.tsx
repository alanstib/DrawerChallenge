import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../../config/theme/styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.customButton}>
    <Text style={styles.customButtonText}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
