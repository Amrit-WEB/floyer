import Groq from "groq-sdk";
require("dotenv").config();

const groq = new Groq({
  apiKey: process.env.groq_api,
  dangerouslyAllowBrowser: true,
});

export async function chatKaro(userInp, preprocessedData) {
  const chatCompletion = await getGroqChatCompletion(userInp, preprocessedData);
  // Print the completion returned by the LLM.
  return chatCompletion.choices[0]?.message?.content || "";
}

export async function getGroqChatCompletion(userInp, preprocessedData) {
  const prompt = `
    Based on the following trends: ${JSON.stringify(preprocessedData)}, 
    answer the user's question: "${userInp}".
  `;
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama3-8b-8192",
  });
}
