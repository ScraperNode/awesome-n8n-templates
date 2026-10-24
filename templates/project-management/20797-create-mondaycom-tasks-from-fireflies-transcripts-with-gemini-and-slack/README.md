# 📋 Create Monday.com tasks from Fireflies transcripts with Gemini and Slack

> ⚡ **2 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow listens for Fireflies.ai transcript-ready webhooks, fetches the meeting transcript, uses Google Gemini to extract structured action items, creates each item as a task in Monday.com, and posts a consolidated meeting recap to a Slack channel.

## How it works
1. Receives a POST webhook from Fireflies.ai when a meeting transcript finishes processing and immediately returns an OK response.
2. Queries the Fireflies.ai GraphQL API to fetch the transcript title, date, summary action items, and detected action items.
3. Sends the transcript content to Google Gemini to extract a JSON array of action items with task title, assignee, deadline, priority, and notes.
4. Parses the Gemini JSON output and splits it into individual task items while attaching the meeting title and date.
5. Creates one item per action in Monday.com via its GraphQL API, mapping deadlines and notes into board columns.
6. Builds a formatted recap message listing all created tasks and sends it to the selected Slack channel.

## Setup
1. Add Fireflies.ai API access and configure Fireflies to call this workflow’s webhook URL when transcripts are ready.
2. Create an HTTP Header Auth credential for Fireflies (Authorization: Bearer <API_KEY>) and assign it to the Fireflies transcript request.
3. Add a Google Gemini (PaLM) API credential for the Gemini model used to extract action items.
4. Create an HTTP Header Auth credential for Monday.com (Authorization: <MONDAY_TOKEN>), set your Monday board ID, and ensure the referenced column IDs (for example, status, date4, and text) match your board.
5. Add Slack OAuth2 credentials and replace the target Slack channel ID with the channel where you want the recap posted.

## Requirements
- Fireflies.ai account with API access
- Monday.com account with an API token
- Google AI Studio (Gemini) API key
- Slack workspace

## Customization
- Edit the Gemini prompt to match your task naming or add output fields
- Add a Switch node to route tasks to different Monday boards by keyword
- Replace Slack with Telegram or email

## Additional info
Column IDs differ per Monday.com board. Check yours via the Monday API or the board's column settings before activating. The status label "Not Started" must exist on your board or be created automatically.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
