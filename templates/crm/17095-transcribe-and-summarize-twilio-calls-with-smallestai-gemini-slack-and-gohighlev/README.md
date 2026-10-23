# 🤝 Transcribe and summarize Twilio calls with Smallest.ai, Gemini, Slack, and GoHighLevel

> ⚡ **29 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow listens for completed Twilio call recordings, downloads and transcribes the audio with Smallest.ai, summarizes the transcript with Google Gemini, then notifies a Slack user and creates a new opportunity in GoHighLevel.

## How it works
1. Triggers when Twilio Voice Insights reports a call summary as complete.
2. Downloads the call recording audio from Twilio using the provided recording URL.
3. Sends the audio file to Smallest.ai to generate a speech-to-text transcription.
4. Uses a Google Gemini-powered AI agent to produce a short call summary, caller sentiment, and a suggested next step from the transcript and call metadata.
5. Sends the generated summary to a specified Slack user.
6. Creates a new opportunity in GoHighLevel that includes the caller number and AI summary.

## Setup
1. Connect your Twilio credentials and ensure Twilio Voice Insights call summary events are enabled for your account.
2. Add your Smallest.ai API credentials for the transcription step.
3. Configure Google Gemini credentials in the LangChain Google Gemini chat model used by the AI agent.
4. Connect your Slack credentials and set the target user (or change to a channel) for notifications.
5. Connect your GoHighLevel credentials and confirm the opportunity fields match your pipeline requirements.

## 🔗 Nodes Used

HTTP Request, Slack, HighLevel, AI Agent, Twilio Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
