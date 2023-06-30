import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import fetchChatGPTResponse from './Api';

const ChatScreen = () => {
  const [message, setInputMessage] = useState('');
  const [outputMessage, setOutputMessage] = useState('');

  const handleSendMessage = async () => {
    const response = await fetchChatGPTResponse(message);
    setOutputMessage(response);
  };

  return (
    <View>
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

export default ChatScreen;
