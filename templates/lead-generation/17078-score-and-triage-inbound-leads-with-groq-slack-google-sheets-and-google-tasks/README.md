# 🎣 Score and triage inbound leads with Groq, Slack, Google Sheets, and Google Tasks

> ⚡ **411 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow captures leads via an n8n form, stores them in an n8n Data Table, uses a Groq Llama 3.3 chat model to score and categorize each lead and draft a reply, optionally alerts in Slack and creates a Google Task, and writes the results back to the Data Table.

## How it works
1. Receives a new lead submission through an n8n Form trigger (name, email, company, source, and message).
2. Saves the submitted lead into an n8n Data Table and keeps only the fields needed for scoring.
3. Sends the lead details to a Groq Chat Model via an AI Agent to generate a JSON response with a score (1–100), tier (Hot/Warm/Cold), and a suggested reply.
4. Uses the AI Agent’s tool actions to post an alert to Slack and create a task in Google Tasks only when the lead’s score is above the defined threshold.
5. Parses the AI Agent output as JSON and updates the original Data Table row with the generated score, tier, and reply.

## Setup
1. Configure the n8n Form trigger and embed or share its URL where you collect leads.
2. Create or select an n8n Data Table for leads and ensure it includes columns for score, tier, reply, and an id used to match rows during updates.
3. Add a Groq API credential and select the Groq chat model used by the AI Agent.
4. Add Slack credentials and set the target channel for high-score lead alerts.
5. Add Google Tasks credentials (and optionally Google Sheets OAuth credentials if you intend to use the Google Sheets tool) for the AI Agent’s follow-up actions.

## 🔗 Nodes Used

AI Agent, n8n Form Trigger, Groq Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
