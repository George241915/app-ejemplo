import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import fetchChatGPTResponse from './Api';

const ChatScreen = () => {
  const [message, setInputMessage] = useState('');
  const [outputMessage, setOutputMessage] = useState('');

  const handleSendMessage = async () => {
    const response = await fetchChatGPTResponse('Eres un convertidor binario y dime el binario de' + message);
    setOutputMessage(response);
  };

  return (
    <View style={styles.container}> 
      <TextInput
        value={message}
        onChangeText={setInputMessage}
        placeholder="Escribe tu mensaje"
      />
      <Button title="Enviar" onPress={handleSendMessage} />
      <Text>{outputMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#E8EAED",
      display: "flex",
      alignItems: "center"
    },
  });

export default ChatScreen;
