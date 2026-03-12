# ⚡ Self-learning AI assistant with permanent memory | GPT,Telegram & Pinecone RAG

> ⚡ **6,206 views** · ⚡ [Personal Productivity](../)

## Description

## Your AI secretary that self-learning every day and remembers everything you said (text, audio, image). 

**Imagine having a personal AI secretary accessible right from your Telegram, ready to assist you with information and remember everything you discuss.** This n8n workflow transforms Telegram into your intelligent assistant, capable of understanding text, audio, and images, and continuously learning from your interactions. **It integrates RAG's offline data ingestion and online querying functionalities, letting you save inspiration and key information permanently in real-time, and giving you an AI assistant that remembers all your dialogues and information.** It builds and queries a powerful vector database in real-time, ensuring relevant and accurate responses. **Video guidance on how to set up Telegram integration is also included.** 

**Who is this for?**

This template is ideal for:

- Individuals seeking a personal AI assistant for quick information retrieval and note-taking.
- Professionals who need to keep track of important conversations and insights.
- Anyone interested in leveraging the power of Retrieval-Augmented Generation (RAG) and vector databases for personal knowledge management.
- Users who want a self-learning AI that improves over time based on their interactions.

**What problem is this workflow solving?**

**This workflow integrates RAG's offline data ingestion and online querying functionalities, letting you save inspiration and key information permanently in real-time, and giving you an AI assistant that remembers all your dialogues and information.** This workflow addresses the challenge of information overload and the need for an easily accessible, personalized knowledge base. It eliminates the need to manually organize notes and search through past conversations. By automatically storing and retrieving information from a vector database, this workflow makes it effortless to access the knowledge you need, when you need it. It also provides a way to retain information from various media types like voice notes and images.

**What this workflow does:**

This workflow automates the following steps:

- **Instant Information Capture:** Receives text messages, audio notes (transcribed), and images (with content analysis) directly from your Telegram.
- **Intelligent Question Answering:** When you ask a question, the AI searches its knowledge base (Pinecone vector store) for relevant information and provides a comprehensive answer. It even considers your recent conversations for context.
- **Automatic Knowledge Storage:** When you make a statement or provide information, the AI extracts key details and saves them in a Google Docs "memory palace."
- **Daily Self-Learning:** Every day, the workflow automatically takes all the information stored in the Google Docs, converts it into a vector representation, and adds it to its knowledge base (Pinecone vector store). This ensures the AI continuously learns and remembers everything you've shared.
- **Image Understanding:** Extracts text and information from images you send.
- **Audio Transcription:** Automatically transcribes your voice notes into text for processing and storage.
- **Short-Term Memory:** Remembers recent interactions within a session for more context-aware conversations.

**Setup:**

To get started, you'll need to connect the following services to your n8n instance:

1. **Telegram:** Connect your Telegram bot API credentials. A video guidance is included for telegram integration setup.
2. **OpenAI:** Provide your OpenAI API key for audio transcription and image analysis.
3. **Pinecone:** Set up a Pinecone account and provide your API key and environment. Create a namespace in Pinecone.
4. **Google Docs:** Connect your Google account with access to Google Docs. You'll need to create a Google Doc that will serve as the daily "memory palace" and provide its ID in the workflow.

**How to customize this workflow:**

- **Adjust the AI Agent's Personality:** Modify the system prompt in the "AI Agent" node to tailor the AI's tone and behavior.
- **Expand Knowledge Sources:** Integrate other data sources into the daily learning process, such as emails or other documents, by adding more nodes to the scheduled trigger workflow.
- **Add More Tools for the AI Agent:** Integrate additional tools into the AI Agent, such as web search or other APIs, to further enhance its capabilities.
- **Modify the Daily Schedule:** Adjust the schedule trigger to run at a different time or interval.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Docs, Schedule Trigger, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
