# 💬 Answer WhatsApp sales queries from text, voice, photos, and video with OpenAI and Gemini

> ⚡ **6,487 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow indexes a product brochure PDF into an in-memory vector store and then responds to incoming WhatsApp text, voice, image, and video messages using OpenAI and Google Gemini, with per-customer chat memory and retrieval-augmented answers from the catalogue.

## How it works
1. Runs manually to download a product brochure PDF, extract its text, split it into chunks, generate OpenAI embeddings, and index everything into an in-memory vector store.
2. Triggers when a new WhatsApp message arrives and loads the workflow configuration (models, prompts, phone number ID, and vector store key).
3. Routes the message by type and converts non-text inputs into text by transcribing audio with OpenAI, describing images with OpenAI Vision, or describing videos with Google Gemini.
4. Normalizes the customer input (message text, captions, and sender number) into a single prompt for the sales agent.
5. Uses an OpenAI chat model with per-customer memory and a vector-store retrieval tool to answer questions grounded in the indexed product catalogue.
6. Sends the agent’s reply back to the customer via WhatsApp, or returns a predefined message for unsupported WhatsApp message types.

## Setup
1. Create and connect credentials for WhatsApp Business Cloud (trigger + send/media access), OpenAI (chat, embeddings, transcription, and vision), and Google Gemini (video analysis).
2. Set a public direct URL to your product brochure/catalogue PDF in the knowledge base settings and run the manual indexing branch whenever the catalogue changes.
3. Fill in your WhatsApp Business phone number ID, choose your OpenAI/Gemini model IDs, and adjust the system prompt and limits in the configuration fields before activating the workflow.

## Additional info
# Build a WhatsApp Sales Agent that understands text, voice, photos and videos with RAG
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Build-a-WhatsApp-Sales-Agent-text-voice-photo-video-with-RAG-39f3d6550fd9819e9103ceb55e1b79f5)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
