import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import * as dotenv from 'dotenv';
import {Request, Response} from 'express';

dotenv.config({ path: require('find-config')('.env') });
console.log(`process.env.OPENAI_API_KEY: ${process.env.OPENAI_API_KEY}`)

const chatopenai = new ChatOpenAI({ temperature: 0, openAIApiKey: process.env.OPENAI_API_KEY });

const convertPipeline = async (req: Request, res: Response) => {
  const humanPrompt = req.body;

  console.log(`got request to: convertPipeline`)

  if (!humanPrompt || Object.values(humanPrompt || {}).length === 0 || humanPrompt.trim().length === 0) {
    return res.status(400).json({
      success: false,
      error: 'Bad Request: Missing required content',
    });
  }

  try {
    const outboundContent = await chatopenai.call([
      new SystemChatMessage(
        "You're a professional DevOps engineer with 5+ years of experience."
      ),
      new HumanChatMessage("Convert the following Jenkins pipeline to GitHub Actions pipeline:\n"
        + humanPrompt),
    ]);

    console.log(outboundContent.toJSON())



    res.status(200).json({
      success: true,
      data: outboundContent,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error: Something went wrong',
    });
  }
}

module.exports = { convertPipeline };