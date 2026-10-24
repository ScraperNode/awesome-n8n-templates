# ⚡ Convert Telegram voice notes into markdown journals with Groq Whisper and Gemini

> ⚡ **25 views** · ⚡ [Personal Productivity](../)

## Description

# Telegram Voice Notes to Markdown Journal with Groq Whisper and Gemini

This workflow transforms Telegram voice notes and audio files into clean markdown journal entries using Groq Whisper, CloudConvert, and Google Gemini.

It automatically downloads incoming Telegram audio messages, transcribes them with Groq Whisper, cleans the transcript into a readable reflective journal using Gemini, converts the result into a markdown file, and sends the journal back to Telegram.

For better audio compatibility, the workflow also includes a CloudConvert fallback path. If Groq Whisper rejects the original audio file because of container or codec issues, the workflow converts the audio to MP3 with CloudConvert and retries transcription automatically.

An optional Google Drive section can also archive all generated journals automatically.

This workflow is useful for journaling, voice-based note-taking, personal reflection, idea capture, daily logging, and building a lightweight AI-assisted second brain.

---

## Common use cases

- Convert Telegram voice notes into readable journal entries
- Convert uploaded audio files into markdown journals
- Create markdown journals automatically using AI
- Capture thoughts, reflections, and ideas on the go
- Build a voice-based personal knowledge system
- Handle more audio formats by converting failed files to MP3
- Archive AI-cleaned journals to Google Drive
- Learn how to combine Telegram, Groq Whisper, CloudConvert, Gemini, markdown generation, and Google Drive in n8n

---

## How it works

- Starts from a Telegram Trigger
- Detects incoming voice notes or audio files
- Downloads the Telegram audio file
- Sends the original audio to Groq Whisper for transcription
- If Groq rejects the file, converts the audio to MP3 with CloudConvert
- Retries transcription with Groq Whisper using the converted MP3 file
- Formats the transcript with timestamps
- Sends the transcript to Google Gemini for cleanup and readability improvements
- Preserves the original tone and meaning while removing filler words and transcription artifacts
- Parses the AI response into structured JSON
- Converts the final journal into a markdown (`.md`) file
- Sends the markdown journal back to Telegram
- Optionally uploads the journal to Google Drive

---

## Setup steps

- Connect your Telegram credentials
- Open the `Transcribe Audio with Groq Whisper` node
- Replace the placeholder Authorization header with your Groq API key
- Install the verified CloudConvert community node if it is not already installed
- Connect your CloudConvert credentials for the MP3 fallback path
- Connect your Google Gemini credentials
- (Optional) Connect your Google Drive credentials
- Test the workflow manually with a Telegram voice note or audio file
- Activate the workflow
- Send a voice note or audio file to your Telegram bot

---

## CloudConvert Audio Compatibility Fallback

The CloudConvert path is included to improve reliability with different audio uploads.

Groq Whisper supports common audio formats, but some files may still fail because of unusual containers, codecs, MIME types, or metadata. When that happens, this workflow converts the failed audio file to MP3 with CloudConvert, then sends the MP3 back to Groq Whisper for transcription.

This fallback is especially useful for some uploaded M4A, OGG, OPUS, or recording files that may not be accepted directly.

If you only want to support files that Groq accepts directly, you can disconnect the CloudConvert fallback path.

---

## Optional Google Drive Backup

The Google Drive section is fully optional.

If connected:
- The workflow searches for a `Personal Journal (n8n)` folder
- Creates the folder automatically if it does not exist
- Uploads generated markdown journals automatically

If you do not want cloud backups, simply disconnect the Google Drive section.

---

## Notes

This workflow uses:
- Groq Whisper (`whisper-large-v3`) for transcription
- CloudConvert for optional audio-to-MP3 fallback conversion
- Google Gemini for transcript cleanup and journal formatting
- Telegram Bot API for message delivery
- Markdown file generation for portable journaling

The AI prompt is designed to:
- Preserve the speaker’s original meaning
- Keep the natural reflective monologue style
- Improve punctuation and readability
- Avoid summarization or hallucinated content

The generated markdown journals can easily be imported into note-taking tools such as Obsidian, Logseq, Notion, or any markdown-based system.

---

## Need Help?

Have questions or want to connect? Reach me on [LinkedIn](https://www.linkedin.com/in/athaahsan/).

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive, Basic LLM Chain, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
