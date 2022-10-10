import React, { useState, useLayoutEffect, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, database } from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../styles/globals';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  const onSignOut = () => {
    signOut(auth).catch((error) => console.log('Error logging out: ', error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onSignOut}>
          <AntDesign name="logout" size={18} color={colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useLayoutEffect(() => {
    const collectionRef = collection(database, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <View className="flex-1 bg-white">
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={false}
        onSend={(messages) => onSend(messages)}
        messagesContainerStyle={{
          backgroundColor: colors.white,
        }}
        textInputStyle={{
          backgroundColor: colors.white,
        }}
        user={{
          _id: auth?.currentUser?.email,
          avatar: 'https://i.pravatar.cc/300',
        }}
      />
    </View>
  );
};

export default Chat;
