# 🎬 YouTube video summarizer with Gemini AI to WhatsApp, Telegram & Google Sheets

> ⚡ **1,177 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# Summarize YouTube Videos with Gemini AI, Google Sheets & WhatsApp/Telegram

## Aim
The **aim** of the *YouTube Video Summarizer Workflow* is to automate the process of summarizing or extracting transcripts from YouTube videos with the help of Gemini AI, while optionally storing results and distributing them to users via WhatsApp, Telegram, or Google Sheets. This enables fast, consistent generation and sharing of English summaries or transcripts from public YouTube content.

## Goal
The **goal** is to:
- Allow users to submit a YouTube link through various channels (Form Webhook, WhatsApp, Telegram).
- Use Gemini AI to either summarize the content or transcribe the complete video, always outputting in English.
- Return the output to the user via their original channel and optionally log it to Google Sheets for record-keeping.

## Requirements
The workflow relies on specific integrations and configurations:
- **n8n Platform**: Self-hosted or cloud n8n instance to host and automate the workflow.
- **Node Requirements**:
  1. **Form/Webhook Trigger**: Web form for pasting the YouTube link.
  2. **WhatsApp Trigger**: Starts workflow from incoming WhatsApp messages (YouTube link as input).
  3. **Telegram Trigger**: Initiates workflow from Telegram chat messages containing YouTube links.
  4. **Gemini AI Node**: Consumes the YouTube link and processes it for summarization or transcription (always in English).
  5. **Google Sheets Node**: Writes the result (summary/transcript) into a Google Sheet for logging and future reference.
  6. **WhatsApp/Telgram Send Message Nodes**: Delivers summarized results or transcripts back to the user on the same platform where they triggered the workflow.
- **Credentials**:
  - *Gemini/Google AI Platform account* for AI summarization and transcription.
  - *Google Sheets account* for storing output.
  - *WhatsApp Business API* for WhatsApp automation.
  - *Telegram Bot API* for Telegram automation.
- **Input Requirements**:
  - Publicly-accessible YouTube video link (max ~30 min, as per summarized logic).
- **Output**: English video summary or full transcript, delivered via user’s requested channel and/or stored in Google Sheets.

## API Usage
The workflow integrates several APIs for optimal automation:
- **Gemini AI API**: Used in the main summarization node. Receives the YouTube link and a prompt with detailed instructions. Returns either a clear, concise English summary or a full transcript translated into English, handling Hindi, English, or mixed-language videos. [Ref: Workflow JSON]
- **Google Sheets API**: Used to log the output for each processed video, making it easy to reference histories or track requests. [Ref: Workflow JSON]
- **WhatsApp Business API**: Sends back the summary or transcript to the user who initiated via WhatsApp. [Ref: Workflow JSON]
- **Telegram Bot API**: Sends results back to Telegram users directly in chat. [Ref: Workflow JSON]

## Output Formatting/Conversion
- The AI output is always in English, tailored to the option chosen (summary vs transcript).
- Structured output: Bulleted, neutral, and easy to read, suitable for sharing with users or for business documentation.
- Google Sheets node maps and writes each video’s results to a dedicated row for easy history review.

## How to Use
- By default, the workflow uses a **manual trigger** via a web form, but you may add triggers for WhatsApp or Telegram to suit your needs.
- Users paste a YouTube link, then select whether they want a summary or transcript (based on your implementation logic).
- Results are returned in their channel and optionally logged to your Google Sheet.
- All processing is handled securely using your Gemini API credentials.
- You can expand this logic by adding more integrations (email, Slack, etc.).

## Customising this Workflow
- Custom prompts can be written for different styles or output formats (e.g., SEO key points, step-by-step guides).
- Add logic for batch processing multiple videos or bulk export to different cloud drives.
- Integrate into central dashboards, CRMs, or content pipelines using n8n’s hundreds of available integrations.

## Good to Know
- **Gemini pricing:** At the time of writing, each YouTube video summarization costs $0.039 USD. See official Gemini Pricing for current rates.
- **Geo-restriction:** The Gemini video model may be geo-restricted (error: “model not found” outside some regions).
- **Video Limits:** Intended for videos up to ~30 minutes for best processing reliability.
- **Scaling:** Can be easily adapted for high-volume operations using n8n’s queue and scheduling features.

## Workflow Summary
The *YouTube Video Summarizer Workflow* automates summarizing and transcribing YouTube videos using AI and n8n. Users send video links via web forms, WhatsApp, or Telegram. Results are generated via Gemini, sent back in-app, and logged to Google Sheets, enabling effortless knowledge sharing and organizational automation at scale.

*Timestamp*: 12:37 PM IST, Wednesday, September 17, 2025

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, WhatsApp Business Cloud, n8n Form Trigger, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
