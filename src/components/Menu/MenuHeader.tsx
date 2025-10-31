import { Text, View } from 'react-native';
import { styles } from '../../config/theme/styles';

export const MenuHeader = () => {
  return (
    <View style={styles.menuHeader}>
      <Text style={styles.menuHeaderText}>
        Beka
      </Text>
    </View>
  );
};
