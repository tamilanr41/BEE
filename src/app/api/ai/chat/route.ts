import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { question, userId } = await req.json();

    // Simulate AI response - in production, this would call OpenAI/GPT
    const simulatedResponse = `Thank you for your question about dental care. Based on your query, I can provide some general guidance. For personalized advice, please schedule a consultation with our dental team. Would you like to book an appointment?`;

    // Log the AI interaction
    await prisma.aILog.create({
      data: {
        feature: "ASSISTANT",
        request: question,
        response: simulatedResponse,
        model: "gpt-4",
        userId: userId || "anonymous",
      },
    });

    return NextResponse.json({
      response: simulatedResponse,
      disclaimer: "This is AI-generated guidance and not a substitute for professional dental advice.",
    });
  } catch (error) {
    return NextResponse.json({ error: "AI service error" }, { status: 500 });
  }
}
