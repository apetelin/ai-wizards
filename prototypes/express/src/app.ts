import express, {Request, Response} from 'express';
import * as dotenv from 'dotenv';
import {ChatOpenAI} from "langchain/chat_models/openai";
import {HumanChatMessage, SystemChatMessage} from "langchain/schema";

dotenv.config({path: require('find-config')('.env')});
const app = express();
const port = process.env.PORT || 3000;
const openai_api_key = process.env.OPENAI_API_KEY

app.use(express.text());

app.post('/convertPipeline', async (req: Request, res: Response) => {
    const inboundContent = req.body;

    if (!inboundContent || inboundContent.trim().length === 0) {
        return res.status(400).send('Bad Request: Missing required content');
    }

    try {
        const outboundContent = await convertPipeline(inboundContent);
        return res.send(outboundContent);
    } catch (error) {
        return res.status(500).send('Server Error: Something went wrong');
    }
});

async function convertPipeline(content: any): Promise<any> {
    const chat = new ChatOpenAI({temperature: 0, openAIApiKey: openai_api_key});
    return await chat.call([
        new SystemChatMessage(
            "You're a professional DevOps engineer with 5+ years of experience."
        ),
        new HumanChatMessage("Convert the following Jenkins pipeline to GitHub Actions pipeline:\n"
            + content),
    ]);
}

app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default app;