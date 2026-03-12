# 🔬 Audio transcription with Telegram and Groq Whisper

> ⚡ **928 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Short description
Transcribe Telegram voice/audio messages to text using Groq’s OpenAI-compatible Whisper endpoint. Replies are delivered either as a Telegram message or as a downloadable `.txt` file, plug-and-play for n8n with minimal setup.

## Who’s it for / Uses
- Educators, podcasters, interviewers, and support teams who need quick voice → text conversions.  
- Automating meeting notes, voice feedback, voicemail transcription, or speech logging.  
- Useful when you want transcripts pushed to chat or saved as files for archiving.

## How it works (overview)
1. **Telegram Trigger** — workflow starts on incoming message.  
2. **Switch (Audio/Voice)** — detects `voice` or `audio`. If neither, replies “Wrong file type” and stops.  
3. **Telegram Download** — downloads the audio using the `file_id`, outputs file path/binary.  
4. **Set Node (credentials + options)** — stores `Groq_API` and `Telegram_access_token` (required) and `transcript_output_format` (`message` or `file`).  
5. **HTTP Request → Groq (Whisper)** — uploads audio (multipart/form-data) to Groq’s transcription endpoint and receives text.  
6. **Reply Switch** — routes to either:  
   - **Message branch:** send transcribed text as a Telegram message.  
   - **File branch:** convert transcript to `.txt` and send as a document.

## Requirements
- n8n instance (cloud or self-hosted) with internet access  
- Telegram bot token (create via BotFather)  
- Groq API key (create at https://console.groq.com/keys)  
- Basic n8n nodes: Telegram Trigger, Switch, Telegram Download, Set, HTTP Request, Convert to File, Telegram Send Message/Document

## Important setup & notes
- **Mandatory:** Add `Groq_API` and `Telegram_access_token` in the **Set** node (or use n8n Credentials). The workflow will fail without them.  
- **Do not hardcode** keys in HTTP node fields that will be exported/shared. Use Set fields or n8n Credentials.  
- Include **sticky notes** explaining each node (yellow note with full description recommended). Sticky notes should show setup steps and required fields.  
- Before publishing: remove personal IDs and secrets, test with sample voice messages, and verify Groq response schema to map the transcript field correctly.

## Security & best practices
- Use n8n Credentials or environment variables in production.  
- Rotate API keys if they become exposed.  
- Keep the Set node private when sharing templates; instruct users to replace keys with their own.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
