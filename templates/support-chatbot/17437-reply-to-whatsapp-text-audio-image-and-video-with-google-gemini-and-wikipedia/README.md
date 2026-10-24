# 💬 Reply to WhatsApp text, audio, image, and video with Google Gemini and Wikipedia

> ⚡ **143 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow auto-replies to incoming WhatsApp messages (text, audio, video, or images) by downloading any media, converting it to text with Google Gemini, and generating a concise answer with a Gemini-powered agent that can use Wikipedia for factual lookups.

## How it works
1. Triggers when a new WhatsApp message is received and splits the payload into individual message items.
2. Routes each message by type (audio, video, image, or text) so each format is handled appropriately.
3. For audio, video, and images, retrieves the WhatsApp media URL, downloads the file, and uses Google Gemini to transcribe or describe the content (including visible text in images).
4. For text messages, uses Google Gemini to summarize the user’s message.
5. Normalizes the output into a single record that includes the message type, extracted text/description, sender phone number, and any media caption.
6. Uses a Google Gemini-powered AI agent with per-sender conversation memory and optional Wikipedia tool calls to draft a factual response.
7. Sends the agent’s reply back to the sender via WhatsApp.

## Setup
1. Connect your WhatsApp Business Platform/Cloud API credentials for the WhatsApp Trigger, media URL retrieval, media downloads (HTTP Request), and the WhatsApp send-message step, and set your phone number ID and recipient mapping.
2. Add a Google Gemini (PaLM/Generative Language API) credential for the Gemini HTTP requests and the Gemini chat models used by the summarizer, image explainer, and agent.
3. Ensure your WhatsApp app is configured to deliver message webhooks to this n8n workflow’s WhatsApp Trigger and that media downloads are permitted for your account.
4. Review the prompts and the session key format for memory (keyed by sender phone number) to match your desired assistant behavior and retention window.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, Basic LLM Chain, Simple Memory, Wikipedia

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
