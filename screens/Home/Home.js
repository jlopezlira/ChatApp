import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { colors, styles } from '../../styles/globals';

const avatar = require('../../assets/bg.jpg');

const Home = () => {
  const navigation = useNavigation();

  const onSignOut = () => {
    signOut(auth).catch((error) => console.log('Error logging out: ', error));
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Image source={avatar} className="rounded-full w-[35] h-[35]" />
      ),
      headerRight: () => (
        <TouchableOpacity onPress={onSignOut}>
          <AntDesign name="logout" size={18} color={colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View className="flex-1 items-end justify-end bg-zinc-100">
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={styles.shadow}
        className=" items-center justify-center w-[50] h-[50] bg-zinc-800 rounded-full right-6 bottom-6 shadow-2xl"
      >
        <Entypo name="chat" size={24} color={colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
