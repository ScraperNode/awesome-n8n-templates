# 📖 HR & IT helpdesk chatbot with audio transcription

> ⚡ **41,169 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

An intelligent chatbot that assists employees by answering common HR or IT questions, supporting both **text** and **audio messages**. This unique feature ensures employees can conveniently ask questions via voice messages, which are transcribed and processed just like text queries.

---

### How It Works
1. **Message Capture**: When an employee sends a message to the chatbot in WhatsApp or Telegram (text or audio), the chatbot captures the input.
2. **Audio Transcription**: For audio messages, the chatbot transcribes the content into text using an AI-powered transcription service (e.g., Whisper, Google Cloud Speech-to-Text).
3. **Query Processing**:
   - The transcribed text (or directly entered text) is sent to an AI service (e.g., OpenAI) to generate embeddings.
   - These embeddings are used to search a vector database (e.g., Supabase or Qdrant) containing the company’s internal HR and IT documentation.
   - The most relevant data is retrieved and sent back to the AI service to compose a concise and helpful response.
4. **Response Delivery**: The chatbot sends the final response back to the employee, whether the input was text or audio.

---

### Set Up Steps
- **Estimated Time**: 20–25 minutes
- **Prerequisites**:
  1. Create an account with an AI provider (e.g., OpenAI).
  2. Connect WhatsApp or Telegram credentials in n8n.
  3. Set up a transcription service (e.g., Whisper or Google Cloud Speech-to-Text).
  4. Configure a vector database (e.g., Supabase or Qdrant) and add your internal HR and IT documentation.
  5. Import the workflow template into n8n and update environment variables for your credentials.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
