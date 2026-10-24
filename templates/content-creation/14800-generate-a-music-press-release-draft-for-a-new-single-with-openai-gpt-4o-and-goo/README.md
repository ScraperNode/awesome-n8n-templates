# 🎬 Generate a music press release draft for a new single with OpenAI GPT-4o and Google Docs

> ⚡ **15 views** · 🎬 [Content Creation & Video](../)

## Description

## Description

This workflow automates the creation of press releases for music artists releasing a new single. Upload your MP3, fill in basic info, and receive a publication-ready press release saved as a Google Doc — powered by multiple OpenAI models working in sequence.

The system analyzes your audio, extracts or transcribes lyrics, researches your artist background, interprets the song's themes, and writes a polished press release in your chosen language.

**Key Features:**

* **Automatic lyrics handling**: Upload a .txt file or let Whisper transcribe from audio
* **AI audio analysis**: GPT-4o Audio Preview identifies genre, mood, BPM, key, and instrumentation
* **Smart artist research**: If no bio is provided, GPT-4o Search Preview researches the artist online
* **Deep song interpretation**: AI creates a creative brief analyzing themes, imagery, and press angles
* **Multi-language support**: Press release written in English, Czech, German, Spanish, French, or other
* **Google Docs output**: Final press release saved as an editable Google Doc
* **Email delivery**: Artist receives an email with a direct link to the document

## Perfect For:

* Independent musicians and bands releasing new music
* Record labels and artist managers
* PR agencies in the music industry
* Music publicists and booking agents
* Anyone who needs a quick, professional press release draft

## Use Cases:

* New single / EP / album announcement
* Press kit preparation
* Music blog and magazine outreach
* Festival and playlist submission cover letters
* Social media press content drafts

## How It Works:

### Step 1 — Form Submission
Artist fills out a web form with:
- Audio file (.mp3, required)
- Lyrics file (.txt, optional)
- Artist name, single name, release date
- Artist bio (optional)
- Preferred language for the press release

### Step 2 — Lyrics Extraction
- If a lyrics .txt file is uploaded → text is extracted directly
- If not → audio is transcribed using **OpenAI Whisper API** (model: `whisper-1`)

### Step 3 — Audio Analysis
- File size check (max 25 MB)
- Audio converted to Base64
- Sent to **GPT-4o Audio Preview** which returns structured JSON: genre, subgenre, mood, instrumentation, energy level, and overall description

### Step 4 — Artist Context
- If band bio was provided in the form → used directly
- If not → **GPT-4o Search Preview** researches the artist online
- If no info found → fallback text is used ("emerging artist")

### Step 5 — Deep Song Interpretation
**GPT-4o** creates a creative brief combining lyrics, audio analysis, and artist context. Output includes: core theme, emotional arc, imagery, unique angles, and press coverage suggestions.

### Step 6 — Press Release Writing
**GPT-4o** writes a publication-ready press release with: headline, dateline, 3 body paragraphs, artist quote placeholder, boilerplate, and contact info — all in the selected language.

### Step 7 — Output & Delivery
- A new **Google Doc** is created with the press release text

## Required Credentials:

| Credential | Type | Used By |
|-----------|------|---------|
| OpenAI API Key | Header Auth (`Authorization: Bearer sk-...`) | Whisper, Audio Analysis, Research, Interpretation, Press Release |
| Google Docs | OAuth2 | Create document + Insert text |

## Setup Instructions:

1. **Import** the workflow into your n8n instance
2. **Create OpenAI credential**: Go to Credentials → Add → Header Auth → Name: `Authorization`, Value: `Bearer sk-your-key`
3. **Create Google Docs OAuth2 credential**: Follow n8n's Google OAuth2 setup guide
4. **Create Gmail OAuth2 credential**: Same Google OAuth2 flow with Gmail scopes
5. **Assign credentials** to all relevant nodes (5× OpenAI, 2× Google Docs, 1× Gmail)
6. **Add a Gmail node** at the end of the workflow (after "Insert Press Release Text") if not already present
7. **Activate** the workflow
8. **Share the form URL** with your artists

## Configuration Notes:

* **Language dropdown**: Modify the Form Trigger to add more language options if needed
* **Audio size limit**: Currently set to 25 MB (OpenAI Whisper limit). Adjustable in the "Check Audio Size" code node
* **Max tokens**: Interpretation and Press Release steps use 2048 tokens. Increase if you need longer outputs
* **Artist quote**: The press release includes a placeholder `[ARTIST QUOTE: "..."]` — the artist should replace this before distribution

## Cost Breakdown:

### API Costs (Per Press Release)

| Service | Model | Est. Cost |
|---------|-------|-----------|
| **Whisper** (if no lyrics file) | whisper-1 | ~$0.006/min of audio |
| **Audio Analysis** | gpt-4o-audio-preview | ~$0.02–0.05 |
| **Artist Research** (if no bio) | gpt-4o-search-preview | ~$0.01–0.03 |
| **Song Interpretation** | gpt-4o | ~$0.01–0.03 |
| **Press Release Writing** | gpt-4o | ~$0.01–0.03 |
| **Google Docs** | — | Free |

**Estimated total per press release: ~$0.05–0.15**

## Contact:

📧 Email: [xciklv@gmail.com](mailto:xciklv@gmail.com)
💼 LinkedIn: [https://www.linkedin.com/in/vaclavcikl/](https://www.linkedin.com/in/vaclavcikl/)

## 🔗 Nodes Used

HTTP Request, Google Docs, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
