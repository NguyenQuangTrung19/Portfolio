import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { systemPrompt } from "@/lib/system-prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: anthropic("claude-3-5-haiku-latest"),
    system: systemPrompt,
    messages,
    maxOutputTokens: 500,
  });

  return result.toTextStreamResponse();
}
