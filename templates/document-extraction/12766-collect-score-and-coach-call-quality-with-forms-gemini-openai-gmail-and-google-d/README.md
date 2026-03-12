# 🔬 Collect, score, and coach call quality with forms, Gemini, OpenAI, Gmail, and Google Drive

> ⚡ **10 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow helps support teams evaluate call quality and deliver structured feedback without manual review. Agents upload their recordings using an n8n Form, and the system handles transcription, scoring, risk checks, and coaching delivery automatically using Gemini, OpenAI, Google Drive, and Gmail.

## How it works

**Form submission**
Agents submit their name, email, and call recording using an n8n Form. The file is stored securely in Google Drive.

**AI transcription**
Gemini converts the audio into a structured transcript for analysis.

**Performance scoring**
An AI Agent evaluates the conversation across key criteria such as empathy, clarity, accuracy, and policy compliance, producing a weighted score out of 100.

**Sentiment and risk detection**
The workflow identifies customer sentiment and flags potential issues like missing consent or sensitive data exposure.

**Coaching delivery**
A personalized performance summary is generated and sent automatically to both the agent and supervisor via Gmail.

## Setup steps

1. Configure the n8n Form fields (agent name, email, file upload)
2. Connect Google Drive for file storage
3. Add your Gemini and OpenAI API credentials
4. Connect Gmail for automated feedback emails
5. (Optional) Adjust scoring criteria inside the AI Agent node

## 🔗 Nodes Used

Google Drive, Gmail, AI Agent, Basic LLM Chain, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
