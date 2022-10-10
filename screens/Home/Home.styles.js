import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'flex-end',
  },
  chatButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    marginBottom: 50,
    marginRight: 20,
    shadowColor: colors.primary,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    width: 50,
  },
  avatar: {
    borderRadius: 100,
    height: 40,
    width: 40,
  },
});

export default styles;
