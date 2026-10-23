# 💬 Draft evidence-based professor outreach emails with GPT-4.1 and Gmail

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow collects a student’s details plus CV and motivation letter PDFs, extracts evidence from an official professor profile page, and uses OpenAI to generate and quality-check a personalized outreach email, then creates an unsent Gmail draft with both documents attached.

## How it works
1. Receives a submission from an n8n Form with the student’s details, a professor profile URL, and Google Drive links for a CV and motivation letter.
2. Validates and normalizes the inputs, downloads both PDFs from Google Drive, and extracts their text content.
3. Uses OpenAI to build an evidence-based student research profile from the CV and motivation letter, then stops if required fields are missing.
4. Fetches the professor’s profile page via HTTP, strips scripts/styles from the HTML, and uses OpenAI to extract structured professor details and research evidence.
5. Uses OpenAI to compare professor and student evidence, producing a 0–10 research-fit score and the strongest documented connections.
6. Uses OpenAI to write a personalized outreach email (subject and body) and runs a second OpenAI validation pass to flag hallucinations or weak personalization.
7. If the email is approved and the professor email address is valid, creates an unsent Gmail draft addressed to the professor with the CV and motivation letter attached.

## Setup
1. Connect credentials for OpenAI, Google Drive (with access to the PDFs), and Gmail (where the draft is created).
2. Ensure the professor profile URL is publicly accessible as HTML (not JavaScript-only) and contains a name plus research evidence, or the workflow stops.
3. Submit the form with valid Google Drive file links for the CV and motivation letter PDFs and confirm the extracted professor email and attachments in the created Gmail draft.

## Requirements
- n8n, OpenAI API access, Google Drive and Gmail credentials, readable CV and motivation letter PDFs, and a public professor profile URL.

## Customization
- Customize form branding, AI models, research-fit criteria, email tone, length, subject and supervision request.

## Additional info
Turn your academic background into a personalized professor email built around documented research connections.
Students and consultants can prepare a quality-checked Gmail draft with both PDFs attached, ready for human review.
Adapt the prompts and schemas to reuse this approach for expert or professional outreach.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Stop and Error, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
