# 💬 Auto-follow-up for canceled Calendly meetings with GPT-4, Loom & Asana

> ⚡ **935 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## This n8n workflow automatically detects canceled meetings from Calendly, uses GPT to write a friendly follow-up message, and sends it via Gmail, complete with a personalized Loom video link. It also creates an Asana task to remind your team to follow up manually if needed.

Ideal for B2B consultants, agencies, and sales teams who want to salvage missed opportunities and stay top-of-mind with prospects after no-shows.

⸻

## Who it’s for

Sales teams, consultants, and agencies who rely on scheduled calls to close business  and want to re-engage leads who cancel or no-show using automated, human-sounding follow-ups.

⸻

## How it works / What it does
1. A Calendly Webhook triggers the flow when a meeting is canceled.
2. Edit Fields extracts the meeting details (who canceled, when, and why).
3. A GPT-4 node writes a personalized follow-up email based on the meeting context.
4. You manually paste in your Loom video link.
5. A Merge node combines the AI-written message, user info, and video link.
6. Gmail sends the follow-up message automatically to the contact.
7. An Asana task is created for your team to track the missed call and optionally follow up manually.

⸻

## How to set up
1. Create a webhook in Calendly and connect it to the Calendly Trigger node.
2. Add your OpenAI key in the Message a Model node.
3. Connect your Gmail and Asana accounts via n8n credentials.
4. Manually paste in the Loom video link in the Loom Link node.
5. Set your preferred Asana project and teammate in the Create a Task node.

⸻

## Requirements

- A Calendly account
- OpenAI API key
- Gmail account with OAuth connected in n8n
- Asana account with access to a project and user ID

⸻

## How to customize the workflow

- Update the GPT prompt to change the tone or add context based on your business.
- Replace Loom with a Vidyard, Tella, or custom-hosted video link.
- Add a Slack notification node to alert your sales team when a call is missed.
- Link with a CRM or Google Sheets to track follow-up activity across your pipeline.

This modular workflow helps you turn no-shows into new opportunities, while keeping your team organized and your leads engaged.

## 🔗 Nodes Used

Asana, Calendly Trigger, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
