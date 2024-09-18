import { chatKaro } from "./../utils/chatApi";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

import { useState } from "react";

export default function Chat(props) {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([]);

  //Handle send and give reply
  const handleSend = async (mess) => {
    //get new message
    const userNewMessage = {
      message: mess,
      sender: "You",
      direction: "outgoing",
    };
    //update new one with previous message
    messages.push(userNewMessage);

    //Groq Typing
    setTyping(true);

    //calling api fro reply
    const preData = props.preData.dataFilter;

    await chatKaro(mess, preData)
      .then((res) => {
        return res;
      })
      .then((res) => {
        const groqNewMessage = {
          message: res,
          sender: "Groq",
          direction: "incoming",
        };
        messages.push(groqNewMessage);
        setTyping(false);
      })
      .catch((err) => {
        const groqNewMessage = {
          message: "Something went wrong! try again",
          sender: "Groq",
          direction: "incoming",
        };
        messages.push(groqNewMessage);
        setTyping(false);
      });
  };

  return (
    <div style={{ width: "350px", height: "400px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={
              typing ? <TypingIndicator content="Groq is typing" /> : null
            }
          >
            {messages.map((item, index) => (
              <Message key={index} model={item} />
            ))}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
