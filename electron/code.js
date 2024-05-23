// var OpenAI = require("openai");

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY || 'Your-API-Key-Here' // Replace with your actual API key
//   });

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// //main();

// function chatGPTcall(data) {
//     console.log("Data received:", data);
//     // Your logic here
//   }
  
//   module.exports = chatGPTcall;

var OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'Ysk-proj-cshLVOnsAo4pWqlNUrbxT3BlbkFJ2bzCivmgjxHyaL15ziNA' // Replace with your actual API key
});

async function chatGPTcall(data) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: data }
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}

// Export the main function
module.exports = chatGPTcall;