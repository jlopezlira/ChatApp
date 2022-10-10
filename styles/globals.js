import { StyleSheet } from 'react-native';

const colors = {
  primary: '#1f2937',
  gray: 'gray',
  mediumGray: '#f8f8f8',
  lightGray: '#FAFAFA',
  white: 'white',
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.primary,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
  },
});

export { colors, styles };
