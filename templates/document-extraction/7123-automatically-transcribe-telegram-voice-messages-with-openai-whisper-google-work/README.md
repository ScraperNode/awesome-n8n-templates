# 🔬 Automatically transcribe Telegram voice messages with OpenAI Whisper & Google Workspace

> ⚡ **1,556 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# 🎙️ VoiceScribe AI: Telegram Audio Message Auto Transcription with OpenAI Whisper
&gt; Automatically transcribe Telegram voice messages and store them as structured logs in Google Sheets, while backing up the audio in Google Drive.

## 🧑‍💼 Who’s it for

- Journalists, content creators, or busy professionals who often record voice memos or short interviews on the go.
- Anyone who wants to turn voice recordings into searchable, structured notes.

## ⚙️ How it works / What it does

1. User sends a voice message to a Telegram bot.
2. n8n checks if the message is an audio voice note.
3. If valid, it downloads the audio file and:
   - Transcribes it using OpenAI Whisper (or your LLM of choice).
   - Uploads the original audio to Google Drive for safekeeping.
4. The transcript and audio metadata are merged.
5. The workflow:
   - Logs the data into a Google Sheet.
   - Sends a formatted confirmation message to the user via Telegram.

If the input is not audio, the bot politely informs the user that only voice messages are accepted.

## ✅ Features

- Accepts only Telegram voice messages.
- Transcribes via OpenAI Whisper.
- Logs DateTime, Duration, Transcript, and Audio URL to Google Sheets.
- Sends user feedback message via Telegram with download + transcript link.

## 🚀 How to set up
### Prerequisites

- Telegram Bot connected to n8n (via Telegram Trigger)
- Google Drive & Google Sheets credentials configured
- OpenAI or Whisper API credentials (for transcription)

### Steps

1. **Telegram Trigger**  
   Start the flow when a new message is sent to your bot.
2. **Check Message Type**  
   Use a conditional node to confirm it's a voice message.
3. **Download Voice Message**  
   Download the `.oga` file from Telegram.
4. **Transcribe Audio**  
   Send the binary audio to OpenAI Whisper or your transcription service.
5. **Upload to Google Drive**  
   Backup the original audio file.
6. **Merge Outputs**  
   Combine transcription with Drive metadata.
7. **Transform to Row Format**  
   Prepare structured JSON for Google Sheets.
8. **Append to Google Sheet**  
   Store the transcript log (DateTime, Duration, Transcript, AudioURL).
9. **Send Confirmation to User**  
   Inform the user via Telegram with their transcript and download link.
10. **Unsupported Message Handler**  
    Reply to users who send non-audio messages.

## 📄 Example Output in Google Sheet

| DateTime              | Duration | Transcript                                | AudioURL                                                   |
|-----------------------|----------|--------------------------------------------|------------------------------------------------------------|
| 2025-08-07T13:12:19Z  | 27       | Dự án Outlet Activation là...              | https://drive.google.com/uc?id=xxxx&export=download        |

## 🧠 How to customize the workflow

- Swap Whisper with Deepgram, AssemblyAI, or other providers.
- Add speaker name detection or prompt-based tagging via GPT.
- Route transcripts into Notion, Airtable, or CRM systems.
- Add multi-language support or summarization steps.

## 📦 Requirements

| Component            | Required |
|---------------------|----------|
| Telegram API        | ✅       |
| Google Drive API    | ✅       |
| Google Sheets API   | ✅       |
| OpenAI Whisper API  | ✅       |
| n8n Cloud or Self-hosted | ✅   |

Created with ❤️ using [n8n](https://n8n.io)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Drive, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
