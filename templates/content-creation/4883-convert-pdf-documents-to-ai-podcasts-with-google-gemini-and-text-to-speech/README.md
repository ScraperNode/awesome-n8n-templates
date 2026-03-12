# 🎬 Convert PDF documents to AI podcasts with Google Gemini and text-to-speech

> ⚡ **4,141 views** · 🎬 [Content Creation & Video](../)

## Description

# Convert PDF documents to AI-generated podcasts with Google Gemini and Text-to-Speech

Transform any PDF document into an engaging, natural-sounding podcast using Google's Gemini AI and advanced Text-to-Speech technology. This automated workflow extracts text content, generates conversational scripts, and produces high-quality audio files.

## Who is this for?

This workflow template is perfect for **content creators**, **educators**, **researchers**, and **marketing professionals** who want to repurpose written content into audio format. Ideal for creating podcast episodes, educational content, or making documents more accessible.

## What problem does this solve?

Converting written documents to engaging audio content manually is time-consuming and requires scriptwriting skills. This workflow automates the entire process, turning static PDFs into dynamic, conversational podcasts that sound natural and engaging.

## What this workflow does

1. **Extracts text** from uploaded PDF documents
2. **Generates podcast script** using Google Gemini AI with conversational tone
3. **Converts script to speech** using Google's advanced TTS with customizable voices
4. **Processes audio** into properly formatted WAV files
5. **Saves final podcast** ready for distribution

## Setup

1. **Obtain API credentials:**
   - Get Google Gemini API key from [AI Studio](https://aistudio.google.com/)
   - Configure credentials in n8n as "Google Gemini(PaLM) Api account"

2. **Configure voice settings:**
   - Choose from available voices: Kore (professional), Aoede (conversational), Laomedeia (energetic)
   - Customize script generation prompts if needed

3. **Test the workflow:**
   - Upload a sample PDF file
   - Verify audio output quality
   - Adjust voice settings as preferred

## How to customize this workflow

- **Modify script style:** Edit the prompt in the "Generate Podcast Script" node to change tone, length, or format
- **Change voice:** Update the voice name in "Prepare TTS Request" node
- **Add preprocessing:** Insert text cleaning nodes before script generation
- **Integrate with storage:** Connect to Google Drive, Dropbox, or other storage services
- **Add notifications:** Include Slack or email notifications when podcasts are ready

**Note:** This template requires Google Gemini API access and works best with text-based PDF files under 10MB.

## 🔗 Nodes Used

HTTP Request, Write Binary File, Basic LLM Chain, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
