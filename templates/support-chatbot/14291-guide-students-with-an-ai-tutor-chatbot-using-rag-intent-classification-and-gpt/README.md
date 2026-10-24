# 💬 Guide students with an AI tutor chatbot using RAG, intent classification and GPT-4o-mini

> ⚡ **465 views** · 💬 [Support Chatbots](../)

## Description

## Description

Automatically guide students through personalized learning sessions using AI-powered intent classification, book-based knowledge retrieval (RAG), and full session logging — all without writing a single line of code.

---

## What this workflow does

**Nathan** is an intelligent AI tutor chatbot that detects *what* the student is trying to do — greeting, asking a question, answering, introducing a topic, or going off-topic — and responds accordingly using the right teaching strategy every time.

**Key features:**

- **Smart intent classification** using DeepSeek LLM — identifies 5 intents: *greeting, topic, answer, question, random*
- **Dynamic system prompts** — fetches the right teaching prompt from Google Sheets based on the classified intent
- **RAG-powered answers** — GPT-4o-mini retrieves relevant content from a Pinecone book vector store to give accurate, book-grounded responses
- **Full session memory** — maintains conversation context with a sliding-window buffer for natural multi-turn dialogue
- **Automatic Q\&A logging** — every exchange is saved to Google Sheets for teacher review and auditing
- **Public chat interface** — students can access Nathan directly via browser without any login

---

## How it works

**Step 1 — User sends a message**
The public chat trigger receives the student's input and simultaneously fires two paths: one to the Intent Classifier and one to the Merge node for later combining.

**Step 2 — DeepSeek classifies intent**
The Intent Classifier agent (powered by DeepSeek LLM + sliding-window memory) reads the message and outputs exactly one word:
`greeting` / `topic` / `answer` / `question` / `random`

**Step 3 — Fetch matching system prompt**
The classified intent is used to look up the correct system prompt from the `pmt` tab in Google Sheets (filtered by the `Output` column). Each intent maps to a unique pedagogical strategy.

**Step 4 — Merge and aggregate**
The fetched prompt and original user input are merged and aggregated into a single payload, ready to be passed to the AI teacher.

**Step 5 — AI Teacher Agent generates response (RAG)**
GPT-4o-mini receives the system prompt, full session memory (last 10 turns), and uses the **Pinecone book vector store** as a retrieval tool (topK=3). It generates a pedagogically appropriate, book-grounded response.

**Step 6 — Log and return**
The session ID, user message, and AI response are appended to the `Preservation` tab in Google Sheets. The final response is formatted and returned to the student in the chat interface.

---

## Setup requirements

**Services you'll need:**

- n8n instance (self-hosted or n8n Cloud)
- DeepSeek API account
- OpenAI API account (for GPT-4o-mini and embeddings)
- Pinecone account (free tier works)
- Google account with Sheets access

**Estimated setup time:** 20–30 minutes

---

## Step-by-step setup

**1. Add credentials in n8n**

Go to *Settings → Credentials* and add:

- `DeepSeek` API key → connect to the **DeepSeek LLM** node
- `OpenAI` API key → connect to both **GPT-4o-mini LLM** and **OpenAI Embeddings** nodes
- `Google Sheets OAuth2` → connect to **Fetch System Prompt** and **Log Q\&A to Sheets** nodes
- `Pinecone` API key → connect to the **Book Knowledge Base** node

**2. Set up your Google Sheet**

Create a new Google Sheet with two tabs:

*Tab 1 — `pmt` (prompt library):*

| Output    | Prompt                             |
| --------- | ---------------------------------- |
| greeting  | You are Nathan, a friendly tutor…  |
| topic     | The student wants to learn about…  |
| answer    | The student has just answered…     |
| question  | The student is asking a question…  |
| random    | Gently redirect the conversation…  |

*Tab 2 — `Preservation` (Q\&A log):*

| Session | User Msg | AI Response |
| ------- | -------- | ----------- |
| *(auto-filled)* | *(auto-filled)* | *(auto-filled)* |

**3. Replace placeholder Sheet IDs**

In the workflow, find all nodes that contain `YOUR_GOOGLE_SHEET_ID` and replace with your actual Google Sheets document ID (found in the URL: `docs.google.com/spreadsheets/d/YOUR_ID_HERE`).

Also replace `YOUR_PRESERVATION_SHEET_GID` with the `gid` value of your Preservation tab.

**4. Set up Pinecone vector store**

- Create a Pinecone index named `rag-vector-db-book-quiz` (or rename the node to match your own index)
- Upload and embed your book/study material using the OpenAI Embeddings model
- The node is pre-configured to retrieve `topK=3` chunks per query

**5. Activate and test**

Enable the workflow, open the public chat URL, and send a test message like:
*"Hi, I want to learn about Newton's laws"*

You should see:
- Intent classified as `topic`
- Matching prompt fetched from Sheets
- GPT-4o-mini respond with a book-grounded explanation
- A new row added to the Preservation sheet

---

## Customization options

**Swap the classifier model**
Replace DeepSeek with any chat LLM (GPT-4o-mini, Gemini, Claude) in the Intent Classifier node — the prompt is model-agnostic.

**Add new intent categories**
Add a new row to the `pmt` tab with your intent keyword and system prompt. Then extend the classifier's system message to recognize the new category.

**Adjust retrieval depth**
Change `topK` in the Pinecone node from `3` to `5` or `10` to retrieve more book chunks per query — useful for complex or detailed topics.

**Change memory length**
The Classifier Memory and Teacher Session Memory both use a context window of 10 turns. Lower this for faster responses, increase it for longer multi-turn sessions.

**Embed multiple books**
Upload chapters from different books into the same Pinecone index. The agent automatically retrieves the most relevant chunks regardless of source.

---

## Troubleshooting

**Intent classifier returns unexpected output**
Make sure the DeepSeek system prompt ends with the exact instruction: *"Respond with only one word from this list."* Any extra text in the response will break the Google Sheets lookup.

**Google Sheets lookup returns no results**
Verify that the `Output` column in the `pmt` tab contains lowercase values matching exactly what DeepSeek outputs (e.g., `greeting` not `Greeting`).

**Pinecone returns empty results**
Confirm your index name matches the one in the node, your documents are embedded using the same OpenAI Embeddings model, and the index is not empty.

**Session memory not persisting across turns**
The session key is pulled from `$('Chat Trigger').item.json.sessionId`. Ensure you are using the same browser session (do not open in incognito) and the chat trigger is set to public mode.

**Preservation sheet not updating**
Check that the `Preservation` tab GID is correct and that your Google Sheets OAuth credentials have edit access to the document.

---

## Support

Need help setting this up or want a custom version for your school or platform?

📧 **Email:** [info@isawow.com](info@isawow.com)
🌐 **Website:** [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

Google Sheets, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory, Pinecone Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
