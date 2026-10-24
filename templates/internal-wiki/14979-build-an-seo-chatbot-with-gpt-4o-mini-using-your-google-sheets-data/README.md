# 📖 Build an SEO chatbot with GPT-4o-mini using your Google Sheets data

> ⚡ **103 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

### Description

Add your approved SEO Q&A pairs to a Google Sheet, activate the workflow, and share the chat URL with your team or clients. The chatbot reads your entire knowledge base on every question and answers strictly from your own content — never from outside sources. Every conversation is automatically logged to a second sheet so you can track common questions and improve your knowledge base over time. Built for SEO agencies, consultants, and marketing teams who want a branded AI assistant without hallucinated or off-brand answers.

---

## What This Workflow Does

- **Reads your knowledge base live** — Pulls all Q&A rows from your Google Sheet on every question so answers always reflect your latest approved content
- **Answers strictly from your content** — GPT-4o-mini is instructed to never use outside knowledge, keeping every response on-brand and accurate
- **Delivers an honest fallback** — If a question is not covered in your sheet, the bot tells the user directly and points them to your support team instead of guessing
- **Maintains conversation memory** — Users can ask follow-up questions naturally without repeating context, just like a real chat
- **Logs every exchange automatically** — Appends each session ID, timestamp, question, and answer to a Chat Log sheet for analytics and gap identification
- **Returns the reply in real time** — The answer is sent back to the chat interface instantly at the same time as it is being logged

---

## Setup Requirements

### Tools Needed
- n8n instance (self-hosted or cloud)
- OpenAI account with GPT-4o-mini API access
- Google account with two Google Sheets (one for the knowledge base, one for the chat log)

### Credentials Required
- OpenAI API key
- Google Sheets OAuth2 (used in two steps — read and log)

&gt; ⚠️ **Google Sheets OAuth2 appears in 2 steps** — connect it in both **3. Google Sheets — Read Knowledge Base** and **9. Google Sheets — Log Chat**

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON → paste the workflow JSON → click Import

2. **Create your Knowledge Base sheet** — Open Google Sheets → create a new sheet → add a tab named exactly **SEO FAQ** → add these four column headers in row 1: `Question`, `Answer`, `Category`, `Last Updated` → fill in at least 5–10 Q&A rows before testing

3. **Create your Chat Log sheet** — In the same Google Sheet or a separate one → add a tab named exactly **Chat Log** → add these four column headers in row 1: `Session ID`, `Timestamp`, `User Question`, `Bot Answer`

4. **Fill in Config Values** — Open node **2. Set — Config Values** → replace all placeholders:

| Field | What to enter |
|---|---|
| `YOUR_KNOWLEDGE_BASE_SHEET_ID` | The ID from your Knowledge Base sheet URL (the string between `/d/` and `/edit`) |
| `SEO FAQ` | Leave as-is, or change to match your tab name exactly |
| `YOUR_CHAT_LOG_SHEET_ID` | The ID from your Chat Log sheet URL (same method) |
| `Chat Log` | Leave as-is, or change to match your log tab name exactly |
| `YOUR COMPANY NAME` | Your agency or business name |
| `botPersona` | Edit the persona description to match your brand voice |

5. **Connect Google Sheets for reading** — Open node **3. Google Sheets — Read Knowledge Base** → click the credential dropdown → add Google Sheets OAuth2 → sign in with your Google account → authorize access

6. **Connect OpenAI** — Open node **6. OpenAI — GPT-4o-mini Model** → click the credential dropdown → add your OpenAI API key → test the connection

7. **Connect Google Sheets for logging** — Open node **9. Google Sheets — Log Chat** → click the credential dropdown → select the same Google Sheets OAuth2 credential you connected in step 5

8. **Activate the workflow** — Toggle the workflow to Active → click on node **1. Chat Message Received** → copy the Chat URL shown → share this URL with your team or embed it in your site

---

## How It Works (Step by Step)

**Step 1 — Chat Trigger: Receive User Question**
This step creates a public chat interface at a shareable URL. Every time a user types a message and hits send, that message is passed to the next step automatically. No credentials are needed for this step — it works as soon as the workflow is active.

**Step 2 — Set: Config Values**
Your knowledge base Sheet ID, log Sheet ID, tab names, company name, and bot persona are stored here as named variables. A unique session ID is also generated automatically for each new conversation so chats can be tracked individually in the log.

**Step 3 — Google Sheets: Read Knowledge Base**
The full contents of your SEO FAQ tab are read from Google Sheets every time a question comes in. This means you can add, edit, or remove Q&A rows at any time and the chatbot will reflect your changes immediately — no redeployment needed.

**Step 4 — Code: Build Knowledge Base Text**
All the rows from your sheet are formatted into a numbered Q&A text block grouped by category. The user's question is also pulled from the chat trigger here. If the sheet is empty, a clear fallback message is used instead of crashing the workflow. Everything is assembled into one clean package for the AI step.

**Step 5 — AI Agent: SEO Consultant**
GPT-4o-mini receives your bot persona, the full knowledge base text, and the user's question. It searches the knowledge base for a matching answer and responds in plain, friendly language. If the question is not covered, it returns exactly: *"I do not have information about this topic in my current knowledge base. Please contact [your company name] support directly for help with this."* Answers are kept under 150 words and contain no markdown formatting.

**Step 6 — OpenAI: GPT-4o-mini Model**
This is the language model powering the AI step. It runs at temperature 0.3 for factual, consistent answers and is capped at 400 tokens to keep responses concise and costs low per conversation.

**Step 7 — Memory: Conversation Buffer**
This step stores the conversation history for the current session. It allows users to ask follow-up questions naturally — for example, asking "Can you explain that in more detail?" — without the bot losing context from earlier in the same chat.

**Step 8 — Set: Prepare Log Fields**
The bot's answer, the user's original question, the session ID, and the timestamp are all assembled here into a clean set of fields ready for logging and for returning to the chat interface.

**Step 9 — Google Sheets: Log Chat**
A new row is appended to your Chat Log tab with four fields: session ID, timestamp, user question, and bot answer. This runs at the same time as the reply is sent back to the user. Over time this log shows you which questions are being asked most and where your knowledge base has gaps.

**Step 10 — Set: Return Answer to Chat**
The bot answer is sent back to the chat interface so the user sees the reply immediately. This step runs simultaneously with the logging step so there is no delay in the response.

The final result: the user sees a clean, on-brand answer in the chat window within seconds, and the exchange is permanently recorded in your Google Sheet.

---

## Key Features

✅ **Live knowledge base sync** — Edit your Google Sheet and the chatbot reflects your changes on the very next question — no redeployment
✅ **Hallucination-free by design** — GPT-4o-mini is explicitly instructed to answer only from your sheet, never from its own training data
✅ **Honest fallback built in** — Unknown questions get a clear, branded fallback message instead of a confabulated answer that damages trust
✅ **Multi-turn conversation support** — Conversation memory lets users ask follow-up questions in the same session without losing context
✅ **Automatic chat logging** — Every exchange is saved to Google Sheets with session ID and timestamp — no manual export needed
✅ **Category-organized knowledge base** — Q&A rows include a Category column so the AI receives structured, scannable content per topic
✅ **Zero-cost trigger** — The chat interface is built into n8n with no third-party chat platform required
✅ **Token-efficient responses** — Answers are capped at 400 tokens and 150 words, keeping GPT costs predictable even at high chat volume

---

## Customisation Options

**Expand the knowledge base to other topics** — In node **2. Set — Config Values**, edit the `botPersona` field to change the bot's scope from SEO-only to any topic your team needs (e.g. HR policies, product FAQs, onboarding guides) — then populate your sheet accordingly.

**Increase answer length for complex topics** — In node **6. OpenAI — GPT-4o-mini Model**, raise `maxTokens` from 400 to 700 and change the 150-word limit in the prompt inside node **5. AI Agent — SEO Consultant** to allow longer, more detailed answers for technical subjects.

**Use two separate Google Sheets** — If you want your knowledge base and chat log in different files, paste different Sheet IDs into `knowledgeBaseSheetId` and `logSheetId` in node **2. Set — Config Values** — the workflow handles both independently.

**Add a Slack notification for unanswered questions** — After node **9. Google Sheets — Log Chat**, add a Slack node that checks if the bot answer contains the fallback phrase and posts an alert to a `#kb-gaps` channel so your team knows which topics to add next.

**Track question frequency in sheets** — Add a Google Sheets step after logging that searches the Chat Log for the same question and increments a count in a separate Frequency tab — helping you prioritize which knowledge base gaps to fill first.

---

## Troubleshooting

**Chat not responding after activation:**
- Make sure the workflow is toggled to Active — inactive workflows do not respond to chat messages
- Click on node **1. Chat Message Received** and confirm the Chat URL is visible — copy it fresh after activating
- Send a test message and check the n8n execution log for which step failed

**OpenAI credential not working:**
- Confirm the API key is connected in node **6. OpenAI — GPT-4o-mini Model** specifically
- Check that your OpenAI account has available credits — a depleted account silently fails
- Verify the key has access to gpt-4o-mini — some restricted keys block specific models

**Knowledge base returning empty or wrong answers:**
- Open node **3. Google Sheets — Read Knowledge Base** and confirm the Google Sheets OAuth2 credential is connected
- Check that `knowledgeBaseSheetId` in node **2. Set — Config Values** exactly matches the ID in your Google Sheet URL
- Confirm the tab is named **SEO FAQ** exactly — spelling and capitalization must match `knowledgeBaseSheetName`

**Chat Log not saving rows:**
- Open node **9. Google Sheets — Log Chat** and confirm the Google Sheets OAuth2 credential is connected (this is a separate connection from the read step)
- Check that `logSheetId` in node **2. Set — Config Values** is correct and the tab is named **Chat Log** exactly
- Confirm your Chat Log sheet has the four column headers in row 1: `Session ID`, `Timestamp`, `User Question`, `Bot Answer`

**Bot answering from outside the knowledge base:**
- The prompt in node **5. AI Agent — SEO Consultant** explicitly restricts answers to the knowledge base — if the bot strays, check that the full prompt text is intact and has not been accidentally edited
- Lower the temperature in node **6. OpenAI — GPT-4o-mini Model** from 0.3 to 0.1 for stricter, more literal responses

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email:[info@incrementors.com](info@incrementors.com)
🌐 Website: [https://www.incrementors.com/](https://www.incrementors.com/)

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
