# 💬 Automate outbound lead follow-up & qualification

> ⚡ **592 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works
This workflow pulls pending leads from Google Sheets on a scheduled trigger and processes each record individually. For every lead, an AI agent generates a structured subject and HTML body based on predefined rules. A tracking ID is then created and injected into the outgoing email before sending via Gmail. Once sent, Gmail metadata is retrieved and forwarded to your tracking API to initiate a follow-up sequence, and the corresponding lead entry in Google Sheets is updated.

## Step-by-step

- **Lead intake**
  - **Schedule Trigger** – Runs daily and initiates lead retrieval.
  - **Get row(s) in sheet** – Fetches only rows marked with “Pending”.
  - **Loop Over Items** – Iterates through each lead entry.

- **Email generation**
  - **AI Agent** – Generates subject and HTML body using provided lead fields.
  - **OpenAI Chat Model** – Executes the LLM instructions powering the email creation.
  - **Structured Output Parser** – Validates that the AI returns compliant JSON.

- **Tracking setup**
  - **Generates Tracking ID** – Calls your tracking API and receives a unique tracking identifier.
  - The tracking ID is embedded into the email through a tracking pixel.

- **Email dispatch**
  - **Send a message** – Sends the personalized email from Gmail using the AI-generated subject and body.

- **Metadata retrieval**
  - **Fetches Email Data** – Retrieves the sent email’s messageId, threadId, and related metadata.

- **Sequence initiation**
  - **Starts Sequence** – Posts metadata and tracking ID to your tracking API to activate the automated follow-up sequence.

- **Lead status update**
  - **Append or update row in sheet** – Marks the processed lead as “Done” and updates Google Sheets.

## Why use this?
- Automates outbound lead processing without manual input or oversight.
- Delivers consistent, structured, AI-generated email outreach.
- Ensures every email is tracked with unique identifiers for engagement analytics.
- Pushes metadata to your tracking system for reliable follow-up sequences.
- Updates your Google Sheets lead pipeline automatically to prevent duplicate outreach.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
