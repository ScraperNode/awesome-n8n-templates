# 💬 Create a multi-modal Telegram support bot with GPT-4 and Supabase RAG

> ⚡ **11,183 views** · 💬 [Support Chatbots](../)

## Description

## 🧠 What It Does
This n8n workflow turns your Telegram bot into a smart, multi-modal AI assistant that accepts **text**, **documents**, **images**, and **audio** messages, interprets them using OpenAI models, and responds instantly with context-aware answers.
It integrates a **Supabase vector database** to store document embeddings and retrieve relevant information before sending a prompt to OpenAI — enabling a full **RAG** experience

## 💡 Why This Workflow?
Most support bots can only handle basic text input. This workflow:
- Supports multiple input formats (voice, documents, images, text)
- Dynamically extracts and processes data from uploaded files
- Implements RAG by combining user input with relevant memory or vector-based context
- Delivers more accurate, relevant, and human-like AI responses.


## 👤 Who It's For

- Businesses looking to automate support using Telegram
- Freelancers or solopreneurs offering AI Chatbots for businesses.
- Creators building AI-powered bots for real use cases as it's great for Customer support knowledge, Legal or Policy document, long FAQs, Project documentation, and Product information retrieval.
- Devs or analysts exploring AI + multi-format input + vector memory.

## ⚙️ How It Works
### 🗂️ Knowledge Base Setup
Run the **“Add to Supabase Vector DB”** workflow manually to upload a document from your google drive and embed it into your vector database. This powers the Telegram chatbot’s ability to answer questions using your content. 
### 🔁 Telegram Message Routing
1. **Telegram Trigger** captures the user message (Text, Image, Voice, Document)
2. **Message Router** routes input by type using a Switch node
3. Each type is handled separately:
     - **Voice** → Translate recording to text (.ogg, .mp3)
     - **Image** → Analyze image to text.
     -  **Text** → Sent directly to AI Agent (.txt).
     - **Document** → Parsed (e.g. .docx to .txt) accordingly.

       #### 📎 Document Type Routing

       Before routing documents by type, the **Supported  Document File Types** node first checks if the file extension is allowed. If not supported, it exits early with an error message — preventing unnecessary processing.
Supported documents are then routed using the **Document Router** node, and converted to text for further processing.

       #### Supported Document File Types
       **.jpg**   **.jpeg**   **.png**   **.webp**   **.pdf**   **.doc**   **.docx**   **.xls**   **.xlsx**   **.json**   **.xml**.

4. The text content is combined with stored memory and embedded knowledge using a **RAG** approach, enabling the AI to respond based on real uploaded data.
   #### 🧠 RAG via Supabase
   Uploaded documents are vectorized using OpenAI Embeddings. Embeddings are stored in Supabase with metadata. On new questions, the chatbot:
   - Extracts question intent
   - Queries Supabase for semantically similar chunks
   - Ranks retrieved chunks to find the most relevant match.
   - Injects them into the prompt for OpenAI. 
   - OpenAI generates a grounded response based on actual document content.

5. Response is sent to the Telegram user with content awareness.

## 🛠 How to Set It Up

1. Open [n8n](https://www.n8n.io) or your local/self-hosted instance.
2. Import the `.json
` workflow file.
3. Set up these credentials:
   - **Google drive API Key**
   - **Telegram API (Bot Token) [Guide](https://docs.n8n.io/integrations/builtin/credentials/telegram/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal)**
   - **OpenAI API**
   - **Supabase API Key + Environment**
   - **ConvertAPI API Key**
   - **Postgres API Key**
   - **Cohere API Key**
   - **Add a prompt suited to your business.** Add a custom AI agent prompt that reflects your business domain, tone, and purpose. This is very important. Without it, your agent won't know how best to respond.
4. Activate the workflow.
5. Start testing by sending a message or document to your Telegram bot.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
