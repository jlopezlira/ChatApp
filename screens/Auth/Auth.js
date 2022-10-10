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
const backImage = require('../../assets/bg.jpg');

const AuthScreen = () => {
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
            return Alert.alert('Login error', err.message);
          });
      }
    }
  };

  return (
    <View className="flex-1">
      <Image source={backImage} className="absolute cover" />
      <View className="bg-zinc-100 rounded-tl-[60] bottom-0 h-[75%] absolute w-screen" />
      <SafeAreaView className="flex-1 m-8 justify-center">
        <Text className="w-full text-center p-1 my-5 font-medium text-4xl">
          {title}
        </Text>
        <TextInput
          className="w-full bg-white text-base px-4 rounded-lg h-14 leading-5 mb-4"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          className="w-full bg-white text-base px-4 rounded-lg h-14 leading-5 mb-4"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          className=" items-center justify-center bg-zinc-800 rounded-md h-14"
          onPress={onHandleAuth}
        >
          <Text className="text-xl font-medium text-zinc-50">{title}</Text>
        </TouchableOpacity>
        <View className="items-center mt-5 flex-row justify-center">
          <Text>{createAccountLabel}</Text>
          <TouchableOpacity onPress={handleToggleAuth}>
            <Text className="ml-1 font-bold">{createAccountCTA}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default AuthScreen;
