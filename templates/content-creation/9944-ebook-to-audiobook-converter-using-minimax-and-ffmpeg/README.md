# 🎬 Ebook to audiobook converter using MiniMax and FFmpeg

> ⚡ **768 views** · 🎬 [Content Creation & Video](../)

## Description

# Ebook to Audiobook Converter

[![Watch Demo](https://img.youtube.com/vi/xKqkjXIPZoM/maxresdefault.jpg)](https://youtu.be/xKqkjXIPZoM)

**[▶️ Watch Full Demo Video](https://youtu.be/xKqkjXIPZoM)**

---

## What It Does

Turn any PDF ebook into a professional audiobook automatically. Upload a PDF, get an MP3 audiobook in your Google Drive. Perfect for listening to books, research papers, or documents on the go.

**Example**: [Input PDF](https://www.laburnumps.vic.edu.au/uploaded_files/media/little_red_riding_hood.pdf) → [Output Audiobook](https://drive.google.com/file/d/12aVR2p-ZQ2DyqXCUgJPouzy-acoAB7WO/view?usp=sharing)

## Key Features

- Upload PDF via web form → Get MP3 audiobook in Google Drive
- Natural-sounding AI voices (MiniMax Speech-02-HD)
- Automatic text extraction, chunking, and audio merging
- Customizable voice, speed, and emotion settings
- Processes long books in batches with smart rate limiting

## Perfect For

- **Students**: Turn textbooks into study audiobooks
- **Professionals**: Listen to reports and documents while commuting
- **Content Creators**: Repurpose written content as audio
- **Accessibility**: Make content accessible to visually impaired users

## Requirements

| Component | Details |
|-----------|---------|
| **n8n** | Self-hosted ONLY (cannot run on n8n Cloud) |
| **FFmpeg** | Must be installed in your n8n environment |
| **Replicate API** | For MiniMax TTS ([Sign up here](https://replicate.com)) |
| **Google Drive** | OAuth2 credentials + "Audiobook" folder |

⚠️ **Important**: This workflow **does NOT work on n8n Cloud** because FFmpeg installation is required.

## Quick Setup

### 1. Install FFmpeg

**Docker users:**
```bash
docker exec -it &lt;n8n-container-name&gt; /bin/bash
apt-get update && apt-get install -y ffmpeg
```

**Native installation:**
```bash
sudo apt-get install ffmpeg  # Linux
brew install ffmpeg          # macOS
```

### 2. Get API Keys
- **Replicate**: Sign up at [replicate.com](https://replicate.com) and copy your API token
- **Google Drive**: Set up OAuth2 in n8n and create an "Audiobook" folder in Drive

### 3. Import & Configure
1. Import `n8n.json` into your n8n instance
2. Replace the Replicate API token in the "MINIMAX TTS" node
3. Configure Google Drive credentials and select your "Audiobook" folder
4. Activate the workflow

## Cost Estimate

| Component | Cost |
|-----------|------|
| **MiniMax TTS API** | ~$0.15 per 1000 characters (~$3-5 for average book) |
| **Google Drive Storage** | Free (up to 15GB) |
| **Processing Time** | ~1-2 minutes per 10 pages |

## How It Works

![Workflow Diagram](https://articles.emp0.com/wp-content/uploads/2025/10/Screenshot-from-2025-10-20-19-23-45.png)

```
PDF Upload → Extract Text → Split into Chunks → Convert to Speech (batches of 5)
→ Merge Audio Files (FFmpeg) → Upload to Google Drive
```

The workflow uses four main modules:
1. **Extraction**: PDF text extraction and intelligent chunking
2. **Conversion**: MiniMax TTS processes text in batches
3. **Merging**: FFmpeg combines all audio files seamlessly
4. **Upload**: Final audiobook saved to Google Drive

## Voice Settings (Customizable)

```json
{
  "voice_id": "Friendly_Person",
  "emotion": "happy",
  "speed": 1,
  "pitch": 0
}
```

Available emotions: `happy`, `neutral`, `sad`, `angry`, `excited`

## Limitations

- ⚠️ **Self-hosted n8n ONLY** (not compatible with n8n Cloud)
- PDF files only (not EPUB, MOBI, or scanned images)
- Large books (500+ pages) take longer to process
- Requires FFmpeg installation (see setup above)

## Troubleshooting

**FFmpeg not found?**
- Docker: Run `docker exec -it &lt;container&gt; /bin/bash` then `apt-get install ffmpeg`
- Native: Run `sudo apt-get install ffmpeg` (Linux) or `brew install ffmpeg` (macOS)

**Rate limit errors?**
- Increase wait time in the "WAITS FOR 5 SECONDS" node to 10-15 seconds

**Google Drive upload fails?**
- Make sure you created the "Audiobook" folder in your Google Drive
- Reconfigure OAuth2 credentials in n8n

---

Created by [emp0](https://emp0.com) | More workflows: [n8n Gallery](https://n8n.io/creators/jay-emp0/)

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger, Read/Write Files from Disk, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
