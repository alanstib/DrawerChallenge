import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { utilities } from '../../config/theme/utilities';
import { styles } from '../../config/theme/styles';
import { colors } from '../../config/theme/colors';

interface Props {
  navigation: any;
}

const NavigationHeader: FC<Props> = ({ navigation }) => {
  const title = 'START';

  return (
    <SafeAreaView style={utilities.bgWhite}>
      <View style={styles.navigationHeader}>
        <FontAwesome
          name="bars"
          size={30}
          color={colors.gray}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.navigationHeaderText}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default NavigationHeader;