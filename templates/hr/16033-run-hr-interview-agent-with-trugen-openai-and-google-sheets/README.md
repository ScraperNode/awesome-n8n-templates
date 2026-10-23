# 👥 Run HR interview agent with TruGen, OpenAI, and Google Sheets

> ⚡ **47 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow creates a TruGen.ai interview agent from a pasted job description, saves the agent and interview link to Google Sheets, then receives call-ended webhook to fetch the interview transcript, analyze it with OpenAI, and log structured candidate evaluation results back to Google Sheets.

## How it works
1. Starts manually to initialize setup with your job description.
2. Creates a custom TruGen.ai interview agent using the job description, welcome message, and system prompt, and sets a callback URL for call-ended events.
3. Stores the created TruGen.ai agent ID and interview link and appends them to a Google Sheets “Interview Agents” worksheet.
4. Receives a POST webhook callback when an interview call ends.
5. Fetches the completed conversation details and transcript from TruGen.ai.
6. Sends the transcript to OpenAI (GPT-4o-mini) to generate a strict-JSON hiring assessment with scores, strengths, concerns, and next steps.
7. Formats the assessment into spreadsheet columns and appends the results to a Google Sheets “Interview Results” worksheet.

## Setup
1. Create and connect a TruGen.ai API credential, then update the agent creation step with your public webhook callback URL and ensure the callback event is set to call_ended.
2. Add an OpenAI API credential for the interview evaluation step.
3. Connect a Google Sheets OAuth credential and select your spreadsheet and the two worksheets used for “Interview Agents” and “Interview Results” (with matching column headers).

## Requirements
- TruGen.AI Credentials

## 🔗 Nodes Used

Google Sheets, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
