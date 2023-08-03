import React, { useState } from 'react';
import { OpenAI } from 'langchain/llms/openai';
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
//import { PDFLoader } from "langchain/document_loaders/fs/pdf";
/*import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RetrievalQAChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";*/

/*const loader = new PDFLoader("src/document_loaders/example_data/example.pdf", {
  splitPages: false,
});

const docs = await loader.load();

const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 0,
});

const splitDocs = await textSplitter.splitDocuments(docs);

const embeddings = new OpenAIEmbeddings();

const vectorStore = await MemoryVectorStore.fromDocuments(splitDocs, embeddings);*/

const llm = new OpenAI({
    openAIApiKey: "",
    temperature: 0,
    maxTokens: 50,    
  });

 /* const model = new ChatOpenAI({ modelName: "gpt-3.5-turbo" });
const chain = RetrievalQAChain.fromLLM(model, vectorstore.asRetriever());

const response = await chain.call({
  query: "What is task decomposition?"
});

console.log(response);*/

const ChatPDF = () => {
  const [question, setQuestion] = useState('');
  const [answer, setanswer] = useState('');

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

    // Obtén la respuesta a la pregunta
    setanswer(response["response"]);
    
  };

  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={onQuestionChange}
      />
      
      <button onClick={onQuestionSubmit}>Hacer pregunta</button>
      <p>Respuesta: {answer}</p>
      
    </div>
  );
};

export default ChatPDF;
