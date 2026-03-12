# 🎣 Qualify leads from Gemini chat to Google Sheets and Slack with self-optimization

> ⚡ **18 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who is this for?
This workflow is designed for **growth agencies, SaaS founders, and sales teams** who want to move beyond static lead forms. It is ideal for those who need a **"living" system** that not only captures leads but also provides immediate value through **AI-generated strategies** and evolves based on performance data.

## How it works
The template operates in **two distinct phases**:

- **The Lead Engine**: A user interacts with a chat bubble. A Gemini-powered agent conversationally qualifies the lead (Name, Industry, Budget). A custom JavaScript node ensures data integrity before an "AI Council" node generates three industry-specific growth tactics. High-value leads are then routed to Slack and logged in Google Sheets.

- **The Self-Optimization Loop**: A scheduled trigger audits lead data in Google Sheets daily. It uses Gemini to identify friction points and sends a "System Audit" report to Slack, suggesting prompt improvements to increase conversion rates.

## How to set up
- **Credentials**: Connect your Google Gemini (API Key), Google Sheets (OAuth2), and Slack (OAuth2) accounts.
- **Google Sheets**: Create a spreadsheet with headers: Lead, Suggestion, and Status. Copy the Spreadsheet ID into the Google Sheets nodes. 
- **Slack**: Invite your n8n bot to a specific channel (e.g., /invite @n8n) and select that channel in the Slack nodes.
- **Memory**: Ensure the Window Buffer Memory node is connected to the AI Agent to maintain conversation state.

## Requirements
1. Google AI (Gemini) API Key.
2. Google Sheets for data logging.
3. Slack for real-time notifications.
4. n8n version 1.0+ (supporting AI Agent nodes).

## How to customize
1. **Scoring Logic:** Adjust the Scoring Logic code node to change what constitutes a "Hot" lead.
2. **AI Strategist:** Modify the prompt in the AI Council: Strategist node to provide different types of value (e.g., free audits instead of growth tactics).

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
