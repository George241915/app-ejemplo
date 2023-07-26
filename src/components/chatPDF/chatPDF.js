import React, { useState } from 'react';
import { OpenAI } from 'langchain/llms/openai';
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";


const llm = new OpenAI({
    openAIApiKey: "",
    temperature: 0,
    maxTokens: 50,    
  });

const ChatPDF = () => {
  const [question, setQuestion] = useState('');
  const [question1, setQuestion1] = useState('');
  const [answer, setanswer] = useState('');
  const [answer1, setanswer1] = useState('');

  const onQuestionChange = (event) => {
    setQuestion(event.target.value);
  };
  
  const onQuestionSubmit = async () => {

    //const hola = await llm.predict('como te llamas')
    //console.log(hola)

    // Carga el PDF en Lang Chain
   

    // Haz una pregunta sobre el PDF
    const memory = new BufferMemory();
    const chain = new ConversationChain({ llm: llm, memory: memory });
    const response = await chain.call({input: question});
    console.log({response})
    const response1 = await chain.call({input: question1});

    // Obtén la respuesta a la pregunta
    setanswer(response["response"]);
    setanswer1(response1["response"]);
  };

  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={onQuestionChange}
      />
      
      <button onClick={onQuestionSubmit}>Hacer pregunta</button>
      <input
        type="text"
        value={question1}
        onChange={setQuestion1= ()=> (question1) }
      />
      <p>Respuesta: {answer} {answer1}</p>
      
    </div>
  );
};

export default ChatPDF;
