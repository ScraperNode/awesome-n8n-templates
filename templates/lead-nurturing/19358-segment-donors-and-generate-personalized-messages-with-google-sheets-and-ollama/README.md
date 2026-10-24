# 💬 Segment donors and generate personalized messages with Google Sheets and Ollama

> ⚡ **1 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow pulls donor rows from Google Sheets, validates and segments donors using JavaScript-based RFM and behavioral rules, generates tailored email copy with a local Ollama (Llama 3.1) model, and writes the personalized message back to the original sheet while logging invalid rows.

## How it works
1. Runs with monthly trigger node or when you manually execute the workflow to start processing donor data from a Google Sheets document.
2. Reads all donor rows, normalizes key fields (email, donation amount, donation date), deduplicates exact duplicate rows, and flags each row as valid or invalid.
3. Appends or updates invalid rows in a separate “Invalid Rows” sheet for follow-up.
4. For valid donors, calculates RFM (recency, frequency, monetary) scores and assigns an RFM segment, then adds behavioral tags based on events attended and prior communications.
5. Maps each combined segment to a treatment plan (tone, ask type, channel, cadence) and builds a per-donor prompt.
6. Sends each prompt to Ollama (Llama 3.1) to draft a short donor message, validates the draft, and falls back to a segment-based template when the model output fails checks.
7. Updates the original Google Sheets “Donor Data” rows with the generated “Personalized Message” field (plus segment tags and review flags for tracking).

## Setup
1. Connect Google Sheets OAuth credentials and set the correct spreadsheet ID and sheet names for “Donor Data” and “Invalid Rows.”
2. Ensure the “Donor Data” sheet includes columns like Name, Email, Donation amount, Donation date, row_number, and a “Personalized Message” column for the write-back.
3. Connect an Ollama credential, confirm the llama3.1:latest model is available on your Ollama instance, and adjust model options (context, temperature, token limit) as needed.
4. Customize the segment-to-treatment table and fallback templates in the JavaScript steps to match your organization’s messaging guidelines.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Basic LLM Chain, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
