import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  screenTitle: {
    paddingBottom: 16,
    fontSize: 32,
  },
  customButton: {
    width: '100%',
    backgroundColor: colors.brown,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  customButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  menuContainer: {
    backgroundColor: colors.mirage,
    flex: 1,
  },
  menuList: {
    flexGrow: 0,
  },
  menuHeader: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuHeaderText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuItem: {
    backgroundColor: 'transparent',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 2,
    borderRadius: 10,
  },
  menuItemSelected: {
    backgroundColor: colors.brown,
  },
  menuItemText: {
    color: colors.white,
    fontSize: 20,
  },
  menuItemTextSelected: {
    color: colors.roman,
  },
  menuSeparator: {
    height: 1,
    backgroundColor: colors.gray,
    margin: 32,
  },
  navigationHeader: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  navigationHeaderText: {
    color: colors.gray,
    letterSpacing: 2.5,
    fontSize: 22,
    paddingLeft: 16,
  },
});
