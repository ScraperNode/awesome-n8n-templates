# 🎯 Transcribe & analyze Telegram voice messages with AssemblyAI & GPT-4.1 to Gmail

> ⚡ **321 views** · 🎯 [AI Summarization & Classification](../)

## Description

## Telegram Voice → AI Summary & Sentiment Analysis via Gmail

This n8n template demonstrates how to capture Telegram voice messages, transcribe them into text using AssemblyAI, analyze the transcript with AI for summary and sentiment insights, and finally deliver a structured email report via Gmail.

## Use cases
- Automating meeting or lecture voice note transcriptions.  
- Gathering student feedback or training session insights from voice messages.  
- Quickly summarizing Telegram-delivered audio inputs into structured reports.  
- Reducing manual effort in capturing sentiment and key action items from conversations.  

## How it works
1. A voice message is sent to a connected Telegram Bot.  
2. The workflow fetches the file and uploads it to AssemblyAI.  
3. AssemblyAI generates a transcript from the audio.  
4. The transcript is analyzed by OpenAI to extract:  
   - Executive summary (120–180 words)  
   - Sentiment label and score  
   - Key points  
   - Action items (if any)  
   - Notable quotes  
   - Topics  
5. The formatted analysis is sent as an email report using Gmail.  
6. The workflow ends with a clean summary email containing actionable insights.  

## How to use
1. Import this workflow into your n8n instance.  
2. Set up and connect the required credentials:  
   - Telegram Bot API token  
   - AssemblyAI API key  
   - OpenAI API key  
   - Gmail OAuth2 account  
3. Replace placeholders (e.g., `&lt;&lt;YOUR_EMAIL ID&gt;&gt;` and `&lt;&lt;YOUR_ASSEMBLYAI_API_KEY&gt;&gt;`) with your actual values.  
4. Start the workflow. Whenever a voice message is received on the Telegram Bot, the workflow will process it end-to-end and deliver a polished email report.  

## Requirements
- Telegram Bot account (API token)  
- AssemblyAI account with API key  
- OpenAI account with API key  
- Gmail OAuth2 credentials configured in n8n  
- Active n8n instance  

## Customising this workflow
You can customize the email formatting, sentiment thresholds, or extend the workflow to save transcripts into Google Drive, Airtable, or any other connected apps. Additionally, you can trigger the same workflow from multiple input sources (e.g., local audio files, Google Drive links, or Telegram).

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
