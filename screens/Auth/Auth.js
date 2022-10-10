import React, { useState, useMemo } from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../config/firebase';
import styles from './Auth.styles';
const backImage = require('../../assets/bg.jpg');

const AuthScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const title = useMemo(() => (isLogin ? 'Log In' : 'Sign Up'), [isLogin]);
  const createAccountLabel = useMemo(
    () => (isLogin ? "Don't have an account?" : 'I already have an account'),
    [isLogin]
  );
  const createAccountCTA = useMemo(
    () => (isLogin ? 'Sign Up' : 'Login'),
    [isLogin]
  );

  const handleToggleAuth = () => setIsLogin((prev) => !prev);

  const onHandleAuth = () => {
    if (email !== '' && password !== '') {
      if (isLogin) {
        signInWithEmailAndPassword(auth, email, password)
          .then(() => console.log('Login success'))
          .catch((err) => Alert.alert('Login error', err.message));
      } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => console.log('Signup success'))
          .catch((err) => {
            console.log(
              '🚀 ~ file: Auth.js ~ line 47 ~ onHandleAuth ~ err',
              err
            );
            return Alert.alert('Login error', err.message);
          });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={onHandleAuth}>
          <Text style={styles.loginButton}>{title}</Text>
        </TouchableOpacity>
        <View style={styles.createAccountContainer}>
          <Text style={styles.createAccountLabel}>{createAccountLabel} </Text>
          <TouchableOpacity onPress={handleToggleAuth}>
            <Text style={styles.createAccountButton}>{createAccountCTA}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default AuthScreen;
