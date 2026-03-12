# 🔬 Transcribe and analyze meetings or podcasts with ElevenLabs and Google Gemini AI

> ⚡ **782 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automates the process of **transcribing audio/video files into text** using [ElevenLabs Speech-to-Text](https://try.elevenlabs.io/ahkbf00hocnu), saving the transcripts to Google Docs, and **generating AI-powered summaries and analysis**, which are then emailed to a specified address.

This [ElevenLabs Speech-to-Text](https://try.elevenlabs.io/ahkbf00hocnu) model excels in scenarios requiring accurate speech-to-text conversion:
- Transcription Services: Perfect for converting audio/video content to text
- Meeting Documentation: Ideal for capturing and documenting conversations
- Content Analysis: Well-suited for audio content processing and analysis
- Multilingual Recognition: Supports accurate transcription across 99 languages

Files up to 3 GB in size and up to 10 hours in duration are supported.

This API supports uploading both audio and video files for transcription.

---

## **Key Advantages**

* ✅ **Automation of Repetitive Tasks**: Eliminates manual transcription, note-taking, and reporting.
* ✅ **High-Accuracy Transcription**: Powered by ElevenLabs, supporting multiple languages and long files.
* ✅ **Structured Insights**: AI-powered analysis (Gemini) transforms raw transcripts into professional summaries with action items and key decisions.
* ✅ **Seamless Integration**: Works with Google Sheets, Google Docs, and Gmail for easy workflow adoption.
* ✅ **Scalable & Reusable**: Handles multiple recordings in batch and integrates smoothly into existing processes.
* ✅ **Improved Productivity**: Teams save time by receiving clear, well-structured meeting recaps without effort.

---

### **How It Works**

The workflow operates in a linear sequence, processing one audio URL at a time from a Google Sheet.

1.  **Trigger & Data Fetch:** The process starts manually. It first reads from a specified Google Sheet to get a list of audio file URLs that haven't been processed yet (marked with "DONE").
2.  **Transcription:** For each audio URL, it sends a request to the **[ElevenLabs Speech-to-Text API](https://try.elevenlabs.io/ahkbf00hocnu)**, passing the cloud storage URL of the audio file.
3.  **Document Creation & Storage:** Upon receiving the transcription text from ElevenLabs, the workflow:
    *   Creates a new Google Doc named after the transcription ID.
    *   Writes the full raw transcript text into this newly created document.
4.  **Analysis & Summary:** The raw transcript text is passed to **Google Gemini AI**. The AI analyzes the text based on a detailed, pre-defined system prompt that instructs it to extract key points, decisions, action items, and insights, formatting the output as a structured summary.
5.  **Notification:** The AI-generated analysis (converted from Markdown to HTML) is sent via **Gmail** as an email to a predefined address.
6.  **Status Update:** Finally, the workflow updates the original row in the Google Sheet, marking it as "DONE" (with an 'x') and recording the ID of the newly created Google Doc for future reference. This ensures the same audio file is not processed again on the next run.

---

### **Set Up Steps**

To configure this workflow, you need to complete the following steps:

1.  **Credentials Setup:**
    *   **ElevenLabs API:** In the "Speech-to-Text" HTTP Request node, configure the HTTP Header Auth credentials. The header name should be `xi-api-key` and the value should be your valid ElevenLabs API key.
    *   **Google Services:** Ensure your Google Sheets, Google Docs, and Gmail nodes are connected to valid Google OAuth2 credentials with the necessary permissions to read, write, and send emails.
    *   **Google Gemini AI:** The "Transcript Analysis" node must be connected to valid Google Gemini (PaLM) API credentials.

2.  **Google Sheet Configuration:**
    *   Make a copy of the provided Google Sheet template.
    *   In the "Get audio urls" node, update the `documentId` parameter to match the ID of your new Google Sheet.
    *   Similarly, update the `documentId` in the "Update row" node.
    *   Populate your sheet with the URLs of the audio/video files you want to process in the 'AUDIO URL' column.

3.  **Output Configuration:**
    *   In the "Send email" node, change the `sendTo` parameter to the email address where you want to receive the analysis summaries.
    *   The "Create Doc" node specifies a `folderId`; change this to the ID of the specific Google Drive folder where you want the transcripts to be saved.

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Sub-workflow, Gmail, Google Docs, Markdown

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
