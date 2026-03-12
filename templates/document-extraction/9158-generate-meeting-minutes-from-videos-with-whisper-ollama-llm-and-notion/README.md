# 🔬 Generate meeting minutes from videos with Whisper, Ollama LLM and Notion

> ⚡ **452 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Automated Meeting Minutes from Video Recordings

This workflow automatically transforms video recordings of meetings into structured, professional meeting minutes in Notion. It uses local AI models (Whisper for transcription and Ollama for summarization) to ensure privacy and cost efficiency, while uploading the original video to Google Drive for safekeeping. Ideal for creative teams, production reviews, or any scenario where visual context is as important as the spoken word.

## 🔄 How It Works

1. **Wait & Detect**: The workflow monitors a local folder. When a new `.mkv` video file is added, it waits until the file has finished copying.
2. **Prepare Audio**: The video is converted into a `.wav` audio file optimized for transcription (under 25 MB with high clarity).
3. **Transcribe Locally**: The local Whisper model generates a timestamped text transcript.
4. **Generate Smart Minutes**: The transcript is sent to a local Ollama LLM, which produces structured, summarized meeting notes.
5. **Store & Share**: The original video is uploaded to Google Drive, a new page is created in Notion with the notes and a link to the video, and a completion notification is sent via Discord.

## ⏱️ Setup Steps

* **Estimated Time**: 10–15 minutes (for technically experienced users).
* **Prerequisites**:
  * Install Python, FFmpeg, and required packages (`openai-whisper`, `ffmpeg-python`).
  * Run Ollama locally with a compatible model (e.g., `gpt-oss:20b`, `llama3`, `mistral`).
  * Configure n8n credentials for Google Drive, Notion, and Discord.
* **Workflow Configuration**:
  * Update the file paths for the helper scripts (`wait-for-file.ps1`, `create_wav.py`, `transcribe_return.py`) in the respective "Execute Command" nodes.
  * Change the input folder path (`G:\OBS\videos`) in the "File" node to your own recording directory.
  * Replace the Google Drive folder ID and Notion database/page ID in their respective nodes.

&gt; 💡 **Note**: Detailed instructions for each step, including error handling and variable setup, are documented in the **Sticky Notes** within the workflow itself.

---

## 📁 Helper Scripts Documentation

### `wait-for-file.ps1`
A PowerShell script that checks if a file is still being written to (i.e., locked by another process). It returns `0` if the file is free and `1` if it is still locked.

**Usage:**
```powershell
.\wait-for-file.ps1 -FilePath "C:\path\to\your\file.mkv"
```

### `create_wav.py`
A Python script that converts a video file into a .wav audio file. It automatically calculates the necessary audio bitrate to keep the output file under 25 MB—a common requirement for many transcription services.

**Usage:**
```powershell
python create_wav.py "C:\path\to\your\file.mkv"
```

### `transcribe_return.py`
A Python script that uses a local Whisper model to transcribe an audio file. It can auto-detect the language or use a language code specified in the filename (e.g., meeting.en.mkv for English, meeting.es.mkv for Spanish). The transcript is printed directly to stdout with timestamps, which is then captured by the n8n workflow.

**Usage:**
```powershell
# Auto-detect language
python transcribe_return.py "C:\path\to\your\file.mkv"

# Force language via filename
python transcribe_return.py "C:\path\to\your\file.es.mkv"
```

## 🔗 Nodes Used

Google Drive, Discord, Notion, Local File Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
