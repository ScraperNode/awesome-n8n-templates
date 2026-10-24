# 💬 Segment donors and draft personalized outreach with Google Sheets and Ollama

> ⚡ **1 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow pulls donor records from Google Sheets, validates and segments donors using RFM and engagement signals, generates personalized outreach drafts with a local Ollama Llama 3.1 model, and writes the drafted “Personalized Message” back to the same spreadsheet while logging invalid rows.

## How it works
1. Runs manually or on a monthly schedule and reads donor rows from a Google Sheets spreadsheet.
2. Validates required fields (like Name and Email), normalizes donation amount/date, deduplicates identical rows, and tags each row as valid or invalid.
3. Appends or updates invalid rows into a separate Google Sheets tab named “Invalid Rows.”
4. Calculates RFM scores (recency, frequency, monetary) per donor, assigns an RFM segment, and adds latest donation details.
5. Adds behavioral segmentation based on event attendance and pre-donation communications, then maps each combined segment to a tone and ask strategy.
6. Sends a per-donor prompt to Ollama (Llama 3.1) to draft a short message, validates the output, and falls back to a predefined template if the draft is empty, malformed, or too long.
7. Updates the original Google Sheets donor records with the final personalized message and review flags.

## Setup
1. Connect your Google Sheets OAuth credentials and set the correct spreadsheet and sheet/tab names for “Donor Data” and “Invalid Rows.”
2. Ensure your “Donor Data” sheet includes columns for Name, Email, Donation amount, Donation date, and a “Personalized Message” column for write-back.
3. Set up Ollama credentials in n8n and make sure the llama3.1:latest model is available and running where n8n can reach it.
4. Review and customize the segment-to-treatment mapping table (tone and ask_type) and the fallback templates to match your organization’s voice.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Basic LLM Chain, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
