# 🎫 Score call quality and send coaching emails with Gemini, OpenAI, and Gmail

> ⚡ **20 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow helps contact centers and support teams automatically evaluate call quality and send coaching feedback without manual review. It uses AI to transcribe calls, score performance, detect risks, and generate clear feedback for agents.

## How it works
**Fetch recordings**
The workflow watches a Google Drive folder and downloads new call audio files automatically.

**Transcribe with AI**
Each recording is converted into a structured transcript using the Gemini model.

**Score performance**
An AI Agent evaluates the transcript against key criteria such as empathy, solution quality, clarity, and policy adherence.

**Detect risks and insights**
The workflow flags potential issues (e.g. missing consent or sensitive data) and extracts sentiment for both agent and customer.

**Send coaching email**
A personalized performance summary with strengths and improvement points is generated and sent to the agent via Gmail.

## Setup steps
1. Connect Google Drive and select your recordings folder

2. Add your Gemini API key for transcription

3. Add your OpenAI key for scoring and feedback generation

4. Connect Gmail to send automated coaching emails

(Optional) Customize scoring criteria inside the AI Agent node

## 🔗 Nodes Used

Google Drive, Gmail, Google Drive Trigger, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
