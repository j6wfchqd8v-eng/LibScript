import OpenAI from "openai";

export async function POST(req: Request) {
  const { question, notes } = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Jsi studijní asistent. Odpovídej POUZE z dodaných poznámek.",
      },
      {
        role: "user",
        content: `Poznámky:\n${notes}\n\nOtázka:\n${question}`,
      },
    ],
  });

  return Response.json({
    answer: completion.choices[0].message.content,
  });
}
