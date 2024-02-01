const OpenAI = require('openai');
const openai = new OpenAI({
        apiKey: 'YOUR OpenAI API KEY',
        dangerouslyAllowBrowser: true
    });

export async function sendMsgToOpenAI(input) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: input }],
    model: "gpt-3.5-turbo",
  });

  return(completion.choices[0].message.content);
}