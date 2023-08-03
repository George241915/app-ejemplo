/*import React from "react";
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const fetchChatGPTResponse = async (message) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 50,
        temperature: 0,
      }),
    });

    const data = await response.json();
    return data.choices[0].text.trim();
  } catch (error) {
    console.error('Error al obtener la respuesta de ChatGPT:', error);
    return null;
  }
};*/
import axios from 'axios';

const apiUrl = 'https://api.openai.com/v1/completions';

const fetchChatGPTResponse = async (message) => {
  try {
    const response = await axios.post(apiUrl, {
      model: 'text-davinci-003',
      prompt:  message,
      temperature: 0, // Ajusta la temperatura según tus preferencias
      max_tokens: 50, // Define la longitud máxima de la respuesta generada
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ',
      },
    });
    const tokensConsumidos = response.data.usage.total_tokens;
    return response.data.choices[0].text + " /tokens consumidos /" + tokensConsumidos;
    

  } catch (error) {
    console.error('Error al obtener la respuesta de ChatGPT:', error);
    return null;
  }
};

  
export default fetchChatGPTResponse;