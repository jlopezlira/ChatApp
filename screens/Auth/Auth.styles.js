import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    color: colors.primary,
    fontSize: 36,
    fontWeight: 'bold',
    paddingBottom: 24,
  },
  input: {
    backgroundColor: colors.mediumGray,
    borderRadius: 10,
    fontSize: 16,
    height: 58,
    marginBottom: 20,
    padding: 12,
  },
  backImage: {
    height: 340,
    position: 'absolute',
    resizeMode: 'cover',
    top: 0,
    width: '100%',
  },
  whiteSheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 60,
    bottom: 0,
    height: '75%',
    position: 'absolute',
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 58,
    justifyContent: 'center',
    marginTop: 40,
  },
  loginButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  createAccountLabel: {
    color: colors.gray,
    fontSize: 14,
    fontWeight: '600',
  },
  createAccountButton: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default styles;
