# 🎫 Automated multilingual Gmail draft reply with OpenAI GPT-4o

> ⚡ **2,260 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Automated Multilingual Gmail Draft Reply with OpenAI GPT-4o in n8n

### Who is this for?
This workflow is ideal for anyone who receives a high volume of Gmail inquiries, especially those providing multilingual customer support or handling diverse client 
communications.

### What problem is this workflow solving? 
Managing frequent emails in multiple languages can be overwhelming. This workflow reduces manual drafting by automatically generating context-aware replies using OpenAI GPT-4o, letting users focus on personalization and quality assurance.

### What this workflow does
- Monitors your Gmail inbox for new emails with a specific label (e.g., "Inquiry").
- Uses OpenAI GPT-4o for message assessment and language detection.
- Parses information using a JSON parser.
- Generates an AI-powered draft reply in the detected language via OpenAI GPT-4o.
- Converts the reply to HTML and saves it as a draft in the original Gmail thread for your review.

### Setup
- Connect your Gmail account and set up relevant labels in both Gmail and the workflow.
- Integrate your OpenAI credentials in n8n.
- Configure the workflow trigger for your desired labels.

## How to customize this workflow to your needs
- Adjust label names in both Gmail and the workflow for different email categories.
- Define custom starting and ending phrases for draft replies per supported language.
- Expand supported languages or modify AI prompt instructions to suit your brand’s tone.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
