import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config({path: require('find-config')('.env')});
console.log(`process.env.PORT: ${process.env.PORT}`)

const app = express();
const port = process.env.PORT || 3000;

app.use(express.text());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/aiwizards', require('./routes/aiwizardsRoutes'));

app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default app;




// app.post('/convertPipeline', async (req: Request, res: Response) => {
//     const inboundContent = req.body;
//     if (!inboundContent || Object.values(inboundContent || {}).length === 0 || inboundContent.trim().length === 0) {
//         return res.status(400).send('Bad Request: Missing required content');
//     }
//     try {
//         const outboundContent = await convertPipeline(inboundContent);
//         return res.send(outboundContent);
//     } catch (error) {
//         return res.status(500).send('Server Error: Something went wrong');
//     }
// });

// async function convertPipeline(content: any): Promise<any> {
//     const chat = new ChatOpenAI({temperature: 0, openAIApiKey: openai_api_key});
//     return await chat.call([
//         new SystemChatMessage(
//             "You're a professional DevOps engineer with 5+ years of experience."
//         ),
//         new HumanChatMessage("Convert the following Jenkins pipeline to GitHub Actions pipeline:\n"
//             + content),
//     ]);
// }
