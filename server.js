import "dotenv/config";
import express from "express";
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";

const app = express();
app.use(express.json());
app.use(express.static("public"));

const client = new Anthropic();

const WordEntrySchema = z.object({
  word: z.string(),
  meanings: z
    .array(
      z.object({
        partOfSpeech: z.string(),
        definition: z.string(),
        collocations: z.array(z.string()),
        examples: z.array(z.string()),
      }),
    )
    .min(1),
});

app.post("/api/word", async (req, res) => {
  const word = typeof req.body?.word === "string" ? req.body.word.trim() : "";

  if (!word) {
    return res.status(400).json({ error: "Please enter a word to look up." });
  }
  if (word.length > 60 || !/^[a-zA-Z][a-zA-Z\s'-]*$/.test(word)) {
    return res
      .status(400)
      .json({ error: "Please enter a single valid English word or phrase." });
  }

  try {
    const response = await client.beta.messages.parse({
      model: "claude-opus-5",
      max_tokens: 4000,
      system:
        "You are a lexicographer building study material for English language learners (intermediate to advanced level). " +
        "For the word the user gives you, list every distinct common meaning (as a separate entry in `meanings`), covering different parts of speech separately when they apply. " +
        "For each meaning, write: (1) a clear, learner-friendly definition, (2) 3 to 5 natural collocations (common word combinations a learner should memorize alongside this meaning), and (3) exactly 2 or 3 example sentences. " +
        "Every example sentence MUST be a complete, natural sentence of at least 10 words, MUST clearly illustrate that specific meaning, and MUST use varied contexts across the examples. " +
        "If the word only has one common meaning, still return one entry in `meanings`.",
      messages: [
        {
          role: "user",
          content: `Give me the definitions, collocations, and example sentences for the word: "${word}"`,
        },
      ],
      output_format: betaZodOutputFormat(WordEntrySchema),
    });

    if (!response.parsed) {
      return res
        .status(502)
        .json({ error: "Could not generate an entry for that word. Please try again." });
    }

    res.json(response.parsed);
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      console.error("Anthropic authentication error:", error.message);
      res.status(500).json({ error: "Server is missing a valid ANTHROPIC_API_KEY." });
    } else if (error instanceof Anthropic.RateLimitError) {
      res.status(429).json({ error: "Rate limited. Please wait a moment and try again." });
    } else if (error instanceof Anthropic.APIError) {
      console.error("Anthropic API error:", error.status, error.message);
      res.status(502).json({ error: "The lookup service returned an error. Please try again." });
    } else {
      console.error("Unexpected error:", error);
      res.status(500).json({ error: "Something went wrong. Please try again." });
    }
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Vocabulary app running at http://localhost:${port}`);
});
