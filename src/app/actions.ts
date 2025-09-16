"use server";

// import { generatePersonalizedMelody } from "@/ai/flows/generate-personalized-melody";

type ActionResult = {
  message: string;
  audioUrl: string | null;
  error?: boolean;
};

export async function createMelodyAction(
  prompt: string
): Promise<ActionResult> {
  if (!prompt || prompt.trim().length < 10) {
    return {
      message:
        "Please provide more details about your desired outcome (at least 10 characters).",
      audioUrl: null,
      error: true,
    };
  }

  try {
    // const result = await generatePersonalizedMelody(prompt);
    // if (!result.media) {
    //   throw new Error("The AI did not return a melody.");
    // }
    return {
      message: "Your personalized melody is ready!",
      // audioUrl: result.media,
      audioUrl: null
    };
  } catch (error) {
    console.error(error);
    return {
      message:
        "An error occurred while generating your melody. Please try again later.",
      audioUrl: null,
      error: true,
    };
  }
}
